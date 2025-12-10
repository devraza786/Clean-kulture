import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';

const images = [
  { src: gallery1, alt: 'Wheel detailing' },
  { src: hero1, alt: 'SUV exterior detail' },
  { src: gallery2, alt: 'Headlight restoration' },
  { src: gallery3, alt: 'Hand waxing' },
  { src: hero2, alt: 'Paint correction' },
  { src: gallery4, alt: 'Engine bay cleaning' },
  { src: gallery5, alt: 'Ceramic coating' },
  { src: hero3, alt: 'Interior leather detail' },
  { src: gallery6, alt: 'Dashboard detail' },
];

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section id="gallery" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />

      <div className="relative">
        {/* Section Header */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Our Work
            </span>
            <h2 className="font-display text-4xl text-foreground sm:text-5xl lg:text-6xl">
              GALLERY
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Browse through our portfolio of premium detailing work. 
              Every vehicle receives our signature attention to detail.
            </p>
          </motion.div>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div ref={containerRef} className="relative">
          <motion.div 
            style={{ x }}
            className="flex gap-6 px-4 py-8"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="group relative h-[300px] w-[400px] flex-shrink-0 overflow-hidden rounded-xl sm:h-[400px] sm:w-[500px]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Caption */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <p className="font-display text-xl text-foreground">{image.alt}</p>
                </motion.div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/20" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            ← Scroll to explore more →
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
