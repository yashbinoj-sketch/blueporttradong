import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  imageSeed: string;
}

export default function PageHeader({ title, subtitle, imageSeed }: PageHeaderProps) {
  return (
    <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-primary text-white pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={`https://picsum.photos/seed/${imageSeed}/1920/1080?blur=2`} 
          alt={title} 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
