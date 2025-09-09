'use client'

import dynamic from 'next/dynamic'

const PrismLoader = dynamic(() => import('./loader'), {
  ssr: false,
})

export default function ClientPrismWrapper() {
  return <PrismLoader />
}
