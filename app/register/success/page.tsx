// app/register/success/page.tsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
)

export default function RegisterSuccessPage() {
  const [userName, setUserName] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get the most recently registered member
    const fetchLatestMember = async () => {
      try {
        const { data, error } = await supabase
          .from('members')
          .select('full_name, nickname')
          .order('registered_at', { ascending: false })
          .limit(1)

        if (error) {
          console.error('Error fetching member:', error)
          setUserName('Team Kiambu COGYOK')
        } else if (data && data.length > 0) {
          const member = data[0]
          setUserName(member.nickname || member.full_name)
        } else {
          setUserName('Team Kiambu COGYOK')
        }
      } catch (err) {
        console.error('Error:', err)
        setUserName('Team Kiambu COGYOK')
      } finally {
        setLoading(false)
      }
    }

    fetchLatestMember()
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">

        <section className="relative py-16 md:py-24 pt-32 sm:pt-28 lg:pt-32">
          <div className="relative z-10 text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                <i className="fas fa-check-circle text-white text-5xl"></i>
              </div>
            </div>

            <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Registration <span className="text-gray-400">Successful!</span>
            </h1>

            {loading ? (
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-2">
                Welcome to Kiambu COGYOK! You're now officially part of the team.
              </p>
            ) : (
              <>
                <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-2">
                  Welcome <span className="text-white font-semibold">{userName}</span>! You're now officially part of Kiambu COGYOK.
                </p>
                <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                  We're glad to have you on board.
                </p>
              </>
            )}

            <div className="w-16 h-0.5 bg-white/30 mx-auto mt-4 mb-6"></div>

            {/* Next Steps */}
            <div className="max-w-2xl mx-auto text-left">
              <h3 className="font-['Orbitron'] text-sm text-gray-400 uppercase tracking-wider mb-4">
                <i className="fas fa-list-check mr-2 text-white"></i> What's Next?
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-white/5 rounded-lg p-4 border border-white/10">
                  <span className="text-white font-bold text-lg">1</span>
                  <div>
                    <h4 className="font-semibold text-white">Check Your WhatsApp</h4>
                    <p className="text-sm text-gray-400">You'll receive a confirmation message from the team shortly.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 rounded-lg p-4 border border-white/10">
                  <span className="text-white font-bold text-lg">2</span>
                  <div>
                    <h4 className="font-semibold text-white">Stay Connected</h4>
                    <p className="text-sm text-gray-400">Keep an eye on the group for announcements and upcoming events.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 rounded-lg p-4 border border-white/10">
                  <span className="text-white font-bold text-lg">3</span>
                  <div>
                    <h4 className="font-semibold text-white">Invite Others</h4>
                    <p className="text-sm text-gray-400">Share the registration link with friends who want to join Kiambu COGYOK.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/dashboard">
                <button className="bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-lg font-['Orbitron'] text-sm tracking-wider transition-all shadow-sm hover:shadow-md flex items-center gap-2 w-full sm:w-auto justify-center">
                  <i className="fas fa-th-large"></i> Go to Dashboard
                </button>
              </Link>
              <Link href="/register">
                <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-['Orbitron'] text-sm tracking-wider transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                  <i className="fas fa-user-plus"></i> Register Another
                </button>
              </Link>
            </div>

            {/* Share Button */}
            <div className="mt-6">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Join Kiambu COGYOK',
                      text: 'I just registered for Kiambu COGYOK! Join us and be part of the family.',
                      url: window.location.origin + '/register'
                    })
                  } else {
                    navigator.clipboard?.writeText(
                      'Join Kiambu COGYOK! Register here: ' + window.location.origin + '/register'
                    )
                    alert('Registration link copied to clipboard!')
                  }
                }}
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-2 mx-auto"
              >
                <i className="fas fa-share-alt"></i> Share this page
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-8">
              <i className="fas fa-lock mr-1"></i> Your data is secure and confidential.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}