// app/dashboard/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
)

type Member = {
  id: number
  full_name: string
  nickname: string | null
  phone_call: string
  phone_whatsapp: string
  email: string | null
  status: string
  notes: string | null
  registered_at: string
}

export default function DashboardPage() {
  const [members, setMembers] = useState<Member[]>([])
  const [currentMember, setCurrentMember] = useState<Member | null>(null)
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [editForm, setEditForm] = useState({
    full_name: '',
    nickname: '',
    phone_call: '',
    phone_whatsapp: '',
    email: '',
    status: '',
    notes: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    fetchMembers()
  }, [])

  const fetchMembers = async () => {
    setLoading(true)
    setError('')

    try {
      const { data, error: supabaseError } = await supabase
        .from('members')
        .select('*')
        .order('registered_at', { ascending: false })

      if (supabaseError) {
        console.error('Error fetching members:', supabaseError)
        setError('Failed to load dashboard data.')
      } else {
        setMembers(data || [])
        if (data && data.length > 0) {
          setCurrentMember(data[0])
        }
      }
    } catch (err) {
      console.error('Error:', err)
      setError('An unexpected error occurred.')
    }

    setLoading(false)
  }

  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      active: 'bg-white/20 text-white',
      occasional: 'bg-yellow-500/20 text-yellow-400',
      'short-term': 'bg-blue-500/20 text-blue-400',
      moved: 'bg-gray-500/20 text-gray-400',
      undecided: 'bg-orange-500/20 text-orange-400'
    }
    return colors[status] || 'bg-white/10 text-gray-400'
  }

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      active: 'Active',
      occasional: 'Occasional',
      'short-term': 'Short-term',
      moved: 'Moved',
      undecided: 'Undecided'
    }
    return labels[status] || status
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-KE', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2)
  }

  const openMemberModal = (member: Member) => {
    // Only allow viewing details of the current user, not blurred members
    if (currentMember && member.id === currentMember.id) {
      setSelectedMember(member)
      setIsModalOpen(true)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedMember(null)
  }

  const openEditModal = () => {
    if (currentMember) {
      setEditForm({
        full_name: currentMember.full_name,
        nickname: currentMember.nickname || '',
        phone_call: currentMember.phone_call,
        phone_whatsapp: currentMember.phone_whatsapp,
        email: currentMember.email || '',
        status: currentMember.status,
        notes: currentMember.notes || ''
      })
      setIsEditModalOpen(true)
    }
  }

  const closeEditModal = () => {
    setIsEditModalOpen(false)
  }

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEditForm(prev => ({ ...prev, [name]: value }))
  }

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentMember) return

    setIsSubmitting(true)
    setError('')

    try {
      const { data, error: supabaseError } = await supabase
        .from('members')
        .update({
          full_name: editForm.full_name,
          nickname: editForm.nickname || null,
          phone_call: editForm.phone_call,
          phone_whatsapp: editForm.phone_whatsapp,
          email: editForm.email || null,
          status: editForm.status,
          notes: editForm.notes || null
        })
        .eq('id', currentMember.id)
        .select()

      if (supabaseError) {
        console.error('Update error:', supabaseError)
        setError('Failed to update profile. Please try again.')
      } else {
        setCurrentMember(data?.[0] || null)
        setMembers(prev => prev.map(m => m.id === currentMember.id ? (data?.[0] || m) : m))
        setIsEditModalOpen(false)
      }
    } catch (err) {
      console.error('Error:', err)
      setError('An unexpected error occurred.')
    }

    setIsSubmitting(false)
  }

  const ShimmerRow = () => (
    <div className="flex items-center gap-3 p-3 animate-pulse">
      <div className="w-10 h-10 rounded-full bg-white/10"></div>
      <div className="flex-1">
        <div className="h-4 w-32 bg-white/10 rounded mb-1"></div>
        <div className="h-3 w-20 bg-white/10 rounded"></div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-md mx-auto px-4 py-4">

        {/* User Profile - Top (no border, only bottom line) */}
        {loading ? (
          <div className="pb-4 mb-4 border-b border-white/10 animate-pulse">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white/10"></div>
              <div className="flex-1">
                <div className="h-5 w-32 bg-white/10 rounded mb-1"></div>
                <div className="h-4 w-20 bg-white/10 rounded"></div>
              </div>
            </div>
          </div>
        ) : currentMember ? (
          <div className="pb-4 mb-4 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white text-lg font-bold border border-white/20 flex-shrink-0">
                {getInitials(currentMember.full_name)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-white font-semibold text-base truncate">{currentMember.full_name}</h2>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${getStatusBadge(currentMember.status)}`}>
                    {getStatusLabel(currentMember.status)}
                  </span>
                </div>
                {currentMember.nickname && (
                  <p className="text-gray-400 text-xs">"{currentMember.nickname}"</p>
                )}
                <div className="flex flex-wrap gap-3 mt-1 text-xs">
                  <span className="text-gray-500"><i className="fas fa-phone mr-1"></i> {currentMember.phone_call}</span>
                  <span className="text-gray-500"><i className="fab fa-whatsapp mr-1"></i> {currentMember.phone_whatsapp}</span>
                </div>
              </div>
              <button
                onClick={openEditModal}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-gray-400 hover:text-white flex-shrink-0"
                title="Edit Profile"
              >
                <i className="fas fa-pen text-xs"></i>
              </button>
            </div>
          </div>
        ) : (
          <div className="pb-4 mb-4 border-b border-white/10 text-center text-gray-500 text-sm">
            No profile data found
          </div>
        )}

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-300 text-xs flex items-center gap-2">
            <i className="fas fa-exclamation-circle text-red-400"></i>
            {error}
          </div>
        )}

        {/* Community Members */}
        <div className="bg-white/5 rounded-2xl border border-white/10 p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-['Orbitron'] text-xs text-white tracking-wider">
              <i className="fas fa-users mr-2 text-gray-400"></i> Community
            </h2>
            <span className="text-[10px] text-gray-500">{members.length} members</span>
          </div>

          {loading ? (
            <div>
              {[...Array(4)].map((_, i) => (
                <ShimmerRow key={i} />
              ))}
            </div>
          ) : members.length === 0 ? (
            <div className="text-center py-8 text-gray-500 text-sm">
              <i className="fas fa-inbox text-2xl block mb-2 text-gray-600"></i>
              <p>No members yet</p>
            </div>
          ) : (
            <div className="space-y-1">
              {members.slice(0, 8).map((member) => {
                const isCurrentUser = currentMember && member.id === currentMember.id
                return (
                  <div
                    key={member.id}
                    onClick={() => isCurrentUser && openMemberModal(member)}
                    className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors ${
                      isCurrentUser
                        ? 'bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10'
                        : 'cursor-default'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {getInitials(member.full_name)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className={`text-sm font-medium truncate ${isCurrentUser ? 'text-white' : 'text-white blur-[6px] select-none'}`}>
                          {member.full_name}
                        </p>
                        {isCurrentUser && (
                          <span className="text-[9px] text-white/40 font-['Orbitron'] border border-white/20 px-1.5 py-0.5 rounded-full">YOU</span>
                        )}
                      </div>
                      <p className={`text-xs truncate ${isCurrentUser ? 'text-gray-400' : 'text-gray-400 blur-[4px] select-none'}`}>
                        {member.phone_call}
                      </p>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${getStatusBadge(member.status)} flex-shrink-0`}>
                      {getStatusLabel(member.status)}
                    </span>
                    {isCurrentUser && (
                      <i className="fas fa-chevron-right text-gray-500 text-xs"></i>
                    )}
                  </div>
                )
              })}
              {members.length > 8 && (
                <div className="text-center pt-2">
                  <button className="text-xs text-gray-500 hover:text-white transition-colors">
                    View all {members.length} members <i className="fas fa-arrow-right ml-1 text-[10px]"></i>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Register Button */}
        <div className="mt-4">
          <Link href="/register">
            <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium flex items-center justify-center gap-2 border border-white/10">
              <i className="fas fa-user-plus"></i> Register New Member
            </button>
          </Link>
        </div>

        {/* Member Detail Modal - Only for current user */}
        {isModalOpen && selectedMember && currentMember && selectedMember.id === currentMember.id && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <div
              className="bg-[#1a1a24] rounded-2xl border border-white/20 max-w-sm w-full p-5 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white text-lg font-bold border border-white/20">
                    {getInitials(selectedMember.full_name)}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base">{selectedMember.full_name}</h3>
                    {selectedMember.nickname && (
                      <p className="text-gray-400 text-sm">"{selectedMember.nickname}"</p>
                    )}
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors text-lg"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Status</span>
                  <span className={`px-3 py-0.5 rounded-full text-xs ${getStatusBadge(selectedMember.status)}`}>
                    {getStatusLabel(selectedMember.status)}
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Phone</span>
                  <span className="text-white">{selectedMember.phone_call}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">WhatsApp</span>
                  <span className="text-white">{selectedMember.phone_whatsapp}</span>
                </div>
                {selectedMember.email && (
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">Email</span>
                    <span className="text-white">{selectedMember.email}</span>
                  </div>
                )}
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Registered</span>
                  <span className="text-white">{formatDate(selectedMember.registered_at)}</span>
                </div>
                {selectedMember.notes && (
                  <div>
                    <span className="text-gray-400">Notes</span>
                    <p className="text-white mt-1 bg-white/5 p-2 rounded-lg text-sm">{selectedMember.notes}</p>
                  </div>
                )}
              </div>

              <div className="mt-4 flex gap-2">
                <a
                  href={`tel:${selectedMember.phone_call}`}
                  className="flex-1 text-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-white text-sm"
                >
                  <i className="fas fa-phone mr-2"></i> Call
                </a>
                <a
                  href={`https://wa.me/${selectedMember.phone_whatsapp.replace(/\s/g, '').replace(/^0/, '254')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-white text-sm"
                >
                  <i className="fab fa-whatsapp mr-2"></i> WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Edit Profile Modal - Black background */}
        {isEditModalOpen && currentMember && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeEditModal}
          >
            <div
              className="bg-black rounded-2xl border border-white/20 max-w-sm w-full p-5 shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">Edit Profile</h3>
                <button
                  onClick={closeEditModal}
                  className="text-gray-400 hover:text-white transition-colors text-lg"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <form onSubmit={handleUpdateProfile} className="space-y-3">
                <div>
                  <label className="block text-gray-400 text-xs font-['Orbitron'] mb-1">FULL NAME *</label>
                  <input
                    type="text"
                    name="full_name"
                    value={editForm.full_name}
                    onChange={handleEditChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-white/30 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-['Orbitron'] mb-1">NICKNAME</label>
                  <input
                    type="text"
                    name="nickname"
                    value={editForm.nickname}
                    onChange={handleEditChange}
                    placeholder="e.g. Bri, BK"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-white/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-['Orbitron'] mb-1">PHONE (CALLS) *</label>
                  <input
                    type="tel"
                    name="phone_call"
                    value={editForm.phone_call}
                    onChange={handleEditChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-white/30 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-['Orbitron'] mb-1">WHATSAPP NUMBER *</label>
                  <input
                    type="tel"
                    name="phone_whatsapp"
                    value={editForm.phone_whatsapp}
                    onChange={handleEditChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-white/30 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-['Orbitron'] mb-1">EMAIL <span className="text-gray-500 font-normal">(optional)</span></label>
                  <input
                    type="email"
                    name="email"
                    value={editForm.email}
                    onChange={handleEditChange}
                    placeholder="you@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-white/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-['Orbitron'] mb-1">STATUS *</label>
                  <select
                    name="status"
                    value={editForm.status}
                    onChange={handleEditChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-white/30 transition-all"
                    required
                  >
                    <option value="active">Active and committed member</option>
                    <option value="occasional">I attend occasionally</option>
                    <option value="short-term">Short-term member</option>
                    <option value="moved">I have moved to another branch</option>
                    <option value="undecided">I am undecided about my membership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-['Orbitron'] mb-1">NOTES</label>
                  <textarea
                    name="notes"
                    value={editForm.notes}
                    onChange={handleEditChange}
                    rows={2}
                    placeholder="Any additional information..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-white/30 transition-all resize-none"
                  />
                </div>

                {error && (
                  <div className="text-red-300 text-xs bg-red-500/10 p-2 rounded-lg">{error}</div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2.5 rounded-lg font-['Orbitron'] text-xs tracking-wider transition-all ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed text-gray-300'
                      : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  {isSubmitting ? (
                    <><i className="fas fa-spinner fa-spin mr-2"></i> SAVING...</>
                  ) : (
                    <><i className="fas fa-save mr-2"></i> SAVE CHANGES</>
                  )}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 pt-3 border-t border-white/10 text-center text-[10px] pb-6 text-gray-500">
          <i className="fas fa-shield-haltered text-white/30 mr-1"></i>
          Kiambu COGYOK — Your data is private
        </div>
      </div>
    </div>
  )
}