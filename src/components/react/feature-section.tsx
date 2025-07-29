import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Database, Zap, Lock, Download, Palette } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "100% Free",
      description: "No hidden costs, no premium plans, no subscriptions. Create unlimited CVs completely free.",
      color: "text-green-500",
    },
    {
      icon: Shield,
      title: "GDPR Compliant by Design",
      description: "Built from the ground up with privacy regulations in mind. Your rights are protected by default.",
      color: "text-blue-500",
    },
    {
      icon: Database,
      title: "Local Data Storage",
      description: "All your data stays in your browser using IndexedDB and OPFS. No servers, no cloud storage.",
      color: "text-purple-500",
    },
    {
      icon: Lock,
      title: "Zero Data Collection",
      description:
        "We don't collect, store, or transmit any of your personal information. Complete privacy guaranteed.",
      color: "text-red-500",
    },
    {
      icon: Download,
      title: "Export Anywhere",
      description: "Download your CV as PDF, Word, or other formats. Your data, your control, your choice.",
      color: "text-orange-500",
    },
    {
      icon: Palette,
      title: "Professional Templates",
      description: "Choose from beautiful, ATS-friendly templates designed to help you stand out to employers.",
      color: "text-indigo-500",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-bound">Why Choose CVGen?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-manrope">
            Experience the perfect balance of powerful features and complete privacy protection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-white">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 dark:bg-slate-900`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-500 font-bound">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed dark:text-gray-500 font-manrope">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
