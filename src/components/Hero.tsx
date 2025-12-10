import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone, Calendar } from 'lucide-react';

import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';

const images = [hero1, hero2, hero3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={images[currentIndex]}
            alt="Car detailing showcase"
            className="h-full w-full object-cover"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Ambient Glow Effect */}
      <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            >
              Mobile Detailing Services
            </motion.span>

            <h1 className="font-display text-5xl leading-tight text-foreground sm:text-6xl lg:text-7xl">
              CLEAN
              <br />
              <span className="text-primary">KULTURE</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 max-w-lg text-lg text-muted-foreground"
            >
              Premium mobile detailing that comes to you. We bring showroom-quality 
              results to Miami, Port Saint Lucie, Fort Pierce & Vero Beach.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                className="group flex items-center gap-2 rounded-md bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px hsl(85 15% 48% / 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="h-5 w-5" />
                Book Now
              </motion.a>
              <motion.a
                href="tel:772-323-1006"
                className="flex items-center gap-2 rounded-md border border-foreground/20 bg-foreground/5 px-8 py-4 font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-foreground/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5" />
                772-323-1006
              </motion.a>
            </motion.div>

            {/* Service Areas */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-10 flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
            >
              <span className="font-medium text-foreground">Serving:</span>
              {['Miami', 'Port Saint Lucie', 'Fort Pierce', 'Vero Beach'].map((area, i) => (
                <span key={area} className="flex items-center gap-2">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-primary" />}
                  {area}, FL
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-1/2 left-4 right-4 z-20 flex translate-y-1/2 justify-between pointer-events-none">
        <motion.button
          onClick={goToPrevious}
          className="pointer-events-auto rounded-full border border-foreground/20 bg-background/30 p-3 text-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-background/50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="h-6 w-6" />
        </motion.button>
        <motion.button
          onClick={goToNext}
          className="pointer-events-auto rounded-full border border-foreground/20 bg-background/30 p-3 text-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-background/50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="h-6 w-6" />
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-foreground/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
