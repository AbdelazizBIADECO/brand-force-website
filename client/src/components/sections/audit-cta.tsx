import AuditForm from "@/components/forms/audit-form";

export default function AuditCTA() {
  return (
    <section className="py-24 bg-elevated">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6">
            Get a Free AI-Powered SEO Audit
          </h2>
          <p className="text-xl text-secondary mb-8">
            Includes a keyword gap map, audit score, and custom SEO growth opportunities.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <AuditForm />
            
            {/* Preview */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="SEO Analytics Dashboard Preview" 
                className="rounded-2xl shadow-2xl w-full"
              />
              
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-green/20 to-transparent rounded-2xl"></div>
              
              <div className="absolute bottom-4 left-4 bg-midnight/80 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-neon-green rounded-full"></div>
                  <span className="text-sm font-medium">Live AI Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
