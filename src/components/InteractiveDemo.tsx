import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Play, Calculator, ArrowRight, Clock } from 'lucide-react';

export const InteractiveDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'nlp' | 'calculator'>('nlp');

  // NLP Simulator State
  const samplePrompts = [
    "Paid ₹4,500 for Microsoft Azure cloud server hosting on 15th August",
    "Allocated ₹25,000 for Student Cabinet Research Cell festival budget",
    "Processed ₹12,800 e-commerce order payment for Amaira beauty catalog"
  ];
  const [inputPrompt, setInputPrompt] = useState(samplePrompts[0]);
  const [isParsing, setIsParsing] = useState(false);
  const [parseResult, setParseResult] = useState<{
    amount: string;
    category: string;
    entity: string;
    governanceTag: string;
    confidence: number;
    sentiment: string;
  } | null>({
    amount: "₹4,500",
    category: "Cloud Infrastructure / DevOps",
    entity: "Microsoft Azure",
    governanceTag: "Approved Operational Expense",
    confidence: 98.4,
    sentiment: "Neutral Audit"
  });

  const handleParseNLP = () => {
    setIsParsing(true);
    setTimeout(() => {
      let amount = "₹" + Math.floor(Math.random() * 20000 + 1000).toLocaleString('en-IN');
      let category = "Communal Operations & Development";
      let entity = "Communal Aggregator";
      let governanceTag = "Audited & Verified";

      if (inputPrompt.toLowerCase().includes('azure')) {
        amount = "₹4,500";
        category = "Cloud Infrastructure & DevOps";
        entity = "Microsoft Azure";
        governanceTag = "Approved Operational Expense";
      } else if (inputPrompt.toLowerCase().includes('cabinet') || inputPrompt.toLowerCase().includes('research')) {
        amount = "₹25,000";
        category = "Institutional Leadership & Events";
        entity = "Student Cabinet Research Cell";
        governanceTag = "Approved Cabinet Allocation";
      } else if (inputPrompt.toLowerCase().includes('amaira') || inputPrompt.toLowerCase().includes('e-commerce')) {
        amount = "₹12,800";
        category = "Full-Stack E-Commerce Revenue";
        entity = "Amaira Platform";
        governanceTag = "Automated Transaction Clearing";
      }

      setParseResult({
        amount,
        category,
        entity,
        governanceTag,
        confidence: +(95 + Math.random() * 4).toFixed(1),
        sentiment: "Verified Audit Pass"
      });
      setIsParsing(false);
    }, 600);
  };

  // Freelance Calculator State
  const [projectType, setProjectType] = useState<'web' | 'analytics' | 'uiux' | 'fullstack'>('fullstack');
  const [timeline, setTimeline] = useState<'urgent' | 'standard' | 'flexible'>('standard');

  const getEstimate = () => {
    let days = "1-2 Weeks";
    let hours = "40 - 60 Hours";
    let stack = ["React 19", "TypeScript", "Tailwind CSS", "Vercel"];

    if (projectType === 'web') {
      days = "1-2 Weeks";
      hours = "30 - 50 Hours";
      stack = ["React", "TypeScript", "Tailwind CSS", "Vite"];
    } else if (projectType === 'analytics') {
      days = "1 Week";
      hours = "20 - 40 Hours";
      stack = ["Power BI", "SQL", "Python", "Streamlit"];
    } else if (projectType === 'uiux') {
      days = "3-5 Days";
      hours = "15 - 30 Hours";
      stack = ["Figma", "Design System", "Glassmorphism UI"];
    } else if (projectType === 'fullstack') {
      days = "2-3 Weeks";
      hours = "60 - 90 Hours";
      stack = ["React", "Node.js", "MySQL/MongoDB", "Azure/Vercel"];
    }

    if (timeline === 'urgent') {
      days = "Express (3-5 Days)";
    }

    return { days, hours, stack };
  };

  const estimate = getEstimate();

  return (
    <section id="demo" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold mb-2">
            Live Interactive Playground
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Test AI Algorithms & Project Scope
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Experience live client-side NLP parsing (inspired by Finora) or generate an instant project estimate for freelance hiring.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('nlp')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'nlp'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
                : 'glass-panel text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Finora NLP Parser Simulator</span>
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'calculator'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/25 scale-105'
                : 'glass-panel text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Freelance Project Scope Estimator</span>
          </button>
        </div>

        {/* Tab 1: NLP Parser Simulator */}
        {activeTab === 'nlp' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bento-card p-6 sm:p-8 max-w-4xl mx-auto border border-blue-500/30"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400">
                <Terminal className="w-4 h-4" />
                <span>Live Natural Language Transaction Parsing</span>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono">
                Model: Finora NLP v2
              </span>
            </div>

            <div className="space-y-4 mb-6">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                Select or Type Sample Financial Input String:
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {samplePrompts.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => setInputPrompt(prompt)}
                    className="px-3 py-1.5 rounded-xl text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors text-left truncate max-w-full"
                  >
                    "{prompt}"
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputPrompt}
                  onChange={(e) => setInputPrompt(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl glass-panel border border-slate-300 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                  placeholder="Type any transaction sentence..."
                />
                <button
                  onClick={handleParseNLP}
                  disabled={isParsing}
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 shrink-0 shadow-md transition-all"
                >
                  {isParsing ? (
                    <span className="animate-spin">⏳</span>
                  ) : (
                    <Play className="w-4 h-4 fill-white" />
                  )}
                  <span>Parse NLP</span>
                </button>
              </div>
            </div>

            {/* Parsed Result Window */}
            {parseResult && (
              <div className="p-5 rounded-2xl bg-slate-900 text-white font-mono text-xs space-y-3 border border-slate-800 shadow-inner">
                <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2">
                  <span>OUTPUT_DATA_STRUCTURE</span>
                  <span className="text-emerald-400 font-bold">Confidence: {parseResult.confidence}%</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="text-slate-500">Parsed Amount:</span>
                    <p className="text-emerald-400 text-sm font-bold">{parseResult.amount}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Extracted Category:</span>
                    <p className="text-blue-400 font-semibold">{parseResult.category}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Extracted Entity:</span>
                    <p className="text-purple-400">{parseResult.entity}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Governance Audit Status:</span>
                    <p className="text-amber-400">{parseResult.governanceTag}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Tab 2: Freelance Project Scope Estimator */}
        {activeTab === 'calculator' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bento-card p-6 sm:p-8 max-w-4xl mx-auto border border-purple-500/30"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-600 dark:text-purple-400">
                <Calculator className="w-4 h-4" />
                <span>Instant Freelance Scope & Timeline Calculator</span>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-semibold">
                Available for Hire
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Option 1: Service Required */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-3">
                  Select Required Engineering Service:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { key: 'fullstack', label: 'Full-Stack Web App' },
                    { key: 'web', label: 'Frontend Web / React' },
                    { key: 'analytics', label: 'Power BI & Analytics' },
                    { key: 'uiux', label: 'UI/UX Design System' }
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setProjectType(item.key as any)}
                      className={`p-3 rounded-xl text-xs font-semibold text-left transition-all ${
                        projectType === item.key
                          ? 'bg-purple-600 text-white shadow-sm'
                          : 'glass-panel text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Urgency / Timeline */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-3">
                  Select Delivery Urgency:
                </label>
                <div className="space-y-2">
                  {[
                    { key: 'standard', label: 'Standard Sprint (1-2 Weeks)' },
                    { key: 'urgent', label: 'Express Delivery (3-5 Days)' },
                    { key: 'flexible', label: 'Flexible / Ongoing Contract' }
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setTimeline(item.key as any)}
                      className={`w-full p-3 rounded-xl text-xs font-semibold text-left transition-all ${
                        timeline === item.key
                          ? 'bg-purple-600 text-white shadow-sm'
                          : 'glass-panel text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Generated Estimate Output */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-blue-900/40 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider">Estimated Delivery Schedule</span>
                <h3 className="text-2xl font-extrabold text-white mt-0.5">{estimate.days}</h3>
                <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Estimated Effort: <strong className="text-white">{estimate.hours}</strong></span>
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {estimate.stack.map(s => (
                    <span key={s} className="px-2 py-0.5 rounded text-[10px] bg-white/10 text-slate-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white text-xs font-bold shrink-0 shadow-lg flex items-center gap-2"
              >
                <span>Book This Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
