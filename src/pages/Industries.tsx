import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { Factory, Building2, Wrench, HardHat, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Industries() {
  const industries = [
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: <Factory size={40} className="text-accent" />,
      image: 'https://picsum.photos/seed/manufacturing-ind/800/600',
      description: 'We support manufacturing facilities with continuous supply chain coordination and operational manpower, ensuring production lines never stop.',
      points: [
        'Raw material procurement and staging',
        'Production line staffing solutions',
        'Facility maintenance workforce',
        'Inventory management support'
      ]
    },
    {
      id: 'infrastructure',
      name: 'Infrastructure',
      icon: <Building2 size={40} className="text-accent" />,
      image: 'https://picsum.photos/seed/infrastructure-ind/800/600',
      description: 'Large-scale infrastructure projects require massive material sourcing and deployment. We provide the backbone for these monumental builds.',
      points: [
        'Bulk material sourcing (steel, cement, aggregates)',
        'Heavy equipment operator deployment',
        'Site logistics coordination',
        'Multi-site workforce management'
      ]
    },
    {
      id: 'engineering',
      name: 'Engineering',
      icon: <Wrench size={40} className="text-accent" />,
      image: 'https://picsum.photos/seed/engineering-ind/800/600',
      description: 'Precision is key in engineering. We supply specialized materials and technical workforce to meet exacting standards.',
      points: [
        'Specialized component procurement',
        'Technical and skilled labor deployment',
        'Project-specific material sourcing',
        'Quality-assured supply chains'
      ]
    },
    {
      id: 'construction',
      name: 'Construction',
      icon: <HardHat size={40} className="text-accent" />,
      image: 'https://picsum.photos/seed/construction-ind/800/600',
      description: 'From commercial developments to industrial facilities, we provide bulk materials and site-ready labor teams to keep construction on schedule.',
      points: [
        'Just-in-time material delivery',
        'Skilled tradesmen deployment',
        'Site preparation workforce',
        'Construction consumable supply'
      ]
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      <PageHeader 
        title="Industries We Serve" 
        subtitle="Specialized support tailored to the unique demands of heavy industries."
        imageSeed="industries"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {industries.map((industry, idx) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-2xl overflow-hidden border border-gray-100 bg-neutral-light hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                      {industry.icon}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white">{industry.name}</h3>
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow">
                    {industry.description}
                  </p>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-100">
                    <h4 className="font-display font-semibold text-primary mb-4">How we support {industry.name.toLowerCase()}:</h4>
                    <ul className="space-y-3">
                      {industry.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-light border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-6">Don't see your industry?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Our procurement and workforce solutions are highly adaptable. Contact us to discuss how we can tailor our services to your specific sector.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-medium transition-all"
          >
            Contact Our Team
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
