
import React, { useState } from 'react';
import { ChevronRight, Play, Star, CheckCircle } from 'lucide-react';
import VideoModal from './VideoModal';

const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const EXPLINER_VIDEO_URL = "https://www.youtube.com/embed/ScMzIvxBSi4";

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-52 md:pb-36 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-emerald-400/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100/50 shadow-sm">
              <Star size={16} className="fill-blue-600" />
              <span>Ranked #1 School ERP 2024</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.05]">
              Education <br />
              <span className="gradient-text">Management</span> <br />
              Reimagined.
            </h1>
            
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
              Experience the next generation of school administration. Automate, engage, and grow with the most intuitive cloud platform ever built.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <a 
                href="https://demo.scholaro.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-xl hover:bg-black transition-all shadow-2xl hover:-translate-y-1 flex items-center justify-center group"
              >
                View Live Demo <ChevronRight size={22} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-xl hover:border-blue-300 transition-all flex items-center justify-center shadow-lg"
              >
                <Play size={20} className="mr-3 fill-blue-600 text-blue-600" /> Watch Video
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-white text-xs font-bold">+500</div>
              </div>
              <div className="text-sm text-slate-500 font-medium">
                <span className="text-slate-900 font-bold">Trusted by 500+</span> <br /> Schools Globally
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 floating">
              <div className="bg-white p-3 rounded-[2.5rem] shadow-2xl border border-white/50">
                <img 
                  src="https://picsum.photos/id/20/1200/800" 
                  alt="Scholaro Premium" 
                  className="rounded-[2rem] shadow-inner"
                />
              </div>
              
              {/* Floating Fancy Widgets */}
              <div className="absolute -top-10 -left-10 glass-card p-5 rounded-3xl shadow-2xl max-w-[200px] border-l-4 border-l-blue-500 hidden xl:block animate-bounce-slow">
                <div className="text-xs font-bold text-blue-600 uppercase mb-2">Real-time Stats</div>
                <div className="text-2xl font-black text-slate-900">98.4%</div>
                <div className="text-[10px] text-slate-500 font-medium">Daily Attendance Rate</div>
              </div>

              <div className="absolute -bottom-12 -right-12 glass-card p-6 rounded-3xl shadow-2xl hidden xl:block">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Fees Collected</div>
                    <div className="text-xs text-slate-500">Processing Success</div>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[85%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        videoUrl={EXPLINER_VIDEO_URL} 
      />
    </section>
  );
};

export default Hero;
