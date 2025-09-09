'use client'

import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-git'
import 'prismjs/components/prism-markdown'
import 'prismjs/themes/prism-okaidia.css'

export default function PrismLoader() {
  useEffect(() => {
    // Only run on client side after hydration
    if (typeof window !== 'undefined') {
      Prism.highlightAll()
    }
  }, [])

  return null // Don't render anything
}
