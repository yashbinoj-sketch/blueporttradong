import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Careers() {
  const jobOpenings = [
    {
      title: "Skilled Industrial Workers",
      type: "Full-time / Contract",
      location: "Multiple Sites",
      desc: "Seeking experienced welders, fitters, electricians, and heavy equipment operators for upcoming infrastructure projects."
    },
    {
      title: "Procurement Specialists",
      type: "Full-time",
      location: "Headquarters",
      desc: "Experienced professionals to manage supplier networks, negotiate bulk purchases, and oversee material logistics."
    },
    {
      title: "Project Coordinators",
      type: "Full-time",
      location: "On-site",
      desc: "Detail-oriented coordinators to synchronize material deliveries with workforce deployment schedules."
    },
    {
      title: "Operations Managers",
      type: "Full-time",
      location: "Regional Offices",
      desc: "Strategic leaders to oversee regional operations, ensuring efficiency, safety, and client satisfaction."
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      <PageHeader 
        title="Careers at Blue Port" 
        subtitle="Join a team dedicated to building the future of industrial operations."
        imageSeed="careers"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Why Join Us?</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                At Blue Port Trading, we believe our greatest asset is our people. Whether you're coordinating complex supply chains from our headquarters or executing critical tasks on-site, your contribution is vital to our success.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Competitive compensation and benefits packages",
                  "Opportunities for skill development and certification",
                  "Clear pathways for career advancement",
                  "Commitment to workplace safety and well-being",
                  "A culture of respect, integrity, and teamwork"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-blue-50 p-1 rounded-full text-accent shrink-0">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-neutral-light p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm"
            >
              <h3 className="text-2xl font-display font-bold text-primary mb-6">Submit Your Application</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Position of Interest</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-white">
                    <option>Select a position...</option>
                    <option>Skilled Industrial Worker</option>
                    <option>Procurement Specialist</option>
                    <option>Project Coordinator</option>
                    <option>Operations Manager</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Resume / CV</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-accent transition-colors cursor-pointer bg-white">
                    <div className="space-y-1 text-center">
                      <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <span className="relative cursor-pointer bg-white rounded-md font-medium text-accent hover:text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-accent">
                          Upload a file
                        </span>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                    </div>
                  </div>
                </div>

                <button type="button" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:-translate-y-1">
                  Submit Application
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Current Openings</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobOpenings.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-display font-bold text-primary">{job.title}</h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-accent">
                    {job.type}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gray-300" />
                  {job.location}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {job.desc}
                </p>
                <button className="text-accent font-medium flex items-center gap-2 group-hover:text-primary transition-colors">
                  Apply Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
