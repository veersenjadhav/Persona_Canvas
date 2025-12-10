import Image from 'next/image';
import { galleryImages } from '@/lib/data';
import { AnimatedSection } from '@/components/common/animated-section';

export function Gallery() {
  return (
    <AnimatedSection id="gallery">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
          Photographic Gallery
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">A glimpse into my passion for photography.</p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {galleryImages.map((image, index) => (
           <div key={image.id} className="relative group overflow-hidden rounded-lg shadow-lg aspect-[3/4]">
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
                <p className="text-sm font-light italic opacity-80">{image.description}</p>
             </div>
           </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
