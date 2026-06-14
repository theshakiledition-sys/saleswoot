'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import Image from "next/image"

const settings = {
  badge: {
    number: 3,
    text: 'PROVEN RESULTS',
  },
  title: 'Real Results From Real Campaigns',
  description: 'These are live campaign dashboards from SalesWoot clients. Verified prospects, high deliverability, and positive replies that turn into booked sales meetings and pipeline revenue.',
  stats: [
    { value: '3x', label: 'Average ROI on email marketing' },
    { value: '200+', label: 'eCommerce & B2B clients served' },
    { value: '20-30%', label: 'Boost in trackable email revenue' },
  ],
  campaign_1: {
    title: '$146,000 in Opportunities',
    content: '52,000 emails sent with a 5.23% reply rate generated 146 qualified opportunities for a single client campaign.',
    image: '/campaign-results-hero.png',
  },
  campaign_2: {
    title: '36.54% Positive Reply Rate',
    content: 'A focused sequence of 3,482 prospects produced 104 replies and 38 opportunities worth $19,000 in new pipeline.',
    image: '/campaign-results-1.png',
  },
  campaign_3: {
    title: '$23,500 Pipeline Generated',
    content: '3,832 prospects reached with a 38.52% positive reply rate, booking 47 opportunities and meetings for the client.',
    image: '/campaign-results-2.png',
  },
}

export default function Features3() {
  return (
    <div id='metrics' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center scroll-mt-24">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Headline stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {settings.stats.map((stat, index) => (
          <SlideEffect key={index} direction="top" delay={0.1 * index} isSpring={false} className="h-full">
            <Card className="flex flex-col items-center justify-center gap-2 h-full">
              <span className="text-4xl md:text-5xl font-bold text-black">{stat.value}</span>
              <span className="text-sm font-medium text-gray-700">{stat.label}</span>
            </Card>
          </SlideEffect>
        ))}
      </div>

      {/* Featured campaign */}
      <SlideEffect direction="top" isSpring={false}>
        <Card className="flex flex-col gap-6">
          <div className="space-y-2 text-start">
            <h3 className="text-xl md:text-title text-black font-medium">{settings.campaign_1.title}</h3>
            <p className="text-sm lg:text-base">{settings.campaign_1.content}</p>
          </div>
          <div className="rounded-xl overflow-hidden border border-border bg-white">
            <Image src={settings.campaign_1.image} alt={settings.campaign_1.title} width={1920} height={1080} className="w-full h-auto" />
          </div>
        </Card>
      </SlideEffect>

      {/* Two supporting campaigns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[settings.campaign_2, settings.campaign_3].map((campaign, index) => (
          <SlideEffect key={index} direction={index === 0 ? 'right' : 'left'} delay={0.2 * index} isSpring={false} className="h-full">
            <Card className="flex flex-col gap-4 h-full">
              <div className="space-y-2 text-start">
                <h3 className="text-xl md:text-title text-black font-medium">{campaign.title}</h3>
                <p className="text-sm">{campaign.content}</p>
              </div>
              <div className="rounded-xl overflow-hidden border border-border bg-white mt-auto">
                <Image src={campaign.image} alt={campaign.title} width={1100} height={640} className="w-full h-auto" />
              </div>
            </Card>
          </SlideEffect>
        ))}
      </div>
    </div>
  )
}
