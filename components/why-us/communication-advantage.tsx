import { MessageCircle } from "lucide-react"

export function CommunicationAdvantage() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <MessageCircle className="w-10 h-10 text-red-600" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
          Communication Without
          <span className="text-red-600"> the Friction</span>
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Language barriers kill velocity. Our teams communicate with clarity — fluent in English, direct in feedback,
          and professional in delivery. You'll explain it once — and it gets built right the first time.
        </p>
      </div>
    </section>
  )
}
