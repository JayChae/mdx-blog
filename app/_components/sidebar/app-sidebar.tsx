'use client'

import { RxPinRight, RxPinLeft } from 'react-icons/rx'
import { usePathname } from 'next/navigation'

import MenuItem from './menu-item'

import {
  SidebarContainer,
  SidebarHeader,
  SidebarPinButton,
  SidebarPinned,
  SidebarUnPinned,
  SidebarNav,
  SidebarNavMenu,
  SidebarMenuItem,
} from '.'

export interface MenuItem {
  title: string
  href: string
  description: string
}

const menuItems: MenuItem[] = [
  {
    title: 'Home',
    href: '/',
    description: 'JongMin Chae',
  },
  {
    title: 'Resume',
    href: '/resume',
    description: 'JongMin Chae의 이력서',
  },
  {
    title: 'Simple-coin',
    href: '/simple-coin',
    description: '블록체인 & 암호화폐 원리와 구현',
  },
]

export default function AppSidebar() {
  const pathname = usePathname()

  return (
    <SidebarContainer className="pt-12">
      {/* 사이드바 고정 버튼 */}
      <SidebarHeader className="flex justify-end pr-5">
        <SidebarPinButton>
          <SidebarPinned>
            <RxPinLeft />
          </SidebarPinned>
          <SidebarUnPinned>
            <RxPinRight />
          </SidebarUnPinned>
        </SidebarPinButton>
      </SidebarHeader>

      {/* 사이드바 네비게이션 링크들 */}
      <SidebarNav>
        <SidebarNavMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <MenuItem
                href={item.href}
                title={item.title}
                description={item.description}
                active={
                  item.href === pathname ||
                  (item.href !== '/' && pathname.startsWith(item.href))
                }
              />
            </SidebarMenuItem>
          ))}
        </SidebarNavMenu>
      </SidebarNav>
    </SidebarContainer>
  )
}
