export default function ProblemSection() {
    const problems = [
      { title: "Lack of Social Awareness", desc: "Most organizations have near-zero visibility into the full dimensions of their digital reputation." },
      { title: "Delayed Decision-Making", desc: "Traditional market research methods are slow and provide insights too late for real-time action." },
      { title: "Reputation Know-How Gap", desc: "Structured reputation management expertise is rare, even within large enterprises." },
      { title: "Crisis Blind Spots", desc: "Brands often recognize threats only after measurable financial impact occurs." },
      { title: "Communication Strategy Complexity", desc: "Hiring full-time communication strategists is costly and inaccessible for most SMEs." }
    ];
  
    return (
      <section id="problem" className="bg-[#1E1B22] py-24 border-t border-[#3F2A54]">
        <div className="container mx-auto px-6">
          <h2 className="text-[#B885BE] text-sm font-black uppercase tracking-[0.3em]">Why Reputation Intelligence Matters</h2>
          <p className="text-[#8F7FA8] text-sm leading-relaxed mb-10 mt-2">Organizations today face structural gaps in digital awareness and response capabilities.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((p, i) => (
              <div key={i} className="p-8 bg-[#3F2A54]/10 border border-[#3F2A54] rounded-2xl">
                <span className="text-[#5B3E7A] font-black text-2xl mb-4 block">0{i+1}</span>
                <h4 className="text-white font-bold mb-4 uppercase tracking-tighter">{p.title}</h4>
                <p className="text-[#8F7FA8] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };