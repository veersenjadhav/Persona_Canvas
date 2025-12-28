import Image from 'next/image';
import { galleryImages } from '@/lib/data';
import { AnimatedSection } from '@/components/common/animated-section';

export function Gallery() {
  const midPoint = Math.ceil(galleryImages.length / 2);
  const firstRowImages = galleryImages.slice(0, midPoint);
  const secondRowImages = galleryImages.slice(midPoint);

  const GalleryRow = ({ images }: { images: typeof galleryImages }) => (
    <div className="flex overflow-x-auto space-x-4 pb-4">
      {images.map((image, index) => (
        <div key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
          <a
            href={image.imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View image: ${image.description}`}
            className="block p-1 group"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
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
          </a>
        </div>
      ))}
    </div>
  );

  return (
    <AnimatedSection id="gallery">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
          Photographic Gallery
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">A glimpse into my passion for photography.</p>
      </div>
      <div className="mt-12 space-y-8">
        <GalleryRow images={firstRowImages} />
        <GalleryRow images={secondRowImages} />
      </div>
    </AnimatedSection>
  );
}
