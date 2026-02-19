
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">About Scholaro</span>
            <h2 className="text-4xl font-bold text-slate-900">Revolutionizing Educational Administration</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Scholaro was born from a simple idea: that managing a school shouldn't be harder than teaching in one. We've built an ecosystem that handles everything from the first admission enquiry to final graduation.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              By digitizing daily chores and automating complex workflows, we give educators more time for what truly matters—inspiring students. Our cloud-based architecture ensures that whether you're at the principal's office or at home, your school data is always within reach.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
                <div className="text-slate-500 font-medium">Reduction in Paperwork</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-500 mb-1">3.5x</div>
                <div className="text-slate-500 font-medium">Faster Reporting</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/id/180/800/600" 
                alt="School Environment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:w-64 bg-emerald-500 text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="font-medium italic leading-snug">
                "Scholaro transformed our administrative workflow completely. We've never been more organized."
              </p>
              <p className="mt-4 text-sm font-bold opacity-80">— Principal, Horizon Academy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
