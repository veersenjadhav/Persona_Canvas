import { workExperience } from '@/lib/data';
import { AnimatedSection } from '@/components/common/animated-section';
import { Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Experience() {
  return (
    <AnimatedSection id="experience" className="bg-secondary">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
          Professional Timeline
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">A summary of my work experience and roles.</p>
      </div>
      <div className="mt-12 relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2" aria-hidden="true"></div>
        
        <div className="space-y-12">
          {workExperience.map((job, index) => (
            <div key={index} className="relative">
              {/* Dot on timeline */}
              <div className="absolute left-4 md:left-1/2 top-1 h-3 w-3 bg-primary rounded-full -translate-x-1/2"></div>
              
              <div className={cn(
                "pl-10 md:grid md:grid-cols-2 md:gap-8",
              )}>
                <div className={cn(
                  index % 2 === 0 ? 'md:text-right' : 'md:order-2 md:text-left'
                )}>
                  <h3 className="text-xl font-headline font-semibold">{job.role}</h3>
                  <p className="font-medium text-accent">{job.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">{job.period}</p>
                  <p className="text-muted-foreground mt-2">{job.description}</p>
                </div>
                {/* This empty div is a spacer */}
                <div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
