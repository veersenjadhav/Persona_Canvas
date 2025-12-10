import { workExperience } from '@/lib/data';
import { AnimatedSection } from '@/components/common/animated-section';
import { Briefcase } from 'lucide-react';

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
            <div key={index} className="relative flex items-start group">
              {/* Dot on timeline */}
              <div className="absolute left-4 md:left-1/2 top-1 h-3 w-3 bg-primary rounded-full -translate-x-1/2 transition-transform duration-300 group-hover:scale-125"></div>

              <div className="pl-8 md:pl-0 md:w-1/2 md:pr-8">
                <div className={index % 2 === 0 ? 'md:text-right' : 'md:text-left md:ml-auto'}>
                  {/* Content for small screens is always on the right */}
                  {index % 2 !== 0 && (
                    <div className="hidden md:block">
                      <h3 className="text-xl font-headline font-semibold">{job.role}</h3>
                      <p className="font-medium text-accent">{job.company}</p>
                      <p className="text-sm text-muted-foreground mt-1">{job.period}</p>
                      <p className="text-muted-foreground mt-2">{job.description}</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="w-full pl-10 md:w-1/2 md:pl-8">
                <div className={index % 2 === 0 ? 'md:text-left' : 'md:text-right'}>
                   <h3 className="text-xl font-headline font-semibold">{job.role}</h3>
                    <p className="font-medium text-accent">{job.company}</p>
                    <p className="text-sm text-muted-foreground mt-1">{job.period}</p>
                    <p className="text-muted-foreground mt-2">{job.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
