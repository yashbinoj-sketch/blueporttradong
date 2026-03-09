import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  PackageSearch, 
  Users, 
  TrendingUp, 
  Factory, 
  HardHat, 
  Wrench, 
  Building2,
  CheckCircle2,
  BarChart3,
  Network
} from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-primary text-white pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/industrial/1920/1080?blur=2" 
            alt="Industrial Operations" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
                Integrated Industrial Supply & Workforce Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                Supporting manufacturing, infrastructure, engineering, and construction sectors with structured material procurement and skilled manpower coordination.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-md font-medium transition-all transform hover:-translate-y-1"
                >
                  Request Consultation
                  <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/services" 
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 px-8 py-4 rounded-md font-medium transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Core Capabilities</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <PackageSearch size={40} className="text-accent" />,
                title: "Integrated Procurement Systems",
                desc: "Structured sourcing networks ensuring reliable industrial material supply."
              },
              {
                icon: <Users size={40} className="text-accent" />,
                title: "Skilled Workforce Coordination",
                desc: "Verified manpower pools for project execution and operational continuity."
              },
              {
                icon: <TrendingUp size={40} className="text-accent" />,
                title: "Scalable Industrial Support",
                desc: "Operational models designed for expansion across regions and industries."
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Comprehensive Services</h2>
              <p className="text-gray-600 text-lg">Delivering end-to-end solutions for complex industrial challenges.</p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-accent font-medium hover:text-primary transition-colors">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Industrial Material Procurement",
                items: ["Supplier network coordination", "Demand forecasting", "Bulk procurement management", "Logistics coordination"],
                img: "https://picsum.photos/seed/procurement/800/600"
              },
              {
                title: "Workforce Solutions",
                items: ["Skilled labor deployment", "Workforce planning", "Project-based manpower coordination", "Contract labor solutions"],
                img: "https://picsum.photos/seed/workforce/800/600"
              },
              {
                title: "Project Execution Support",
                items: ["Operational coordination", "Supply chain synchronization", "Workforce and material alignment", "Performance monitoring"],
                img: "https://picsum.photos/seed/execution/800/600"
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-xl overflow-hidden border border-gray-200 bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-display font-bold text-primary mb-4">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Providing specialized support tailored to the unique demands of heavy industries.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Factory size={32} />, name: "Manufacturing", desc: "Continuous supply chain and operational manpower." },
              { icon: <Building2 size={32} />, name: "Infrastructure", desc: "Large-scale material sourcing and deployment." },
              { icon: <Wrench size={32} />, name: "Engineering", desc: "Precision procurement and technical workforce." },
              { icon: <HardHat size={32} />, name: "Construction", desc: "Bulk materials and site-ready labor teams." }
            ].map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors group"
              >
                <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{industry.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations Model */}
      <section className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Structured Operations Model</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A systematic approach to ensuring project success through coordinated execution.</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
              {[
                "Demand Forecasting",
                "Supplier Network",
                "Material Procurement",
                "Workforce Deployment",
                "Digital Monitoring",
                "Project Execution"
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-accent flex items-center justify-center text-xl font-bold text-primary shadow-lg mb-4 relative">
                    {idx + 1}
                    {idx < 5 && (
                      <div className="lg:hidden absolute -bottom-8 w-0.5 h-8 bg-gray-200" />
                    )}
                  </div>
                  <h4 className="font-display font-semibold text-primary text-sm">{step}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Stats */}
      <section className="py-24 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Economic Contribution & Impact</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We believe in creating sustainable value that extends beyond our immediate operations. Our integrated approach drives regional economic growth and industrial productivity.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Job creation for skilled and semi-skilled workers",
                  "Support for local suppliers and MSMEs",
                  "Improved industrial productivity through reliable supply",
                  "Income circulation in regional economies"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-blue-50 p-1 rounded-full text-accent">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Users size={24} />, num: 15000, suffix: "+", label: "Workers Supported" },
                { icon: <Building2 size={24} />, num: 450, suffix: "+", label: "Projects Served" },
                { icon: <Network size={24} />, num: 1200, suffix: "+", label: "Supplier Partnerships" },
                { icon: <BarChart3 size={24} />, num: 98, suffix: "%", label: "Operational Efficiency" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-neutral-light p-8 rounded-xl border border-gray-100 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full text-accent shadow-sm mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-display font-bold text-primary mb-2">
                    {inView ? <CountUp end={stat.num} duration={2.5} separator="," /> : "0"}
                    <span className="text-accent">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
