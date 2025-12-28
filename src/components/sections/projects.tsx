import Image from 'next/image';
import { projects } from '@/lib/data';
import { AnimatedSection } from '@/components/common/animated-section';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Projects() {
  return (
    <AnimatedSection id="projects">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
          Projects & Contributions
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">A selection of my personal and professional work.</p>
      </div>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden group">
            <CardHeader className="p-0">
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={project.image.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={project.image.imageHint}
                />
              </div>
            </CardHeader>
            <div className="p-6 flex flex-col flex-grow">
              <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
              <CardContent className="p-0 mt-2 flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
            <CardFooter className="p-6 pt-0">
              <div className="flex items-center w-full justify-between">
                <Button variant="ghost" size="sm" asChild>
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    {project.showGithubIcon ? <Github className="mr-2 h-4 w-4" /> : <ArrowUpRight className="mr-2 h-4 w-4" />}
                    {project.repoButtonText}
                  </a>
                </Button>
                {project.liveLink && project.liveLink !== '#' && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
