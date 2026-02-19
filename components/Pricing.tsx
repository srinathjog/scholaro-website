
import React from 'react';
import { Check } from 'lucide-react';

const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '$49',
    description: 'Perfect for small coaching centers or preschools.',
    features: [
      'Up to 200 Students',
      'Basic Attendance',
      'Fee Management',
      'Mobile App Access',
      'Email Support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$149',
    description: 'Comprehensive features for growing K-12 schools.',
    features: [
      'Up to 1000 Students',
      'Advanced Exam Management',
      'Parent-Teacher Portal',
      'Staff Payroll & HR',
      'Priority 24/7 Support',
      'Custom Domain',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large school networks.',
    features: [
      'Unlimited Students',
      'Multi-branch Management',
      'White-label Solution',
      'Dedicated Account Manager',
      'API Access',
      'On-site Training',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Pricing Plans</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Flexible Plans for Every Institution</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the plan that fits your school's size and requirements. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative p-8 rounded-[2rem] border transition-all duration-300 ${
                plan.popular 
                  ? 'border-blue-600 shadow-2xl scale-105 z-10 bg-white' 
                  : 'border-slate-100 shadow-sm hover:shadow-xl bg-slate-50'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-slate-500">/month</span>}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <div className={`mt-1 flex-shrink-0 ${plan.popular ? 'text-blue-600' : 'text-emerald-500'}`}>
                      <Check size={18} />
                    </div>
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg' 
                    : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
