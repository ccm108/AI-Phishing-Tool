import { Shield, Search, Zap, Lock, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Advanced Threat Detection",
    description: "AI-powered analysis identifies sophisticated phishing attempts and social engineering tactics in real-time."
  },
  {
    icon: Search,
    title: "Deep Content Analysis",
    description: "Scans email headers, body content, links, and attachments for suspicious patterns and malicious indicators."
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get comprehensive threat assessment within seconds. No waiting, no hassle, just fast and accurate analysis."
  },
  {
    icon: Lock,
    title: "Privacy Focused",
    description: "Your emails are analyzed securely and never stored. We prioritize your privacy and data protection."
  },
  {
    icon: AlertTriangle,
    title: "Risk Scoring",
    description: "Clear risk levels (Low, Medium, High) help you make informed decisions about email authenticity."
  },
  {
    icon: CheckCircle,
    title: "Actionable Insights",
    description: "Detailed breakdown of threats with explanations and recommendations for staying safe online."
  }
];

const Features = () => {
  return (
    <section id="features" className="min-h-screen py-20 px-4 bg-[#060817]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#00FF00] font-['Fira_Code'] mb-4">
            {'>'} FEATURES_
          </h2>
          <p className="text-lg text-[#00FF00]/70 font-['Fira_Code'] max-w-2xl mx-auto">
            Advanced protection powered by AI algorithms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-[#0a0f1e] border-[#00FF00]/30 hover:border-[#00FF00] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)] group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-[#00FF00]/10 flex items-center justify-center mb-4 group-hover:bg-[#00FF00]/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#00FF00]" />
                </div>
                <CardTitle className="text-[#00FF00] font-['Fira_Code'] text-xl">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#00FF00]/70 font-['Fira_Code'] text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block border border-[#00FF00]/30 rounded-lg p-6 bg-[#0a0f1e]">
            <p className="text-[#00FF00] font-['Fira_Code'] text-sm">
              <span className="text-[#00FF00]/70">$</span> Protecting <span className="font-bold">10,000+</span> users from phishing attacks daily
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;