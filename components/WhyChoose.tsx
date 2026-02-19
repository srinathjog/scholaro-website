
import React from 'react';
import { BENEFITS, IconMap } from '../constants';

const WhyChoose: React.FC = () => {
  return (
    <section className="py-32 bg-slate-950 text-white overflow-hidden relative">
      {/* Animated Mesh Glows */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/10 blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-emerald-600/10 blur-[150px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-4 block">The Advantage</span>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Why Schools <span className="text-blue-500">Trust</span> Scholaro
            </h2>
          </div>
          <div className="lg:text-right">
             <p className="text-slate-400 max-w-sm text-lg leading-relaxed">
                We've combined enterprise security with the simplicity of your favorite smartphone apps.
             </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/10 border border-white/10 rounded-[3rem] overflow-hidden backdrop-blur-sm">
          {BENEFITS.map((benefit) => {
            const Icon = IconMap[benefit.icon];
            return (
              <div 
                key={benefit.id} 
                className="group p-12 bg-slate-950/50 hover:bg-slate-900 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 group-hover:border-blue-500/50 transition-all">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Floating Stat Bar */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 md:gap-24">
           {[
             { label: 'Uptime', val: '99.99%' },
             { label: 'Schools', val: '500+' },
             { label: 'Security', val: 'AES-256' },
             { label: 'Support', val: '24/7' }
           ].map((stat, i) => (
             <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.val}</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
