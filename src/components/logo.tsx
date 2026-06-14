'use client'

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          {/* Stylized 'S' for SalesWoot */}
          <path d="M8 4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v3h-2V4H10v3h-2V4zm8 8c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-8 4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-3h-2v3h-4v-3H8v3z" />
          {/* Stylized 'W' using overlapping elements */}
          <circle cx="6" cy="14" r="1.5" opacity="0.8" />
          <circle cx="18" cy="14" r="1.5" opacity="0.8" />
        </svg>
      </div>
      <span className="font-bold text-lg text-black tracking-tight">SalesWoot</span>
    </div>
  )
}
