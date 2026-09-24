'use client'

import { useState } from 'react'
import { business } from '@/lib/content'
import { LineReveal, Reveal } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'

const fields = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: true },
  { name: 'email', label: 'Email', type: 'email', required: false },
  { name: 'projectType', label: 'Project Type', type: 'text', required: false },
  {
    name: 'requirement',
    label: 'Stone Requirement',
    type: 'text',
    required: false,
  },
] as const

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()

  const form = e.currentTarget
  const formData = new FormData(form)

  formData.append('access_key', '46c26727-c27e-40fa-bd71-f016724b9ab7')
  formData.append('subject', 'New NRK STONES Website Enquiry')
  formData.append('from_name', 'NRK STONES Website')

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    })

    const result = await response.json()

    console.log('Web3Forms response:', result)

    if (response.ok && result.success) {
      form.reset()
      setSubmitted(true)
    } else {
      alert(
        `Web3Forms Error: ${
          result.message || 'The enquiry could not be sent.'
        }`
      )
    }
  } catch (error) {
    console.error('Submission error:', error)
    alert('Unable to connect to the enquiry service. Please try again.')
  }
}

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-obsidian py-24 text-ivory md:py-32"
    >
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.04]" />
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 md:grid-cols-2 md:gap-20 md:px-10">
        <div>
          <Reveal>
            <p className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-bronze">
              <span className="inline-block h-px w-8 bg-bronze" />
              08 — Enquiry
            </p>
          </Reveal>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.05]">
            <LineReveal
              start="inView"
              lines={["Let's find the right", 'stone for your space.']}
            />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md leading-relaxed text-ivory/70">
              Tell us what you&apos;re looking for and our team can help you
              explore the available stone options.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 space-y-3 text-sm text-ivory/60">
              <p>
                {business.address.slice(0, 4).join(', ')},{' '}
                {business.address[4]}
              </p>
              {/* Contact details are placeholders until provided. */}
              <a
                href={`https://wa.me/${business.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-ivory/40 transition-colors hover:text-bronze"
              >
              {business.phone || 'Phone — to be added'}
              </a>

              <a
                href={`mailto:${business.email}`}
                className="block text-ivory/40 transition-colors hover:text-bronze"
              >
              {business.email || 'Email — to be added'}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal y={40}>
          {submitted ? (
            <div className="flex h-full flex-col items-start justify-center border border-ivory/15 p-10">
              <p className="font-serif text-3xl">Thank you.</p>
              <p className="mt-4 max-w-sm leading-relaxed text-ivory/70">
                Your enquiry has been noted. Our team will be in touch to help
                you explore the right stone for your space.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs uppercase tracking-[0.2em] text-bronze"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {fields.map((field) => (
                  <div key={field.name} className="group relative">
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      placeholder=" "
                      className="peer w-full border-b border-ivory/20 bg-transparent pb-2 pt-6 text-ivory outline-none transition-colors focus:border-bronze"
                    />
                    <label
                      htmlFor={field.name}
                      className="pointer-events-none absolute left-0 top-6 text-sm text-ivory/50 transition-all duration-300 peer-focus:top-0 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-bronze peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.2em] peer-[:not(:placeholder-shown)]:text-ivory/60"
                    >
                      {field.label}
                      {field.required && <span className="text-bronze"> *</span>}
                    </label>
                  </div>
                ))}
              </div>

              <div className="group relative">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder=" "
                  className="peer w-full resize-none border-b border-ivory/20 bg-transparent pb-2 pt-6 text-ivory outline-none transition-colors focus:border-bronze"
                />
                <label
                  htmlFor="message"
                  className="pointer-events-none absolute left-0 top-6 text-sm text-ivory/50 transition-all duration-300 peer-focus:top-0 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-bronze peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.2em] peer-[:not(:placeholder-shown)]:text-ivory/60"
                >
                  Message
                </label>
              </div>

              <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
                <MagneticButton type="submit" variant="bronze">
                  Send Enquiry
                </MagneticButton>
                <MagneticButton
                  href={business.mapsUrl || '#location'}
                  variant="ghost"
                  withArrow={false}
                >
                  Visit NRK Stones
                </MagneticButton>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
