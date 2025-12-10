"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#academics', label: 'Academics' },
  { href: '#projects', label: 'Projects' },
  { href: '#recognition', label: 'Recognition' },
  { href: '#blogs', label: 'Blogs' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center size-9 bg-primary text-primary-foreground rounded-md font-headline font-bold text-lg", className)}>
      VJ
    </div>
  );
}

export function Header() {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = navItems.map(item => document.querySelector(item.href));
      let currentSection = 'about';

      sections.forEach(section => {
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          if (window.scrollY >= sectionTop - 100) {
            currentSection = section.id;
          }
        }
      });

      if (activeSection !== currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const navLinks = (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'px-3 py-2 rounded-md text-sm font-medium transition-colors',
            activeSection === item.href.substring(1)
              ? 'text-primary font-bold'
              : 'text-muted-foreground hover:text-primary'
          )}
        >
          {item.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className={cn(
      'sticky top-0 z-50 w-full transition-all duration-300',
      isScrolled ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="#about" className="flex items-center gap-2 text-xl font-bold font-headline text-primary">
            <Logo />
            <span>Persona Canvas</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-2">
            {navLinks}
          </nav>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px]">
                <div className="flex flex-col space-y-4 pt-8">
                  {navItems.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          'px-3 py-2 rounded-md text-base font-medium transition-colors',
                          activeSection === item.href.substring(1)
                            ? 'bg-accent text-accent-foreground'
                            : 'text-muted-foreground hover:bg-accent/50'
                        )}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
