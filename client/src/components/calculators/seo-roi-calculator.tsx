import { useState, useMemo } from "react";
import { Link } from "wouter";
import { INDUSTRY_BENCHMARKS, PACKAGE_COST, IndustryKey, PackageKey } from "@/data/seoBenchmarks";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp, DollarSign, Clock } from "lucide-react";
import SliderWithNumber from "@/components/ui/slider-with-number";
import NumberInput from "@/components/ui/number-input";
import OutputLine from "@/components/ui/output-line";

export default function SeoRoiCalculator() {
  const [industry, setIndustry] = useState<IndustryKey>("saas");
  const [pkg, setPkg] = useState<PackageKey>("growth");
  const [traffic, setTraffic] = useState(5000);
  const [cvr, setCvr] = useState(INDUSTRY_BENCHMARKS[industry].cvr * 100);
  const [aov, setAov] = useState(INDUSTRY_BENCHMARKS[industry].aov);

  // Auto-update CVR & AOV when industry changes
  const handleIndustryChange = (val: IndustryKey) => {
    setIndustry(val);
    setCvr(INDUSTRY_BENCHMARKS[val].cvr * 100);
    setAov(INDUSTRY_BENCHMARKS[val].aov);
  };

  const results = useMemo(() => {
    const upliftKey = `uplift${pkg.charAt(0).toUpperCase() + pkg.slice(1)}` as const;
    const uplift = INDUSTRY_BENCHMARKS[industry][upliftKey];
    const incrTraffic = traffic * uplift;
    const incrConversions = incrTraffic * (cvr / 100);
    const incrRevenue = incrConversions * aov;
    const annualCost = PACKAGE_COST[pkg] * 12;
    const roiRatio = incrRevenue > 0 ? (incrRevenue - annualCost) / annualCost : 0;
    const paybackMonths = incrRevenue > 0 ? annualCost / (incrRevenue / 12) : Infinity;

    return {
      incrTraffic: Math.round(incrTraffic),
      incrConversions: Math.round(incrConversions),
      incrRevenue: Math.round(incrRevenue),
      roiRatio: +roiRatio.toFixed(1),
      paybackMonths: Math.round(paybackMonths),
      annualCost,
    };
  }, [industry, pkg, traffic, cvr, aov]);

  const getPackageLabel = (key: PackageKey) => {
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  return (
    <section className="py-24 bg-elevated">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="h-8 w-8 text-neon-green mr-3" />
            <h2 className="text-4xl font-manrope font-bold">SEO ROI Calculator</h2>
          </div>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            See exactly how much revenue our AI-powered SEO will generate for your business. 
            Based on real client data and industry benchmarks.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Input Controls */}
            <Card className="bg-midnight border-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-neon-green mr-2" />
                  Your Business Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Industry</Label>
                  <Select value={industry} onValueChange={handleIndustryChange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="saas">SaaS</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="local">Local Service</SelectItem>
                      <SelectItem value="content">Content / Media</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <SliderWithNumber
                  label="Monthly Organic Sessions"
                  min={0}
                  max={100000}
                  step={100}
                  value={traffic}
                  onValueChange={setTraffic}
                />

                <SliderWithNumber
                  label="Conversion Rate (%)"
                  min={0.1}
                  max={20}
                  step={0.1}
                  value={cvr}
                  onValueChange={setCvr}
                />

                <NumberInput
                  label="Average Revenue per Conversion ($)"
                  value={aov}
                  onValueChange={setAov}
                  min={1}
                />

                <div className="space-y-3">
                  <Label className="text-sm font-medium">SEO Package</Label>
                  <RadioGroup value={pkg} onValueChange={(val) => setPkg(val as PackageKey)}>
                    <div className="grid grid-cols-1 gap-3">
                      {Object.keys(PACKAGE_COST).map((key) => {
                        const packageKey = key as PackageKey;
                        return (
                          <div 
                            key={key} 
                            className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors ${
                              pkg === packageKey 
                                ? 'border-neon-green bg-neon-green/5' 
                                : 'border-secondary/20 hover:border-secondary/40'
                            }`}
                          >
                            <RadioGroupItem value={packageKey} id={packageKey} />
                            <Label htmlFor={packageKey} className="flex-1 cursor-pointer">
                              <div className="flex justify-between items-center">
                                <span className="font-medium">{getPackageLabel(packageKey)}</span>
                                <span className="text-neon-green font-semibold">
                                  ${PACKAGE_COST[packageKey]}/mo
                                </span>
                              </div>
                            </Label>
                          </div>
                        );
                      })}
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

            {/* Results Display */}
            <Card className="bg-gradient-to-br from-neon-green/5 to-transparent border-neon-green/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 text-neon-green mr-2" />
                  Your 12-Month ROI Forecast
                </CardTitle>
              </CardHeader>
              <CardContent aria-live="polite">
                {traffic === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    Add traffic data to calculate your ROI projection
                  </div>
                ) : (
                  <div className="space-y-1">
                    <OutputLine 
                      label="Extra Organic Sessions" 
                      value={results.incrTraffic.toLocaleString()} 
                    />
                    <OutputLine 
                      label="Extra Conversions" 
                      value={results.incrConversions.toLocaleString()} 
                    />
                    <OutputLine 
                      label="Extra Revenue" 
                      value={`$${results.incrRevenue.toLocaleString()}`}
                      highlight
                    />
                    <OutputLine 
                      label="ROI" 
                      value={`${(results.roiRatio * 100).toFixed(0)}%`}
                      highlight={results.roiRatio > 0}
                    />
                    <OutputLine 
                      label="Payback Period" 
                      value={
                        isFinite(results.paybackMonths) && results.paybackMonths > 0
                          ? results.paybackMonths > 60 
                            ? ">5 years" 
                            : `${results.paybackMonths} months`
                          : "–"
                      }
                    />
                    <div className="pt-4 border-t border-border/50 mt-6">
                      <div className="flex justify-between text-sm text-muted-foreground mb-4">
                        <span>Annual Investment</span>
                        <span>${(results.annualCost).toLocaleString()}</span>
                      </div>
                      <Link href="/contact" className="w-full">
                        <Button className="w-full" size="lg">
                          <Clock className="mr-2 h-4 w-4" />
                          Get Your Free SEO Audit
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Trust Elements */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              * Projections based on Brandforce client data and industry benchmarks. 
              Results may vary based on market conditions and implementation.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-secondary">
              <span>✓ 30-Day Guarantee</span>
              <span>✓ No Setup Fees</span>
              <span>✓ Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}