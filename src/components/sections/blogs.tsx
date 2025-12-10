
"use client";

import Image from 'next/image';
import { blogs } from '@/lib/data';
import { AnimatedSection } from '@/components/common/animated-section';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

export function Blogs() {
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

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <a
            key={blog.title}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group overflow-hidden rounded-lg shadow-lg aspect-[4/3] transform transition-transform duration-300 hover:-translate-y-2"
          >
            <Image
              src={blog.image.imageUrl}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              data-ai-hint={blog.image.imageHint}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-primary-foreground">
              {/* Visible Title */}
              <h3 className="font-headline text-xl font-bold transition-transform duration-300 ease-in-out group-hover:-translate-y-24">
                {blog.title}
              </h3>
              
              {/* Hidden content that appears on hover */}
              <div className="absolute bottom-6 left-6 right-6 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <p className="mt-2 text-sm text-primary-foreground/80 line-clamp-2">
                  {blog.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-semibold">
                  Read More <ArrowUpRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </AnimatedSection>
  );
}
