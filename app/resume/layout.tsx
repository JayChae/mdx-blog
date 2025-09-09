import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '날로 먹는 이력서',
}

export default function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="size-full px-4 pb-4">{children}</div>
}
