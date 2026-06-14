'use client'

import FadeEffect from "@/components/fade-effect";
import Navbar from "@/components/navbar";
import SlideEffect from "@/components/slide-effect";
import TextBlurEffect from "@/components/text-blur-effect";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const settings = {
  headline: 'Generate High-Quality Leads That Actually Close Deals',
  subheadline: 'SalesWoot is a Leads-as-a-Service platform and service provider. Using our unique data-driven technology we generate lead databases with 99% accuracy. Get verified, decision-ready prospects delivered to your inbox through cold email and LinkedIn outreach.',
  mainCTA: {
    content: 'Schedule Strategy Call',
    href: 'https://calendar.app.google/CDrMo8sP9kGnXfhD8'
  },
  secondaryCTA: {
    content: 'View Our Process',
    href: '#services'
  },
  illustration: '/illustration.svg',
  reviews: [
    {
      name: "Jamie Patridge",
      designation: "CEO, UpliftGTM",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      name: "Bryan Clayton",
      designation: "Founder, GreenPal",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Brigitte Cooper",
      designation: "Owner, CT Agency",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
  ]
}

export default function Hero() {
  return (
    <div className="space-y-12 md:space-y-20 lg:space-y-28 z-50 relative">
      <Navbar />

      <section className="flex flex-col gap-8 lg:gap-11 items-center text-center">
        {/* Headline */}
        <h1 className="text-black text-4xl md:text-6xl lg:text-hero font-semibold tracking-tight leading-none xl:max-w-3/4">
          <TextBlurEffect className='text-transparent bg-clip-text bg-gradient-to-b from-black via-black to-black/70'>{settings.headline}</TextBlurEffect>
        </h1>

        {/* Sub-headline */}
        <SlideEffect
          delay={0}
          className="text-sm lg:text-base px-6 sm:px-10 md:px-0 md:max-w-3/4 mx-auto font-medium text-gray-700 leading-relaxed"
        >
          {settings.subheadline}
        </SlideEffect>

        {/* CTA */}
        <SlideEffect
          className="flex flex-col gap-8 md:gap-5 items-center justify-center w-full md:w-fit"
        >
          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center w-full justify-center gap-3 md:gap-4 mt-1">
            <a href={settings.mainCTA.href} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button size='lg' className="capitalize w-full hidden lg:flex font-semibold">
                {settings.mainCTA.content}
                <ArrowRight />
              </Button>

              <Button size='default' className="capitalize w-full flex lg:hidden font-semibold">
                {settings.mainCTA.content}
                <ArrowRight />
              </Button>
            </a>

            <Link href={settings.secondaryCTA.href} className="w-full">
              <Button size='lg' className="capitalize w-full hidden lg:flex font-semibold" variant='secondary'>
                {settings.secondaryCTA.content}
              </Button>

              <Button size='default' className="capitalize w-full flex lg:hidden font-semibold" variant='secondary'>
                {settings.secondaryCTA.content}
              </Button>
            </Link>
          </div>

          {/* Reviews */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-center">
            <AnimatedTooltip items={settings.reviews} />

            <div className="flex flex-col justify-center items-center md:items-start gap-1 md:gap-2">
              <div className="flex gap-px">
                <Star size={16} fill='oklch(0.795 0.184 86.047)' className="text-yellow-500" />
                <Star size={16} fill='oklch(0.795 0.184 86.047)' className="text-yellow-500" />
                <Star size={16} fill='oklch(0.795 0.184 86.047)' className="text-yellow-500" />
                <Star size={16} fill='oklch(0.795 0.184 86.047)' className="text-yellow-500" />
                <Star size={16} fill='oklch(0.795 0.184 86.047)' className="text-yellow-500" />
              </div>

              <span className="text-xs font-semibold">Trusted by 100+ Sales Teams</span>
            </div>
          </div>
        </SlideEffect>

        {/* Illustration - Hero Banner with Analytics Image */}
        <SlideEffect className="relative w-full" isSpring={false} duration={1.3}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/dashboard.png"
              alt='SalesWoot analytics dashboard showing lead generation metrics, reply rates, and channel performance'
              width={1920}
              height={1080}
              priority
              loading="eager"
              className="w-full h-auto"
            />
          </div>
          <FadeEffect />
        </SlideEffect>
      </section>
    </div>
  )
}
