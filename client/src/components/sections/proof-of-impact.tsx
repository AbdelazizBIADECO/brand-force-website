export default function ProofOfImpact() {
  const clientLogos = ["TechCorp", "StartupX", "GrowthCo", "ScaleUp"];
  
  const results = [
    {
      value: "+320%",
      label: "Organic Traffic",
      sublabel: "in 90 Days"
    },
    {
      value: "5x",
      label: "Local Search Visibility",
      sublabel: "Average improvement"
    },
    {
      value: "70%",
      label: "Reduction in SEO Spend",
      sublabel: "Compared to agencies"
    }
  ];

  return (
    <section className="py-24 bg-elevated">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6">Backed by Results</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Real data from real clients who trusted us with their SEO
          </p>
        </div>
        
        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-60">
          {clientLogos.map((logo, index) => (
            <div key={index} className="bg-midnight rounded-lg p-4 w-32 h-16 flex items-center justify-center">
              <span className="text-lg font-bold">{logo}</span>
            </div>
          ))}
        </div>
        
        {/* Results Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div key={index} className="bg-midnight rounded-2xl p-8 text-center card-glow">
              <div className="text-4xl font-manrope font-bold gradient-text mb-2">{result.value}</div>
              <div className="text-secondary">{result.label}</div>
              <div className="text-sm text-secondary mt-2">{result.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
