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
  title: 'Join Successful Sales Teams',
  description: 'See how leading companies are transforming their lead generation with SalesWoot\'s data-driven approach and omnichannel outreach strategy.',
  testimonials: [
    {
      quote:
        "SalesWoot completely transformed our cold email strategy. We went from getting 2-3 responses per 100 emails to 15+ qualified meetings per week. Their 99% accuracy data verification is a game-changer for our sales pipeline. Jamie Patridge recommended them, and it was the best decision we made for UpliftGTM.",
      name: "Jamie Patridge",
      designation: "CEO at UpliftGTM",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "What impressed us most about SalesWoot was their omnichannel approach. By combining cold email with LinkedIn outreach, we're reaching decision-makers through multiple touchpoints. Our reply rates increased by 340% in just two months. GreenPal's growth team couldn't be happier.",
      name: "Bryan Clayton",
      designation: "Founder at GreenPal",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "As a digital agency owner, lead quality is everything. SalesWoot's data verification ensures we're only talking to real decision-makers. Their support team is incredibly responsive and helped us customize campaigns for different service verticals. Our closing rate jumped from 5% to 18% with their leads. Highly recommend CT Agency work with them.",
      name: "Brigitte Cooper",
      designation: "Owner at CT Agency",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
