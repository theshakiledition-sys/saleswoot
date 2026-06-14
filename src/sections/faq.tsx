'use client'

import SlideEffect from "@/components/slide-effect"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const settings = {
  title: 'Frequently asked questions',
  faqs: [
    {
      question: 'How does SalesWoot ensure 99% data accuracy?',
      answer: 'We combine proprietary AI technology with manual verification processes. Every lead database is cross-checked against multiple data sources, validated for current employment, decision-making authority, and direct contact information. Our verification process takes 48 hours to ensure you receive only the most accurate prospects.',
    },
    {
      question: 'What is the difference between Cold Email and LinkedIn Outreach plans?',
      answer: 'Cold Email focuses on high-deliverability email campaigns with AI-crafted sequences and SMTP warm-up. LinkedIn Outreach uses strategic automation for connection requests and personalized messaging. Our Omnichannel plan combines both for maximum reach - emails catch early in the buying journey while LinkedIn reinforces your message through social proof.',
    },
    {
      question: 'Can I switch between plans or upgrade anytime?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time. If you upgrade mid-month, we\'ll credit your account and process the difference. If you downgrade, the change takes effect at the start of your next billing cycle. No long-term contracts required.',
    },
    {
      question: 'How quickly will I see results?',
      answer: 'Most clients see initial results within the first 2-3 weeks. Reply rates typically appear in week 1, while qualified meetings usually start coming in by week 3-4. The Omnichannel approach accelerates results because multiple touchpoints build stronger credibility. We\'ll provide weekly performance reports so you can track progress.',
    },
    {
      question: 'What type of support do you offer?',
      answer: 'All plans include email support. LinkedIn and Omnichannel plans include priority and 24/7 VIP support respectively. You\'ll get a dedicated account manager for Omnichannel who can help customize campaigns, analyze performance, and provide strategic recommendations.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a free 14-day trial for all plans. No credit card required. You\'ll get access to our full platform, sample lead databases, and support from our team. After the trial, you can choose to upgrade or cancel at any time.',
    },
    {
      question: 'What happens if I don\'t get quality leads?',
      answer: 'We stand behind our 99% accuracy guarantee. If you\'re unsatisfied with lead quality within the first 30 days, we\'ll either refund 100% of your payment or provide replacement leads at no cost. Your success is our success.',
    },
    {
      question: 'Can I integrate SalesWoot with my existing CRM?',
      answer: 'Yes! We integrate with all major CRMs including Salesforce, HubSpot, Pipedrive, Close, and more. Leads can be automatically pushed to your CRM, and you can sync campaign performance data for complete visibility. Our API documentation is available for custom integrations.',
    },
  ]
}

export default function FAQ() {
  return (
    <div id='faq' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-semibold leading-normal">{settings.title}</h2>
      </SlideEffect>

      {/* Accordion */}
      <SlideEffect>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto text-base text-black">
          {settings.faqs.map((faq, index) => (
            <AccordionItem key={index} value={index + '-item'}>
              <AccordionTrigger className="font-semibold hover:text-primary transition-colors">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-700 font-medium">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SlideEffect>
    </div>
  )
}
