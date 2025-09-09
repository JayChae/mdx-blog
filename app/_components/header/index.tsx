import Logo from './logo'
import NavLogo from './nav-logo'

export default function Header() {
  return (
    <header className="fixed top-0 z-50 flex h-12 w-full items-center border-gray-200 bg-white/95 pl-10 backdrop-blur-sm">
      <NavLogo>
        <Logo />
      </NavLogo>
    </header>
  )
}
