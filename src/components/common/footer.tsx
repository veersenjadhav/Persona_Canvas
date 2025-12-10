import { socialLinks } from '@/lib/data';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const socials = [
    { name: 'Email', href: `mailto:${socialLinks.email}`, icon: Mail },
    { name: 'LinkedIn', href: socialLinks.linkedin, icon: Linkedin },
    { name: 'GitHub', href: socialLinks.github, icon: Github },
    { name: 'Twitter', href: socialLinks.twitter, icon: Twitter },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-headline font-bold">Persona Canvas</h3>
            <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Veersen Jadhav. All Rights Reserved.</p>
          </div>
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <Button key={social.name} variant="ghost" size="icon" asChild>
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
