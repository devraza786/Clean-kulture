import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Car, 
  Shield, 
  Lightbulb, 
  Droplets,
  CircleDot
} from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Interior Details',
    description: 'Deep cleaning of seats, carpets, dashboard, and all interior surfaces. Fresh, pristine results.',
    color: 'primary'
  },
  {
    icon: Car,
    title: 'Exterior Details',
    description: 'Hand wash, clay bar treatment, polish, and protection for a showroom-quality shine.',
    color: 'primary'
  },
  {
    icon: CircleDot,
    title: 'Full Details',
    description: 'Complete interior and exterior transformation. The ultimate detailing experience.',
    color: 'accent'
  },
  {
    icon: Shield,
    title: 'Ceramic Coating',
    description: 'Long-lasting paint protection with hydrophobic properties. Years of protection.',
    color: 'primary'
  },
  {
    icon: Lightbulb,
    title: 'Headlight Restoration',
    description: 'Restore clarity and brightness to yellowed or foggy headlights for safer driving.',
    color: 'primary'
  },
  {
    icon: Droplets,
    title: 'Waxing',
    description: 'Premium carnauba wax application for deep gloss and paint protection.',
    color: 'primary'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const Services = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            What We Offer
          </span>
          <h2 className="font-display text-4xl text-foreground sm:text-5xl lg:text-6xl">
            OUR <span className="text-primary">SERVICES</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Professional mobile detailing services delivered to your location. 
            We bring the expertise, you enjoy the results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3 } 
              }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              </div>

              {/* Icon */}
              <div className={`relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg ${
                service.color === 'accent' 
                  ? 'bg-accent/20 text-accent' 
                  : 'bg-primary/20 text-primary'
              }`}>
                <service.icon className="h-7 w-7" />
              </div>

              {/* Content */}
              <h3 className="relative mb-3 font-display text-2xl text-foreground">
                {service.title}
              </h3>
              <p className="relative text-muted-foreground">
                {service.description}
              </p>

              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 font-semibold text-primary-foreground"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px hsl(85 15% 48% / 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Quote
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
