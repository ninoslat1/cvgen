import { Card, CardContent } from "@/components/ui/card"
import { FileText, Edit, Download, ArrowRight } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      icon: FileText,
      title: "Choose Template",
      description: "Select from our collection of professional, ATS-friendly CV templates.",
      color: "bg-blue-500",
    },
    {
      icon: Edit,
      title: "Fill Your Details",
      description: "Add your information directly in your browser. Everything stays local and private.",
      color: "bg-green-500",
    },
    {
      icon: Download,
      title: "Download & Apply",
      description: "Export your polished CV and start applying to your dream jobs immediately.",
      color: "bg-purple-500",
    },
  ]

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-bound dark:text-white">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-white font-manrope">
            Create your professional CV in just three simple steps. No registration required.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative px-5">
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full dark:bg-white">
                  <CardContent className="pt-8 pb-8">
                    <div
                      className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 font-bound">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-manrope">{step.description}</p>
                  </CardContent>
                </Card>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-7.5 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
