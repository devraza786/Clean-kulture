import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative flex flex-col items-center">
        {/* Outer ring */}
        <motion.div
          className="absolute h-24 w-24 rounded-full border-2 border-primary/20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Spinning ring */}
        <motion.div
          className="h-20 w-20 rounded-full border-4 border-transparent border-t-primary"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner pulse */}
        <motion.div
          className="absolute h-8 w-8 rounded-full bg-primary/30"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.2, 0.5]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Loading text */}
        <motion.p
          className="mt-8 font-display text-xl tracking-widest text-foreground"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          LOADING
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
