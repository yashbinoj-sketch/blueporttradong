import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full overflow-hidden">
      <PageHeader 
        title="Contact Us" 
        subtitle="Partner with Blue Port Trading for reliable industrial support."
        imageSeed="contact"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Get in Touch</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Whether you need comprehensive material procurement, skilled workforce deployment, or integrated project support, our team is ready to assist you.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-accent shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-primary text-lg mb-1">Corporate Headquarters</h4>
                    <p className="text-gray-600 leading-relaxed">
                      100 Industrial Parkway, Suite 400<br />
                      Business District, 10001<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-accent shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-primary text-lg mb-1">Phone</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Main: +1 (555) 123-4567<br />
                      Support: +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-accent shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-primary text-lg mb-1">Email</h4>
                    <p className="text-gray-600 leading-relaxed">
                      General: contact@blueporttrading.com<br />
                      Careers: careers@blueporttrading.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-accent shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-primary text-lg mb-1">Business Hours</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Emergency Support: 24/7 for active projects
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-neutral-light p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm"
            >
              <h3 className="text-2xl font-display font-bold text-primary mb-6">Send us a message</h3>
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="Acme Corp" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-white">
                    <option>Material Procurement</option>
                    <option>Workforce Solutions</option>
                    <option>Project Execution Support</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="button" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 w-full bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 font-medium">Google Maps Integration Placeholder</p>
          </div>
        </div>
        {/* In a real implementation, you would embed an iframe or use a maps library here */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1621436152865!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy"
          title="Office Location"
          className="absolute inset-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        ></iframe>
      </section>
    </div>
  );
}
