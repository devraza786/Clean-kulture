import { motion } from 'framer-motion';
import { Award, Clock, Shield, Users } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Award, value: '5+', label: 'Years Experience' },
  { icon: Clock, value: '24/7', label: 'Availability' },
  { icon: Shield, value: '100%', label: 'Satisfaction' },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      <div className="absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              About Us
            </span>
            <h2 className="font-display text-4xl text-foreground sm:text-5xl">
              THE CLEAN KULTURE <span className="text-primary">DIFFERENCE</span>
            </h2>
            
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Clean Kulture Mobile Detailing brings premium, showroom-quality detailing 
                directly to your doorstep. We understand that your vehicle is more than 
                just transportation—it's an investment and a reflection of your standards.
              </p>
              <p>
                Our approach combines meticulous attention to detail with professional-grade 
                products and techniques. Every service is performed with precision, ensuring 
                results that exceed expectations.
              </p>
              <p>
                From deep interior cleaning to protective ceramic coatings, we offer 
                comprehensive solutions tailored to preserve and enhance your vehicle's 
                appearance. Our mobile service means convenience without compromise.
              </p>
            </div>

            {/* Features */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {['Premium Products', 'Mobile Service', 'Expert Technicians', 'Guaranteed Results'].map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group rounded-xl border border-border bg-card/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="font-display text-3xl text-foreground sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
