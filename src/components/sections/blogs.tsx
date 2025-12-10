
"use client";

import Image from 'next/image';
import { blogs } from '@/lib/data';
import { AnimatedSection } from '@/components/common/animated-section';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Blogs() {
  const cardRotations = [
    '-rotate-12',
    '-rotate-6',
    'rotate-0',
    'rotate-6',
    'rotate-12',
  ];

  return (
    <AnimatedSection id="blogs" className="bg-secondary">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
          My Latest Writings
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Sharing my thoughts on technology, design, and life.
        </p>
      </div>

      <div className="mt-20 flex justify-center items-center">
        <div className="relative flex h-80 w-full max-w-lg items-center justify-center">
          {blogs.slice(0, 5).map((blog, index) => (
            <div
              key={blog.title}
              className={cn(
                'group absolute w-60 cursor-pointer rounded-lg border-2 border-transparent bg-card shadow-lg transition-all duration-300 ease-in-out hover:!rotate-0 hover:scale-110 hover:border-accent hover:z-10',
                cardRotations[index]
              )}
              style={{
                transformOrigin: 'bottom center',
                transform: `${cardRotations[index] ? `rotate(${cardRotations[index].split('-')[2]}deg)` : ''} translateY(0)`,
              }}
            >
              <div className="absolute inset-0 flex flex-col justify-end rounded-lg bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 transition-all duration-300">
                <div className="h-full transform-gpu opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:h-auto">
                    <h3 className="font-headline text-lg font-bold text-primary-foreground">
                      {blog.title}
                    </h3>
                    <p className="mt-2 text-sm text-primary-foreground/80 line-clamp-3">
                      {blog.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 w-full bg-background/20 text-primary-foreground border-primary-foreground/50 hover:bg-background/40"
                      asChild
                    >
                      <a
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Read More <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-center transition-opacity duration-300 group-hover:opacity-0">
                    <h3 className="font-headline text-lg font-bold text-primary-foreground drop-shadow-md">
                        {blog.title}
                    </h3>
                </div>
              </div>

              <Image
                src={blog.image.imageUrl}
                alt={blog.title}
                width={240}
                height={320}
                className="pointer-events-none rounded-lg object-cover"
                data-ai-hint={blog.image.imageHint}
              />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
