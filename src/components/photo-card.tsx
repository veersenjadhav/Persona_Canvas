"use client";

import Image from 'next/image';
import { useState, useTransition } from 'react';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface PhotoCardProps {
  image: ImagePlaceholder;
  generateCaptionAction: (imageUrl: string) => Promise<string | null>;
  className?: string;
}

export function PhotoCard({ image, generateCaptionAction, className }: PhotoCardProps) {
  const [caption, setCaption] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleGenerateCaption = () => {
    startTransition(async () => {
      const result = await generateCaptionAction(image.imageUrl);
      if (result) {
        setCaption(result);
        toast({
          title: "Caption Generated!",
          description: "AI has created a new caption for your photo.",
        });
      } else {
        toast({
          variant: 'destructive',
          title: "Generation Failed",
          description: "Could not generate a caption. Please try again.",
        });
      }
    });
  };

  return (
    <div className={cn("relative group overflow-hidden rounded-lg shadow-lg", className)}>
      <Image
        src={image.imageUrl}
        alt={image.description}
        fill
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        data-ai-hint={image.imageHint}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
        <div className="transition-all duration-300">
          {caption ? (
            <p className="text-sm">{caption}</p>
          ) : (
            <p className="text-sm font-light italic opacity-80">{image.description}</p>
          )}
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="mt-2 w-full"
          onClick={handleGenerateCaption}
          disabled={isPending}
        >
          {isPending ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-4 w-4" />
          )}
          {isPending ? 'Generating...' : 'Generate AI Caption'}
        </Button>
      </div>
    </div>
  );
}
