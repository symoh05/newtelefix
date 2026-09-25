// app/admin/members/page.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
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
  agreed: boolean
  registered_at: string
}

const statusOptions = [
  { value: 'all', label: 'All Status' },
  { value: 'active', label: 'Active' },
  { value: 'occasional', label: 'Occasional' },
  { value: 'short-term', label: 'Short-term' },
  { value: 'moved', label: 'Moved' },
  { value: 'undecided', label: 'Undecided' }
]

export default function AdminMembersPage() {
  const [members, setMembers] = useState<Member[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [error, setError] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetchMembers()
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
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
        setError('Failed to load members. Please try again.')
      } else {
        setMembers(data || [])
      }
    } catch (err) {
      console.error('Error:', err)
      setError('An unexpected error occurred.')
    }

    setLoading(false)
  }

  const filteredMembers = members.filter(member => {
    const matchesSearch = 
      member.full_name.toLowerCase().includes(search.toLowerCase()) ||
      (member.nickname && member.nickname.toLowerCase().includes(search.toLowerCase())) ||
      member.phone_call.includes(search) ||
      member.phone_whatsapp.includes(search)

    const matchesStatus = filterStatus === 'all' || member.status === filterStatus

    return matchesSearch && matchesStatus
  })

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

  const getStatusOptionLabel = (value: string) => {
    const option = statusOptions.find(opt => opt.value === value)
    return option ? option.label : 'All Status'
  }

  const ShimmerCard = () => (
    <div className="bg-white/5 rounded-xl border border-white/10 p-4 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/10"></div>
        <div className="flex-1">
          <div className="h-4 w-32 bg-white/10 rounded mb-1"></div>
          <div className="h-3 w-20 bg-white/10 rounded"></div>
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        <div className="h-8 w-16 bg-white/10 rounded"></div>
        <div className="h-8 w-16 bg-white/10 rounded"></div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-2xl mx-auto px-4 py-4">

        {/* Header */}
        <div className="mb-6">
          <div className="inline-block bg-white/10 text-white font-['Orbitron'] text-xs tracking-wider px-4 py-1.5 rounded-full mb-3 border border-white/20">
            <i className="fas fa-list mr-2"></i> Directory
          </div>
          <h1 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-white">
            Member <span className="text-gray-400">Directory</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            All registered members of Kiambu COGYOK
          </p>
          <div className="w-12 h-0.5 bg-white/30 mt-2"></div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs"></i>
            <input
              type="text"
              placeholder="Search members..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-white/30 transition-all placeholder-gray-500"
            />
          </div>

          {/* Custom Status Dropdown */}
          <div className="relative z-20" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between gap-2 px-4 py-2 min-w-[140px] bg-white/5 border border-white/10 rounded-lg text-white text-sm hover:bg-white/10 transition-all focus:outline-none focus:border-white/30"
            >
              <span>{getStatusOptionLabel(filterStatus)}</span>
              <i className={`fas fa-chevron-down text-gray-500 text-xs transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
            </button>

            {isDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10"
                  onClick={() => setIsDropdownOpen(false)}
                />
                
                <div className="absolute top-full left-0 right-0 mt-1 bg-black border border-white/20 rounded-xl overflow-hidden shadow-2xl z-30">
                  {statusOptions.map((option, index) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setFilterStatus(option.value)
                        setIsDropdownOpen(false)
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-all flex items-center gap-3 ${
                        filterStatus === option.value
                          ? 'bg-white/10 text-white'
                          : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      } ${index !== statusOptions.length - 1 ? 'border-b border-white/10' : ''}`}
                    >
                      {filterStatus === option.value && (
                        <i className="fas fa-check text-white text-xs w-4"></i>
                      )}
                      <span className={filterStatus === option.value ? '' : 'ml-6'}>
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-2 mb-4 text-sm">
          <span className="text-gray-500">Total:</span>
          <span className="text-white font-semibold">{members.length}</span>
          <span className="text-gray-500 ml-2">Showing:</span>
          <span className="text-white font-semibold">{filteredMembers.length}</span>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-300 text-xs flex items-center gap-2">
            <i className="fas fa-exclamation-circle text-red-400"></i>
            {error}
          </div>
        )}

        {/* Member Cards */}
        {loading ? (
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <ShimmerCard key={i} />
            ))}
          </div>
        ) : filteredMembers.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <i className="fas fa-users text-4xl block mb-3 text-gray-600"></i>
            <p>No members found.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white/5 rounded-xl border border-white/10 p-4 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {getInitials(member.full_name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium text-sm truncate">{member.full_name}</p>
                    {member.nickname && (
                      <p className="text-gray-400 text-xs">"{member.nickname}"</p>
                    )}
                    <div className="flex flex-wrap gap-2 mt-0.5 text-xs">
                      <span className="text-gray-500"><i className="fas fa-phone mr-1"></i>{member.phone_call}</span>
                      <span className="text-gray-500"><i className="fab fa-whatsapp mr-1"></i>{member.phone_whatsapp}</span>
                    </div>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${getStatusBadge(member.status)} flex-shrink-0`}>
                    {getStatusLabel(member.status)}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                  <span className="text-[10px] text-gray-500">
                    <i className="fas fa-calendar-alt mr-1"></i> {formatDate(member.registered_at)}
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={`tel:${member.phone_call}`}
                      className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center text-gray-400 hover:text-white"
                      title="Call"
                    >
                      <i className="fas fa-phone text-xs"></i>
                    </a>
                    <a
                      href={`https://wa.me/${member.phone_whatsapp.replace(/\s/g, '').replace(/^0/, '254')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center text-gray-400 hover:text-white"
                      title="WhatsApp"
                    >
                      <i className="fab fa-whatsapp text-xs"></i>
                    </a>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center text-gray-400 hover:text-white"
                        title="Email"
                      >
                        <i className="fas fa-envelope text-xs"></i>
                      </a>
                    )}
                    {member.notes && (
                      <div className="relative group">
                        <button
                          className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center text-gray-400 hover:text-white"
                          title="View notes"
                        >
                          <i className="fas fa-sticky-note text-xs"></i>
                        </button>
                        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-[#1a1a24] border border-white/10 text-white text-xs rounded-lg max-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          {member.notes}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 pt-3 border-t border-white/10 text-center text-[10px] pb-6 text-gray-500">
          <i className="fas fa-shield-haltered text-white/30 mr-1"></i>
          Kiambu COGYOK — All members
        </div>
      </div>
    </div>
  )
}