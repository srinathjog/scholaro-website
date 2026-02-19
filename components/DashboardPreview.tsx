
import React from 'react';
import { Layout, Shield, TrendingUp } from 'lucide-react';

const DashboardPreview: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="bg-slate-100 rounded-[2.5rem] p-4 shadow-inner">
                <img 
                  src="https://picsum.photos/id/1/1000/800" 
                  alt="Detailed Dashboard View" 
                  className="rounded-3xl shadow-xl w-full border border-slate-200"
                />
              </div>
              <div className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-xs hidden xl:block animate-bounce-slow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    <TrendingUp size={24} />
                  </div>
                  <span className="font-bold text-slate-900">Performance Index</span>
                </div>
                <div className="text-slate-500 text-sm">Real-time academic growth tracking across all classes.</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              An Interface Designed for <span className="text-blue-600">Decision Makers</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Managing a complex institution shouldn't mean looking at complex data. We've simplified school analytics into beautiful, actionable dashboards.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Layout, title: 'Modular Architecture', text: 'Enable only the modules you need for your specific institution type.' },
                { icon: Shield, title: 'Role-Based Access', text: 'Granular permissions for teachers, accountants, and administrators.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                    <p className="text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a 
                href="https://demo.scholaro.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all items-center shadow-lg"
              >
                View Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
