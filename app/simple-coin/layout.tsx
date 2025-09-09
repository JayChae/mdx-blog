import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '블록체인 & 암호화폐 원리와 simple coin 구현 가이드',
}

export default function SimpleCoinLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
