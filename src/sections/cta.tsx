'use client'

import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

const settings = {
  title: 'Ready to Fill Your Pipeline?',
  description: 'Schedule a personalized 20-minute roadmap session to see exactly how Saleswoot can transform your lead generation.',
  services: [
    { id: 'email', label: 'Cold Email Only', description: 'High-deliverability outreach' },
    { id: 'linkedin', label: 'LinkedIn Only', description: 'Social selling automation' },
    { id: 'combo', label: 'Omnichannel Combo', description: 'Both channels integrated', featured: true },
  ],
  CTA: {
    content: 'Book Your Strategy Call',
    href: '#'
  }
}

export default function CTA() {
  const [selectedService, setSelectedService] = useState('combo')

  return (
    <SlideEffect id='contact' isSpring={false} className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center p-8 md:p-16 flex flex-col items-center justify-center rounded-2xl bg-secondary">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl lg:text-header capitalize font-medium leading-normal text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60">{settings.title}</h2>

      {/* Description */}
      <p className="px-0 sm:px-10 md:px-0 w-full max-w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</p>

      {/* Service Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
        {settings.services.map((service) => (
          <button
            key={service.id}
            onClick={() => setSelectedService(service.id)}
            className={`p-4 rounded-lg border-2 transition-all text-left relative ${
              selectedService === service.id
                ? 'border-black bg-white'
                : 'border-gray-300 bg-gray-50 hover:border-gray-400'
            } ${service.featured ? 'ring-2 ring-offset-2 ring-black/20' : ''}`}
          >
            {service.featured && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 text-xs rounded-full font-semibold">
                Most Popular
              </div>
            )}
            <div className="font-semibold text-black text-sm">{service.label}</div>
            <div className="text-xs text-gray-600 mt-1">{service.description}</div>
          </button>
        ))}
      </div>

      {/* CTA */}
      <Link href={settings.CTA.href}>
        <Button className="w-full md:w-auto px-8" size='lg'>
          {settings.CTA.content}
        </Button>
      </Link>
    </SlideEffect>
  )
}
