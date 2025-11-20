import { useState } from "react";
import { Send, Shield, AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type RiskLevel = "low" | "medium" | "high" | null;

interface ScanResult {
  riskLevel: RiskLevel;
  score: number;
  findings: string[];
  recommendations: string[];
}

const TryIt = () => {
  const [email, setEmail] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);

  const handleScan = async () => {
    if (!email.trim()) return;
    
    setIsScanning(true);
    setResult(null);
    
    // Simulate scanning delay
    try {
        const response = await fetch("https://ai-phishing-tool.onrender.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            subject: "User Submitted Email",
            sender: "unknown@example.com",
            body: email,
          }),
        });
    
        if (!response.ok) throw new Error("Backend request failed");
    
        const data = await response.json();
    
        const riskLevel =
          data.risk_score <= 33 ? "low" : data.risk_score <= 66 ? "medium" : "high";
    
        setResult({
          riskLevel,
          score: data.risk_score,
          findings: data.issues.length ? data.issues : ["No issues detected"],
          recommendations:
            data.risk_score > 33
              ? [
                  "Avoid clicking on links or downloading attachments.",
                  "Verify sender authenticity.",
                ]
              : ["Email appears safe, but always verify sender."],
        });
      } catch (err) {
        console.error(err);
        alert("Error connecting to backend.");
      } finally {
        setIsScanning(false);
      }
  };

  const getRiskColor = (risk: RiskLevel) => {
    switch (risk) {
      case "low":
        return "text-green-500";
      case "medium":
        return "text-yellow-500";
      case "high":
        return "text-red-500";
      default:
        return "text-[#00FF00]";
    }
  };

  const getRiskIcon = (risk: RiskLevel) => {
    switch (risk) {
      case "low":
        return <CheckCircle className="w-8 h-8" />;
      case "medium":
        return <AlertTriangle className="w-8 h-8" />;
      case "high":
        return <AlertCircle className="w-8 h-8" />;
      default:
        return <Shield className="w-8 h-8" />;
    }
  };

  return (
    <section id="scan" className="min-h-screen py-20 px-4 bg-[#060817]">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#00FF00] font-['Fira_Code'] mb-4">
            {'>'} TRY_IT_NOW_
          </h2>
          <p className="text-lg text-[#00FF00]/70 font-['Fira_Code']">
            Paste your suspicious email below for instant analysis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-[#0a0f1e] border border-[#00FF00]/30 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-[#00FF00]" />
              <h3 className="text-xl font-bold text-[#00FF00] font-['Fira_Code']">
                Email Scanner
              </h3>
            </div>
            
            <Textarea
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Paste your email"
              className="min-h-[300px] bg-[#060817] border-[#00FF00]/30 text-[#00FF00] font-['Fira_Code'] text-sm resize-none focus:border-[#00FF00] placeholder:text-[#00FF00]/40"
            />
            
            <Button
              onClick={handleScan}
              disabled={!email.trim() || isScanning}
              className="w-full mt-4 bg-[#00FF00]/10 hover:bg-[#00FF00]/20 text-[#00FF00] border border-[#00FF00]/30 hover:border-[#00FF00] font-['Fira_Code'] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isScanning ? (
                <>
                  <span className="animate-pulse">Scanning...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Scan Email
                </>
              )}
            </Button>
          </div>

          {/* Results Section */}
          <div className="bg-[#0a0f1e] border border-[#00FF00]/30 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-[#00FF00]" />
              <h3 className="text-xl font-bold text-[#00FF00] font-['Fira_Code']">
                Scan Results
              </h3>
            </div>

            {!result && !isScanning && (
              <div className="flex items-center justify-center h-[300px] text-[#00FF00]/40 font-['Fira_Code'] text-sm">
                Results will appear here after scanning
              </div>
            )}

            {isScanning && (
              <div className="flex flex-col items-center justify-center h-[300px]">
                <div className="w-16 h-16 border-4 border-[#00FF00]/20 border-t-[#00FF00] rounded-full animate-spin mb-4"></div>
                <p className="text-[#00FF00] font-['Fira_Code'] animate-pulse">
                  Analyzing email...
                </p>
              </div>
            )}

            {result && (
              <div className="space-y-6 animate-in fade-in duration-500">
                {/* Risk Score */}
                <div className="flex items-center gap-4 p-4 bg-[#060817] border border-[#00FF00]/20 rounded-lg">
                  <div className={getRiskColor(result.riskLevel)}>
                    {getRiskIcon(result.riskLevel)}
                  </div>
                  <div className="flex-1">
                    <div className="text-[#00FF00]/70 font-['Fira_Code'] text-sm mb-1">
                      Risk Level
                    </div>
                    <div className={`text-2xl font-bold font-['Fira_Code'] ${getRiskColor(result.riskLevel)}`}>
                      {result.riskLevel?.toUpperCase()} ({result.score}%)
                    </div>
                  </div>
                </div>

                {/* Findings */}
                <div>
                  <h4 className="text-[#00FF00] font-['Fira_Code'] font-bold mb-3">
                    Findings:
                  </h4>
                  <ul className="space-y-2">
                    {result.findings.map((finding, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-[#00FF00]/70 font-['Fira_Code'] text-sm"
                      >
                        <span className="text-[#00FF00] mt-1">•</span>
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommendations */}
                <div>
                  <h4 className="text-[#00FF00] font-['Fira_Code'] font-bold mb-3">
                    Recommendations:
                  </h4>
                  <ul className="space-y-2">
                    {result.recommendations.map((rec, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-[#00FF00]/70 font-['Fira_Code'] text-sm"
                      >
                        <span className="text-[#00FF00] mt-1">→</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryIt;