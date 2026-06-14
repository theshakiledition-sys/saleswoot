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
      question: 'What exactly does SalesWoot do?',
      answer: 'SalesWoot is a Done-For-You B2B cold email agency. We build and run custom cold email campaigns that reach your target buyers and book sales meetings on your calendar. From verified list building and copywriting to inbox setup, sending, and reply management, we handle the entire outreach engine so your team can focus on closing.',
    },
    {
      question: 'Who is SalesWoot for?',
      answer: 'We work primarily with eCommerce brands and B2B companies that want a predictable flow of qualified conversations. We have partnered with 200+ clients, and our campaigns work best for teams selling a clear offer to a definable list of decision-makers.',
    },
    {
      question: 'What kind of results can I expect?',
      answer: 'On average our clients see a 3x ROI on their email marketing and a 20-30% boost in trackable revenue. Real client campaigns have produced reply rates above 5%, positive reply rates of 36-38%, and pipeline ranging from $19,000 to $146,000 from a single campaign. Results vary based on your offer, list, and market.',
    },
    {
      question: 'How does SalesWoot keep deliverability high?',
      answer: 'We use secondary sending domains with proper warm-up, real-time email verification, and clean list hygiene (SMTP checks, bounce detection, and spam-trap removal). Combined with throttling and domain rotation, this keeps your messages landing in the inbox while protecting your primary domain reputation.',
    },
    {
      question: 'Is it really done-for-you?',
      answer: 'Yes. We manage strategy, list building, copywriting, technical setup, sending, and ongoing optimization. You get regular performance reporting and qualified replies and meetings handed off to your team. Most clients are involved only for approvals and taking the sales calls we book.',
    },
    {
      question: 'How quickly will I see results?',
      answer: 'Most clients see initial replies within the first 1-2 weeks once domains are warmed and campaigns go live. Booked meetings typically start coming in by weeks 3-4 as sequences run and we optimize messaging based on real response data.',
    },
    {
      question: 'How do I get started?',
      answer: 'Book a free strategy call using the button on this page. We will review your offer and goals, map out a campaign plan, and show you exactly how we can fill your pipeline with qualified meetings.',
    },
    {
      question: 'How can I contact SalesWoot?',
      answer: 'You can reach us at saleswootusa@gmail.com or +1 216 307 8940. SalesWoot (Strategy X Consulting LLC.) was founded in 2020 and is headquartered in Dearborn, Michigan, with a team operating internationally.',
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
