'use client';

import { useState } from 'react';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Resume', href: '/resume' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed top-0 w-full bg-[#f4f0ea]/95 dark:bg-[#181614]/95 backdrop-blur-sm border-b-4 border-double border-black dark:border-white/40 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl md:text-3xl font-black font-headline tracking-widest text-[#1c1917] dark:text-white uppercase decoration-double underline decoration-1 underline-offset-4">
              DHRUTHI D
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-xs font-bold font-headline uppercase tracking-wider transition-all duration-200 ${isActive(item.href)
                    ? 'text-black dark:text-white underline decoration-2 underline-offset-4'
                    : 'text-[#1c1917]/70 dark:text-[#eae6df]/70 hover:text-black dark:hover:text-white hover:underline decoration-1 underline-offset-4'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1.5 border border-black dark:border-white text-black dark:text-white transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-[#f4f0ea] dark:bg-[#181614] border-t border-black dark:border-white/20">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-sm font-bold font-headline uppercase tracking-wider transition-colors duration-200 ${isActive(item.href)
                      ? 'text-black dark:text-white underline decoration-2 underline-offset-4'
                      : 'text-[#1c1917]/70 dark:text-[#eae6df]/70 hover:text-black dark:hover:text-white'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
