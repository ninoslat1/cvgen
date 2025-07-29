import { Button } from "@/components/ui/button"
import { FileText, Shield, Zap } from "lucide-react"

export default function HeroSection({lang, locale}: {lang: string, locale: Record<string, string>}) {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl shadow-lg">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight font-bound dark:text-white">
            CVGen
            <span className="font-manrope py-5 block text-2xl text-blue-600">{locale.Motto}</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed dark:text-white font-manrope">
            {locale.Slogan}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg">
              <a href="/generate">
                Start Creating Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent">
              View Examples
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-green-500" />
              <span className="dark:text-white">100% Free Forever</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-500" />
              <span className="dark:text-white">GDPR Compliant by Design</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-purple-500" />
              <span className="dark:text-white">No Data Collection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
