import { galleryImages } from '@/lib/data';
import { AnimatedSection } from '@/components/common/animated-section';
import { PhotoCard } from '@/components/photo-card';
import { generateCaptionAction } from '@/app/actions';

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
          <PhotoCard 
            key={image.id} 
            image={image} 
            generateCaptionAction={generateCaptionAction}
            className={index === 1 || index === 4 ? 'sm:col-span-1 lg:col-span-1 aspect-[4/3]' : 'sm:col-span-1 aspect-[3/4]'}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}
