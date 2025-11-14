import { Clipboard, Cpu, FileText } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Clipboard,
    title: "Paste Your Email",
    description: "Copy the suspicious email content and paste it into our secure chat interface. Include headers, body, and any links."
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI Analysis",
    description: "Our advanced AI scans for phishing indicators, malicious links, social engineering tactics, and threat signatures in real-time."
  },
  {
    number: "03",
    icon: FileText,
    title: "Get Your Report",
    description: "Receive a comprehensive risk score (Low/Medium/High) with detailed analysis and actionable recommendations within seconds."
  }
];

const HowItWorks = () => {
  return (
    <section id="instructions" className="min-h-screen py-20 px-4 bg-[#0a0f1e]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#00FF00] font-['Fira_Code'] mb-4">
            {'>'} HOW_IT_WORKS_
          </h2>
          <p className="text-lg text-[#00FF00]/70 font-['Fira_Code'] max-w-2xl mx-auto">
            Three simple steps to protect yourself from phishing attacks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Connecting line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-[#00FF00]/20 group-hover:bg-[#00FF00]/40 transition-colors" />
              )}
              
              <div className="relative bg-[#060817] border border-[#00FF00]/30 rounded-lg p-8 hover:border-[#00FF00] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,0,0.3)] h-full">
                {/* Step number */}
                <div className="text-6xl font-bold text-[#00FF00]/20 font-['Fira_Code'] mb-4">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-lg bg-[#00FF00]/10 flex items-center justify-center mb-6 group-hover:bg-[#00FF00]/20 transition-colors">
                  <step.icon className="w-8 h-8 text-[#00FF00]" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-[#00FF00] font-['Fira_Code'] mb-4">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#00FF00]/70 font-['Fira_Code'] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info box */}
        <div className="max-w-3xl mx-auto border border-[#00FF00]/30 rounded-lg p-8 bg-[#060817]">
          <div className="flex items-start gap-4">
            <div className="text-2xl">💡</div>
            <div>
              <h4 className="text-[#00FF00] font-['Fira_Code'] font-bold mb-2">
                Pro Tip
              </h4>
              <p className="text-[#00FF00]/70 font-['Fira_Code'] text-sm">
                For best results, include the full email headers. Right-click the email and select "Show Original" or "View Source" 
                to get complete technical details that help our AI make more accurate threat assessments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;