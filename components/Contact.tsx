
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-slate-100">
          {/* Left Panel: Deep Dark Professional Background */}
          <div className="lg:w-2/5 gradient-bg p-12 text-white relative">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
              <p className="text-blue-100/80 text-lg mb-12 leading-relaxed font-medium">
                Have questions about how Scholaro can fit into your institution? Our experts are ready to help you navigate the transition.
              </p>

              <div className="space-y-10">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-blue-600 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-blue-300 uppercase tracking-[0.2em] font-black mb-1">Email Us</div>
                    <div className="text-xl font-bold text-white">hello@scholaro.io</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-emerald-600 transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-blue-300 uppercase tracking-[0.2em] font-black mb-1">Call Us</div>
                    <div className="text-xl font-bold text-white">+1 (555) 012-3456</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-indigo-600 transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-blue-300 uppercase tracking-[0.2em] font-black mb-1">Our Office</div>
                    <div className="text-xl font-bold text-white">123 Tech Campus, CA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="lg:w-3/5 p-12 bg-white">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900 font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">School Name</label>
                <input 
                  type="text" 
                  placeholder="The Global International School"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900 font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your school's needs..."
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900 font-medium"
                ></textarea>
              </div>
              <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all flex items-center justify-center shadow-xl shadow-blue-500/20 active:scale-[0.98]">
                Submit Inquiry <Send size={20} className="ml-3" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
