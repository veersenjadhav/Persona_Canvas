import Image from 'next/image';
import { personalInfo } from '@/lib/data';
import { AnimatedSection } from '@/components/common/animated-section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function About() {
  return (
    <AnimatedSection id="about" className="pt-24 md:pt-32">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Image Container */}
        <div className="flex-shrink-0">
          <div className="relative w-48 md:w-64">
            <Image
              src={personalInfo.profilePicture.imageUrl}
              alt={personalInfo.name}
              width={256}
              height={256}
              priority
              className="rounded-full object-cover border-4 border-card shadow-lg"
              data-ai-hint={personalInfo.profilePicture.imageHint}
            />
          </div>
        </div>

        {/* Text Content Container */}
        <div className="text-center md:text-left mt-4 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tighter">
            {personalInfo.name}
          </h1>
          <h2 className="mt-2 text-xl md:text-2xl font-medium text-accent font-headline">
            {personalInfo.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto md:mx-0 text-muted-foreground leading-relaxed">
            {personalInfo.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
            {personalInfo.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild size="lg">
              <a href="#contact">
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
