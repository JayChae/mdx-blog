import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

import Header from './_components/header'
import { Main, SidebarProvider } from './_components/sidebar'
import AppSidebar from './_components/sidebar/app-sidebar'
import ClientPrismWrapper from './_components/common/prism/prism'

export const metadata: Metadata = {
  description: 'JongMin Chae 개인 블록',
  title: {
    template: '%s | JongMin Chae',
    default: 'JongMin Chae',
  },
  icons: {
    icon: '/images/spyglass.png',
  },
}

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  preload: true,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${pretendard.className} size-full`}>
      <body className="relative size-full">
        <SidebarProvider>
          <Header />
          <AppSidebar />
          <Main className="overflow-x-hidden pt-12">{children}</Main>
        </SidebarProvider>
        <ClientPrismWrapper />
      </body>
    </html>
  )
}
