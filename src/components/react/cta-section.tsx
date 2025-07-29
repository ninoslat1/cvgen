import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Heart } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-0 shadow-2xl dark:bg-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-bound">Ready to Create Your Perfect CV?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-manrope dark:text-gray-500">
              Join thousands of job seekers who trust CVGen for their career success. Start building your professional
              CV today - completely free and private.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg">
                <a href="/generate">
                    Create Your CV Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="dark:text-white dark:bg-slate-900 hover:dark:text-white hover:dark:bg-slate-900">
                View Templates
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 font-manrope">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-green-500" />
                <span>No Registration Required</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-500" />
                <span>100% Private & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500" />
                <span>Always Free</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
