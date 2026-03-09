import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { Target, Compass, Shield, Leaf, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full overflow-hidden">
      <PageHeader 
        title="About Blue Port Trading" 
        subtitle="Building trust, authority, and professionalism in industrial services."
        imageSeed="corporate"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  Blue Port Trading was founded with a clear vision: to provide integrated industrial material procurement and skilled manpower solutions for companies operating in the most demanding sectors.
                </p>
                <p>
                  Self-funded through promoter capital and internal accruals, we have focused on sustainable growth, operational efficiency, and regional expansion. Our independence allows us to make long-term decisions that benefit our partners and clients.
                </p>
                <p>
                  Through structured sourcing systems and coordinated workforce planning, we help companies execute projects efficiently and maintain operational continuity across multiple project locations.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://picsum.photos/seed/headquarters/800/1000" 
                alt="Corporate Headquarters" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Vision & Mission</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-accent mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Deliver reliable industrial supply and workforce solutions that support efficient project execution. We strive to be the invisible force that keeps your operations running smoothly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-accent mb-6">
                <Compass size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Become a scalable industrial services platform supporting large-scale projects across regions. We aim to set the standard for reliability and excellence in industrial support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Core Values</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">The principles that guide our decisions and operations.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Target size={32} />, title: "Operational Efficiency", desc: "Optimizing processes to deliver maximum value with minimal waste." },
              { icon: <Shield size={32} />, title: "Integrity & Reliability", desc: "Building trust through consistent, transparent, and honest practices." },
              { icon: <Users size={32} />, title: "Long-term Partnerships", desc: "Fostering relationships that grow stronger and more valuable over time." },
              { icon: <Leaf size={32} />, title: "Sustainable Growth", desc: "Expanding our capabilities responsibly while supporting regional economies." }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl text-center hover:bg-white/10 transition-colors"
              >
                <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center text-accent mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
