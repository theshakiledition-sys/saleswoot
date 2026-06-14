'use client'

import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const settings = {
  title: 'Ready to Transform Your Lead Generation?',
  description: 'Schedule a personalized 20-minute strategy session. We\'ll analyze your current sales process and show you exactly how SalesWoot can help you close more deals with qualified prospects.',
  services: [
    { id: 'email', label: 'Cold Email Only', description: '$997/month - Start with email', price: '$997' },
    { id: 'linkedin', label: 'LinkedIn Only', description: '$1,497/month - Social selling', price: '$1,497' },
    { id: 'combo', label: 'Omnichannel Combo', description: '$2,497/month - Maximum reach', price: '$2,497', featured: true },
  ],
  CTA: {
    content: 'Schedule Your Free Strategy Call',
    href: 'https://calendar.app.google/CDrMo8sP9kGnXfhD8'
  }
}

export default function CTA() {
  const [selectedService, setSelectedService] = useState('combo')

  return (
    <SlideEffect id='contact' isSpring={false} className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center p-8 md:p-16 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl lg:text-header capitalize font-semibold leading-normal text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60">{settings.title}</h2>

      {/* Description */}
      <p className="px-0 sm:px-10 md:px-0 w-full max-w-full md:max-w-3/4 mx-auto text-sm lg:text-base font-medium text-gray-700">{settings.description}</p>

      {/* Service Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
        {settings.services.map((service) => (
          <button
            key={service.id}
            onClick={() => setSelectedService(service.id)}
            className={`p-4 rounded-lg border-2 transition-all text-left relative ${
              selectedService === service.id
                ? 'border-black bg-white shadow-lg'
                : 'border-gray-300 bg-white hover:border-gray-400 hover:shadow-md'
            } ${service.featured ? 'ring-2 ring-offset-2 ring-blue-400' : ''}`}
          >
            {service.featured && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 text-xs rounded-full font-bold">
                RECOMMENDED
              </div>
            )}
            <div className="font-bold text-black text-sm">{service.label}</div>
            <div className="text-xs text-gray-600 mt-1 font-semibold">{service.description}</div>
          </button>
        ))}
      </div>

      {/* CTA */}
      <a href={settings.CTA.href} target="_blank" rel="noopener noreferrer">
        <Button className="w-full md:w-auto px-8 font-bold text-base" size='lg'>
          {settings.CTA.content}
        </Button>
      </a>
    </SlideEffect>
  )
}
