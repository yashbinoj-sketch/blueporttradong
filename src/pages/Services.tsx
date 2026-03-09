import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { PackageSearch, Users, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 'procurement',
      title: 'Industrial Material Procurement',
      icon: <PackageSearch size={48} className="text-accent" />,
      image: 'https://picsum.photos/seed/procurement-service/1200/800',
      description: 'Comprehensive sourcing and supply chain management for industrial materials, ensuring your operations never face downtime due to material shortages.',
      features: [
        'Supplier network coordination across regions',
        'Advanced demand forecasting and planning',
        'Bulk procurement management and negotiation',
        'End-to-end logistics coordination',
        'Quality assurance and compliance checking'
      ]
    },
    {
      id: 'workforce',
      title: 'Workforce Solutions',
      icon: <Users size={48} className="text-accent" />,
      image: 'https://picsum.photos/seed/workforce-service/1200/800',
      description: 'Providing skilled, verified manpower tailored to the specific needs of your industrial projects, from short-term deployments to long-term operational support.',
      features: [
        'Skilled labor deployment and management',
        'Strategic workforce planning',
        'Project-based manpower coordination',
        'Contract labor solutions and administration',
        'Safety training and certification verification'
      ]
    },
    {
      id: 'execution',
      title: 'Project Execution Support',
      icon: <Wrench size={48} className="text-accent" />,
      image: 'https://picsum.photos/seed/execution-service/1200/800',
      description: 'Integrating material supply and workforce deployment to provide seamless operational support for complex industrial projects.',
      features: [
        'On-site operational coordination',
        'Supply chain synchronization with project timelines',
        'Workforce and material alignment',
        'Performance monitoring and reporting',
        'Risk mitigation and contingency planning'
      ]
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      <PageHeader 
        title="Our Services" 
        subtitle="Integrated solutions designed for industrial efficiency and operational continuity."
        imageSeed="services"
      />

      <section className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {services.map((service, idx) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 border border-gray-100">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">{service.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 bg-blue-50 p-1 rounded-full text-accent shrink-0">
                        <CheckCircle2 size={18} />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group"
                >
                  Discuss your requirements
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/10" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to optimize your operations?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Partner with Blue Port Trading for reliable industrial support and integrated solutions.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-md font-medium transition-all transform hover:-translate-y-1 text-lg"
          >
            Request a Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
