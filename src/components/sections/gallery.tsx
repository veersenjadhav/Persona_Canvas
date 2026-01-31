"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { galleryImages } from '@/lib/data';
import { AnimatedSection } from '@/components/common/animated-section';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Gallery() {
  const [isPaused, setIsPaused] = useState(false);

  // For a seamless loop, we duplicate the images. The animation scrolls through the first half.
  const extendedImages = [...galleryImages, ...galleryImages];

  return (
    <AnimatedSection id="gallery">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div className="text-center sm:text-left">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            Photographic Gallery
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">A glimpse into my passion for photography.</p>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsPaused(prev => !prev)}
          aria-label={isPaused ? "Play scrolling" : "Pause scrolling"}
          className="flex-shrink-0"
        >
          {isPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
        </Button>
      </div>

      <div
        className="relative w-full overflow-hidden group"
      >
        <div
          className={cn(
            'flex w-max animate-scroll-left group-hover:[animation-play-state:paused]',
            isPaused ? '[animation-play-state:paused]' : '[animation-play-state:running]'
          )}
          style={{ animationDuration: `${galleryImages.length * 5}s` }}
        >
          {extendedImages.map((image, index) => (
            <div key={index} className="w-[80vw] sm:w-[40vw] md:w-[30vw] lg:w-[25vw] flex-shrink-0 px-2">
              <a
                href={image.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View image: ${image.description}`}
                className="block p-1"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                  <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                      sizes="(max-width: 640px) 80vw, (max-width: 768px) 40vw, (max-width: 1024px) 30vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                      <p className="text-sm font-light italic opacity-80">{image.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
      <p className="text-center text-sm text-muted-foreground mt-4">Hover over the gallery to pause scrolling. Click an image to open it in a new tab.</p>
    </AnimatedSection>
  );
}
