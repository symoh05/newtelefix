// app/register/page.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
)

type FormData = {
  fullName: string
  nickname: string
  phoneCall: string
  phoneWhatsApp: string
  email: string
  status: string
  notes: string
}

const statusOptions = [
  { value: '', label: '— Select your status —' },
  { value: 'active', label: 'Active and committed member' },
  { value: 'occasional', label: 'I attend occasionally' },
  { value: 'short-term', label: 'Short-term member (e.g., school/work placement)' },
  { value: 'moved', label: 'I have moved to another branch' },
  { value: 'undecided', label: 'I am undecided about my membership' }
]

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    nickname: '',
    phoneCall: '',
    phoneWhatsApp: '',
    email: '',
    status: '',
    notes: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleStatusSelect = (value: string) => {
    setFormData(prev => ({ ...prev, status: value }))
    setIsDropdownOpen(false)
  }

  const getStatusLabel = (value: string) => {
    const option = statusOptions.find(opt => opt.value === value)
    return option ? option.label : '— Select your status —'
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    const { fullName, phoneCall, phoneWhatsApp, status } = formData

    if (!fullName || !phoneCall || !phoneWhatsApp || !status) {
      setError('Please fill in all required fields.')
      setIsSubmitting(false)
      return
    }

    try {
      const insertData = {
        full_name: fullName,
        nickname: formData.nickname || null,
        phone_call: phoneCall,
        phone_whatsapp: phoneWhatsApp,
        email: formData.email || null,
        status: status,
        notes: formData.notes || null,
        agreed: true
      }

      const { data, error: supabaseError } = await supabase
        .from('members')
        .insert([insertData])
        .select()

      if (supabaseError) {
        console.error('Supabase Error:', supabaseError)
        
        if (supabaseError.code === '42501') {
          setError('Permission denied. Please contact the administrator.')
        } else if (supabaseError.code === '42P01') {
          setError('Table does not exist. Please contact the administrator.')
        } else if (supabaseError.code === '23505') {
          setError('This record already exists. Please check your details.')
        } else {
          setError(supabaseError.message || 'Something went wrong. Please try again.')
        }
      } else {
        console.log('Success! Data inserted:', data)
        router.push('/register/success')
      }
    } catch (err) {
      console.error('Error:', err)
      setError('An unexpected error occurred. Please try again.')
    }

    setIsSubmitting(false)
  }

  const faqs = [
    {
      q: 'What is the purpose of this register?',
      a: 'To have an accurate, up-to-date record of all active Kiambu COGYOK members. This helps us plan events, manage contributions, and communicate effectively.'
    },
    {
      q: 'Why not just use the WhatsApp group?',
      a: 'A WhatsApp group is great for communication, but it doesn\'t tell us who is truly active, who has moved, or who is committed. This register gives us clarity so we can plan properly.'
    },
    {
      q: 'How will this affect contributions?',
      a: 'When we know our real numbers, we can allocate contributions fairly and avoid being overburdened by inflated expectations from national bodies.'
    },
    {
      q: 'Is my data safe?',
      a: 'Yes. All data is stored securely and will only be used for official Kiambu COGYOK purposes. It will not be shared outside the leadership team.'
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">

        {/* Hero Section with Watermark */}
        <section className="relative py-12 md:py-16 pt-32 sm:pt-28 lg:pt-32">
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            style={{
              fontSize: 'clamp(50px, 10vw, 120px)',
              fontWeight: '900',
              color: 'rgba(255, 255, 255, 0.05)',
              letterSpacing: 'clamp(3px, 1.5vw, 10px)',
              fontFamily: "'Orbitron', monospace",
              whiteSpace: 'nowrap',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          >
            REGISTER
          </div>

          <div className="relative z-10">
            <div className="inline-block bg-white/10 text-white font-['Orbitron'] text-xs tracking-wider px-4 py-1.5 rounded-full mb-4 border border-white/20">
              <i className="fas fa-users mr-2"></i> Team Kiambu
            </div>
            <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Member <span className="text-gray-400">Register</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base mt-2 max-w-2xl">
              Join the official Kiambu COGYOK membership database
            </p>
            <div className="w-16 h-0.5 bg-white/30 mt-3"></div>
          </div>
        </section>

        {/* Form */}
        <section className="py-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 p-6 md:p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-sm flex items-center gap-3">
                <i className="fas fa-exclamation-circle text-red-400"></i>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-400 text-xs font-['Orbitron'] mb-1">
                  <i className="fas fa-user mr-2 text-white"></i>FULL NAME <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Simon Ngugi"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-['Orbitron'] mb-1">
                  <i className="fas fa-tag mr-2 text-white"></i>NICKNAME / KNOWN AS
                </label>
                <input
                  type="text"
                  name="nickname"
                  value={formData.nickname}
                  onChange={handleChange}
                  placeholder="e.g. Mutha, Shiru"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-all"
                />
                <p className="text-gray-500 text-xs mt-1">The name most people know you by</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-xs font-['Orbitron'] mb-1">
                    <i className="fas fa-phone mr-2 text-white"></i>PHONE (CALLS) <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneCall"
                    value={formData.phoneCall}
                    onChange={handleChange}
                    placeholder="07XX XXX XXX"
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-['Orbitron'] mb-1">
                    <i className="fab fa-whatsapp mr-2 text-white"></i>WHATSAPP NUMBER <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneWhatsApp"
                    value={formData.phoneWhatsApp}
                    onChange={handleChange}
                    placeholder="07XX XXX XXX"
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-all"
                    required
                  />
                  <p className="text-gray-500 text-xs mt-1">If different from your call number</p>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-['Orbitron'] mb-1">
                  <i className="fas fa-envelope mr-2 text-white"></i>EMAIL <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-all"
                />
              </div>

              {/* Custom Status Dropdown */}
              <div>
                <label className="block text-gray-400 text-xs font-['Orbitron'] mb-1">
                  <i className="fas fa-flag mr-2 text-white"></i>YOUR STATUS <span className="text-red-400">*</span>
                </label>
                <div className="relative z-20" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3 bg-white/5 border rounded-lg text-white text-sm focus:outline-none transition-all ${
                      formData.status ? 'border-white/30' : 'border-white/20'
                    } hover:bg-white/10`}
                  >
                    <span className={formData.status ? 'text-white' : 'text-gray-500'}>
                      {getStatusLabel(formData.status)}
                    </span>
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
                            type="button"
                            onClick={() => handleStatusSelect(option.value)}
                            className={`w-full text-left px-4 py-2.5 text-sm transition-all flex items-center gap-3 ${
                              formData.status === option.value
                                ? 'bg-white/10 text-white'
                                : 'text-gray-400 hover:bg-white/5 hover:text-white'
                            } ${index !== statusOptions.length - 1 ? 'border-b border-white/10' : ''}`}
                          >
                            {formData.status === option.value && (
                              <i className="fas fa-check text-white text-xs w-4"></i>
                            )}
                            <span className={formData.status === option.value ? '' : 'ml-6'}>
                              {option.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-['Orbitron'] mb-1">
                  <i className="fas fa-pencil mr-2 text-white"></i>ANYTHING ELSE?
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="e.g. I'm away for school but will be back in December..."
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-all resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 rounded-lg font-['Orbitron'] text-sm tracking-wider transition-all flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed text-gray-300'
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> SUBMITTING...
                  </>
                ) : (
                  <>
                    <i className="fas fa-user-plus"></i> REGISTER NOW
                  </>
                )}
              </button>
            </form>
          </div>
        </section>

        {/* FAQ Section - Bottom with Dropdown */}
        <div className="mt-10 pb-16">
          <h3 className="font-['Orbitron'] text-sm text-gray-400 uppercase tracking-wider text-center mb-6">
            <i className="fas fa-circle-question mr-2 text-white"></i> FREQUENTLY ASKED QUESTIONS
          </h3>
          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-white/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between px-5 py-3.5 bg-white/5 hover:bg-white/10 transition-colors text-left"
                >
                  <span className="text-sm font-medium text-gray-200">{faq.q}</span>
                  <i className={`fas fa-chevron-down text-white transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}></i>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-5 pb-4 pt-1 text-sm text-gray-400 border-t border-white/10 bg-white/5">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pb-8 text-xs text-gray-500">
          <i className="fas fa-lock mr-1"></i> Your data is secure and confidential.
        </div>
      </div>
    </div>
  )
}