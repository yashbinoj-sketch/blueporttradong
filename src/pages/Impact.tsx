import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Building, TrendingUp, Coins } from 'lucide-react';

export default function Impact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const impacts = [
    {
      icon: <Briefcase size={40} className="text-accent" />,
      title: "Job Creation",
      description: "Providing stable, skilled employment opportunities for thousands of workers across multiple regions, fostering career growth and stability."
    },
    {
      icon: <Building size={40} className="text-accent" />,
      title: "MSME Support",
      description: "Integrating local suppliers and micro, small, and medium enterprises into our procurement network, driving local business growth."
    },
    {
      icon: <TrendingUp size={40} className="text-accent" />,
      title: "Industrial Productivity",
      description: "Enhancing the overall efficiency of major industrial projects, ensuring they are completed on time and contribute to national infrastructure."
    },
    {
      icon: <Coins size={40} className="text-accent" />,
      title: "Economic Circulation",
      description: "Stimulating regional economies through localized spending, wage distribution, and sustained industrial activity."
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      <PageHeader 
        title="Economic Impact" 
        subtitle="How Blue Port Trading contributes to economic development and industrial growth."
        imageSeed="impact"
      />

      <section className="py-24 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Measurable Contributions</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              We measure our success not just by our own growth, but by the positive economic ripple effect we create in the regions where we operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              { num: 15000, suffix: "+", label: "Workers Supported", desc: "Skilled and semi-skilled jobs created and maintained." },
              { num: 450, suffix: "+", label: "Projects Served", desc: "Major industrial and infrastructure projects completed." },
              { num: 1200, suffix: "+", label: "Supplier Partnerships", desc: "Local and regional businesses integrated into our network." },
              { num: 50, suffix: "M+", label: "Man-hours Managed", desc: "Safe and productive hours logged across all sites." }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-neutral-light p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl font-display font-bold text-primary mb-4">
                  {inView ? <CountUp end={stat.num} duration={2.5} separator="," /> : "0"}
                  <span className="text-accent">{stat.suffix}</span>
                </div>
                <div className="text-lg font-bold text-gray-800 mb-2">{stat.label}</div>
                <p className="text-sm text-gray-500">{stat.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {impacts.map((impact, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-6 p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  {impact.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-primary mb-3">{impact.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{impact.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/sustainability/1920/1080" 
            alt="Sustainability" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-primary/90" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Commitment to Sustainable Growth</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-10">
            As a self-funded enterprise, we prioritize long-term stability over short-term gains. Our focus on operational efficiency naturally aligns with sustainable practices, reducing waste in both material supply chains and human capital deployment.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>
      </section>
    </div>
  );
}
