'use client'

import Badge from "@/components/badge"
import SlideEffect from "@/components/slide-effect"
import TextRevealEffect from "@/components/text-reveal-effect"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

const settings = {
  badge: {
    number: 3,
    text: 'CLIENT SUCCESS STORIES',
  },
  title: 'What Our Clients Say',
  description: 'SalesWoot is a Done-For-You B2B cold email agency. We have worked with 200+ eCommerce and B2B clients, delivering an average 3x ROI and a 20-30% boost in trackable revenue.',
  testimonials: [
    {
      quote:
        "SalesWoot built and ran our entire cold email engine from scratch. In one quarter we sent 52K emails, hit a 5.23% reply rate, and generated 146 opportunities worth roughly $146,000 in pipeline. It is genuinely the best ROI we get from any channel.",
      name: "Marcus Bennett",
      designation: "Founder, eCommerce Brand",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "What sold us was the positive reply rate. SalesWoot's targeting and copy got us a 36% positive reply rate on a list of 3,482 prospects, which turned into real sales meetings on our calendar. Fully done-for-you, exactly as promised.",
      name: "Sarah Whitman",
      designation: "Head of Growth, B2B SaaS",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "We came to SalesWoot to fill our pipeline and they delivered. A single sequence reached 3,800+ buyers, booked 47 opportunities, and added $23,500 in new pipeline. Deliverability stayed clean the whole way through. Highly recommend.",
      name: "David Okafor",
      designation: "Owner, Digital Agency",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]
}

export default function Testimonials() {
  return (
    <div id='testimonials' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <TextRevealEffect className="text-2xl md:text-4xl lg:text-header text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-semibold leading-normal">{settings.title}</TextRevealEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base font-medium text-gray-700">{settings.description}</SlideEffect>

      {/* Testimonials */}
      <SlideEffect>
        <AnimatedTestimonials autoplay testimonials={settings.testimonials} />
      </SlideEffect>
    </div>
  )
}
