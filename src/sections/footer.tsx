'use client'

import { Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

const settings = {
  links: [
    { title: 'Services', href: '#services' },
    { title: 'Results', href: '#metrics' },
    { title: 'Pricing', href: '#pricing' },
    { title: 'FAQ', href: '#faq' },
    { title: 'Book a Call', href: 'https://calendar.app.google/CDrMo8sP9kGnXfhD8' },
  ],
  socialMedia: [
    { title: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/sales-woot' },
    { title: 'Email', icon: Mail, href: 'mailto:saleswootusa@gmail.com' },
    { title: 'Phone', icon: Phone, href: 'tel:+12163078940' },
  ],
  copyright: '© 2026 SalesWoot (Strategy X Consulting LLC.). All rights reserved.'
}

export default function Footer() {
  return (
    <footer className="w-full py-8 md:py-16 flex flex-col items-center justify-center gap-7 md:gap-10 text-sm border-t border-border">
      {/* Nav Links */}
      <div className="flex flex-wrap md:flex-row items-center justify-center gap-7 md:gap-10">
        {settings.links.map(link => (
          <Link key={link.title} href={link.href}>{link.title}</Link>
        ))}
      </div>

      {/* Social links */}
      <div className="flex flex-wrap md:flex-row items-center justify-center gap-7 md:gap-10">
        {settings.socialMedia.map((social, index) => (
          <a title={social.title} aria-label={social.title} key={index} href={social.href} target="_blank" rel="noopener noreferrer"><social.icon /></a>
        ))}
      </div>

      {/* copyright */}
      <p className="text-center">{settings.copyright}</p>
    </footer>
  )
}
