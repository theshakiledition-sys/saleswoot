'use client'

import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import { CircleCheck } from "lucide-react"

const settings = {
  title: 'Simple, Transparent Pricing',
  description: 'Choose the lead generation service that fits your sales strategy. All plans include our proprietary 99% accuracy data verification and dedicated support.',
  bookCall: {
    content: 'Book a Free Strategy Call',
    href: 'https://calendar.app.google/CDrMo8sP9kGnXfhD8',
  },
  plan_1: {
    planName: 'Cold Email',
    price: 997,
    currency: '$',
    period: '/month',
    description: 'High-deliverability cold email campaigns with verified prospects',
    cta: 'Book a Call',
    ctaLink: 'https://calendar.app.google/CDrMo8sP9kGnXfhD8',
    features: [
      'Up to 500 cold email leads/month',
      'AI-crafted email sequences',
      '99% deliverability guarantee',
      'SMTP warm-up included',
      'Weekly performance reports',
      'Email template library',
      'Spam check & optimization',
      'Basic support'
    ]
  },
  plan_2: {
    planName: 'LinkedIn Outreach',
    price: 1497,
    currency: '$',
    period: '/month',
    description: 'Strategic LinkedIn automation with personalized outreach and connection building',
    cta: 'Book a Call',
    ctaLink: 'https://calendar.app.google/CDrMo8sP9kGnXfhD8',
    features: [
      'Up to 300 LinkedIn leads/month',
      'Automated connection requests',
      'AI-personalized messages',
      'Profile view tracking',
      'Conversation analytics',
      'Weekly engagement reports',
      'Multi-account management',
      'Priority support'
    ]
  },
  plan_3: {
    planName: 'Omnichannel (Most Popular)',
    price: 2497,
    currency: '$',
    period: '/month',
    description: 'Complete lead generation solution across cold email + LinkedIn for maximum reach and conversion',
    cta: 'Book a Call',
    ctaLink: 'https://calendar.app.google/CDrMo8sP9kGnXfhD8',
    features: [
      '800+ combined leads/month',
      'Cold email + LinkedIn campaigns',
      '99% data accuracy verification',
      'Multi-channel sequencing',
      'Lead scoring & qualification',
      'Daily unified dashboard',
      'A/B testing across channels',
      '24/7 VIP support',
      'Custom reporting'
    ]
  },
}

export default function Pricing() {
  return (
    <div id='pricing' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-semibold leading-normal">{settings.title}</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base font-medium text-gray-700">{settings.description}</SlideEffect>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* plan 1 */}
        <SlideEffect isSpring={false} delay={0.1} className="text-base">
          <Card className="bg-white hover:shadow-lg transition-shadow h-full">
            <div className="capitalize text-start text-black font-semibold text-lg">{settings.plan_1.planName}</div>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="font-bold text-5xl text-black">{settings.plan_1.currency}{settings.plan_1.price}</span>
              <span className="text-sm font-semibold text-gray-600">{settings.plan_1.period}</span>
            </div>
            <a href={settings.plan_1.ctaLink} target="_blank" rel="noopener noreferrer">
              <Button className="w-full mt-4 font-semibold">{settings.plan_1.cta}</Button>
            </a>
            <div className="text-start space-y-6 mt-6">
              <p className="text-black text-sm font-medium">{settings.plan_1.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_1.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-primary flex-shrink-0" size={18} />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>

        {/* plan 2 */}
        <SlideEffect isSpring={false} delay={0.2} className="flex flex-col gap-6 text-base">
          <Card className="bg-white hover:shadow-lg transition-shadow h-full">
            <div className="capitalize text-start text-black font-semibold text-lg">{settings.plan_2.planName}</div>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="font-bold text-5xl text-black">{settings.plan_2.currency}{settings.plan_2.price}</span>
              <span className="text-sm font-semibold text-gray-600">{settings.plan_2.period}</span>
            </div>
            <a href={settings.plan_2.ctaLink} target="_blank" rel="noopener noreferrer">
              <Button className="w-full mt-4 font-semibold">{settings.plan_2.cta}</Button>
            </a>
            <div className="text-start space-y-6 mt-6">
              <p className="text-black text-sm font-medium">{settings.plan_2.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_2.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-primary flex-shrink-0" size={18} />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>

        {/* plan 3 - Most Popular */}
        <SlideEffect isSpring={false} delay={0.3} className="flex flex-col gap-6 text-base">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-shadow h-full ring-2 ring-primary/30">
            <div className="w-full flex items-center gap-2 justify-between">
              <div className="capitalize text-start text-black font-semibold text-lg">{settings.plan_3.planName}</div>
              <div className="text-xs bg-primary text-white px-3 py-1 rounded-full capitalize font-bold">Recommended</div>
            </div>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="font-bold text-5xl text-black">{settings.plan_3.currency}{settings.plan_3.price}</span>
              <span className="text-sm font-semibold text-gray-600">{settings.plan_3.period}</span>
            </div>
            <a href={settings.plan_3.ctaLink} target="_blank" rel="noopener noreferrer">
              <Button className="w-full mt-4 font-semibold">{settings.plan_3.cta}</Button>
            </a>
            <div className="text-start space-y-6 mt-6">
              <p className="text-black text-sm font-medium">{settings.plan_3.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_3.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-primary flex-shrink-0" size={18} />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>
      </div>

      {/* Book a call */}
      <SlideEffect isSpring={false} className="flex flex-col items-center gap-3 pt-2">
        <p className="text-sm font-medium text-gray-700">Not sure which plan fits? Let&apos;s map it out together.</p>
        <a href={settings.bookCall.href} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="px-8 font-semibold">{settings.bookCall.content}</Button>
        </a>
      </SlideEffect>
    </div>
  )
}
