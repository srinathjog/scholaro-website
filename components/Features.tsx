
import React from 'react';
import { FEATURES, IconMap } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Powerful Features for Modern Schools</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to manage your institution in one powerful, easy-to-use platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => {
            const Icon = IconMap[feature.iconName];
            return (
              <div 
                key={feature.id} 
                className="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
