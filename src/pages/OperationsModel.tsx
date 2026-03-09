import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { LineChart, Network, Package, Users, Monitor, Wrench, ArrowDown } from 'lucide-react';

export default function OperationsModel() {
  const steps = [
    {
      id: 'demand',
      title: 'Demand Forecasting',
      icon: <LineChart size={32} className="text-white" />,
      description: 'We analyze project timelines and requirements to predict material and manpower needs accurately, preventing bottlenecks before they occur.'
    },
    {
      id: 'network',
      title: 'Supplier Network Coordination',
      icon: <Network size={32} className="text-white" />,
      description: 'Leveraging our extensive network of verified suppliers to ensure reliable, high-quality sourcing at competitive rates.'
    },
    {
      id: 'procurement',
      title: 'Material Procurement',
      icon: <Package size={32} className="text-white" />,
      description: 'Executing bulk purchases and managing logistics to deliver materials just-in-time to your project sites.'
    },
    {
      id: 'workforce',
      title: 'Workforce Deployment',
      icon: <Users size={32} className="text-white" />,
      description: 'Mobilizing skilled, certified personnel aligned with the arrival of materials to maximize productivity.'
    },
    {
      id: 'monitoring',
      title: 'Digital Monitoring',
      icon: <Monitor size={32} className="text-white" />,
      description: 'Tracking supply chain movements and workforce performance in real-time to ensure operational efficiency.'
    },
    {
      id: 'execution',
      title: 'Project Execution',
      icon: <Wrench size={32} className="text-white" />,
      description: 'Seamless integration of all elements leading to successful, on-time, and on-budget project completion.'
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      <PageHeader 
        title="Operations Model" 
        subtitle="A systematic approach to ensuring project success through coordinated execution."
        imageSeed="operations"
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Our Structured Process</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Blue Port Trading operates on a highly structured model designed to eliminate inefficiencies. By synchronizing material procurement with workforce deployment, we create a seamless operational flow for our clients.
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 z-0" />

            <div className="space-y-16 relative z-10">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'} pl-20 md:pl-0`}>
                    <div className="bg-neutral-light p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-2xl font-display font-bold text-primary mb-4">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-accent border-4 border-white shadow-lg flex items-center justify-center z-20">
                    {step.icon}
                  </div>
                  
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">The Blue Port Advantage</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Our operational model is built on the principle of synchronization. When materials arrive exactly when the workforce is ready, projects move faster and cost less.
              </p>
              <ul className="space-y-6">
                {[
                  "Reduced downtime waiting for materials",
                  "Optimized labor costs through precise scheduling",
                  "Single point of contact for supply and manpower",
                  "Scalable operations that grow with your project"
                ].map((advantage, i) => (
                  <li key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <span className="font-bold">{i + 1}</span>
                    </div>
                    <span className="font-medium">{advantage}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[600px] rounded-2xl overflow-hidden"
            >
              <img 
                src="https://picsum.photos/seed/advantage/800/1200" 
                alt="Operational Advantage" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
