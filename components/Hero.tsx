
import React, { useState } from 'react';
import { ChevronRight, Play } from 'lucide-react';
import VideoModal from './VideoModal';

const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // You can replace this ID with your actual YouTube video ID
  const EXPLINER_VIDEO_URL = "https://www.youtube.com/embed/ScMzIvxBSi4";

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-gradient-to-tr from-emerald-50 to-transparent opacity-50 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 animate-fade-in">
            Smart School Management <br />
            <span className="gradient-text">Made Simple</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Scholaro is the complete cloud-based ERP solution that automates daily operations, 
            enhances teaching productivity, and bridges the gap between parents and schools.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://demo.scholaro.co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center"
            >
              View Live Demo <ChevronRight size={20} className="ml-2" />
            </a>
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
            >
              <Play size={18} className="mr-2 fill-blue-600 text-blue-600" /> Watch Video
            </button>
          </div>
        </div>

        <div className="relative mx-auto max-w-5xl group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
            <img 
              src="https://picsum.photos/id/20/1200/675" 
              alt="Scholaro Dashboard Mockup" 
              className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
            {/* Mockup Overlay Elements */}
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/20 hidden md:block">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-sm font-semibold">Active Students: 1,280</span>
              </div>
              <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-emerald-500"></div>
              </div>
            </div>
            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/20 hidden md:block">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <BarChart3 size={20} className="text-blue-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Fee Collection</div>
                  <div className="text-lg font-bold text-slate-900">$42,500.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Component */}
      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        videoUrl={EXPLINER_VIDEO_URL} 
      />
    </section>
  );
};

// Simple icon for internal use
const BarChart3 = ({size, className}: {size: number, className: string}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>
  </svg>
);

export default Hero;
