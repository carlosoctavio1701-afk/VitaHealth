"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Heart, 
  Check, 
  ArrowLeft, 
  Zap, 
  Crown, 
  Sparkles,
  Users,
  Shield,
  Headphones,
  TrendingUp
} from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")

  const plans = [
    {
      name: "Básico",
      description: "Perfeito para começar sua jornada",
      icon: <Heart className="w-8 h-8" />,
      color: "from-gray-500 to-gray-600",
      priceMonthly: 0,
      priceYearly: 0,
      features: [
        "Monitoramento de calorias",
        "Contador de passos",
        "Registro de hidratação",
        "Calculadora de IMC",
        "Relatórios semanais",
        "Suporte por email"
      ],
      limitations: [
        "Anúncios inclusos",
        "Histórico de 30 dias"
      ],
      cta: "Começar Grátis",
      popular: false
    },
    {
      name: "Premium",
      description: "Para quem leva saúde a sério",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-blue-600",
      priceMonthly: 29.90,
      priceYearly: 299.00,
      features: [
        "Tudo do plano Básico",
        "Sem anúncios",
        "Planos de refeição personalizados",
        "Dicas de IA personalizadas",
        "Sincronização com dispositivos",
        "Histórico ilimitado",
        "Relatórios detalhados",
        "Suporte prioritário 24/7",
        "Acesso antecipado a novos recursos"
      ],
      limitations: [],
      cta: "Assinar Premium",
      popular: true
    },
    {
      name: "Profissional",
      description: "Para nutricionistas e personal trainers",
      icon: <Crown className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      priceMonthly: 79.90,
      priceYearly: 799.00,
      features: [
        "Tudo do plano Premium",
        "Gerenciamento de até 50 clientes",
        "Dashboard profissional",
        "Relatórios personalizados",
        "API de integração",
        "Marca branca (white label)",
        "Treinamento exclusivo",
        "Gerente de conta dedicado",
        "Análises avançadas"
      ],
      limitations: [],
      cta: "Começar Teste Grátis",
      popular: false
    }
  ]

  const getPrice = (plan: typeof plans[0]) => {
    if (plan.priceMonthly === 0) return "Grátis"
    const price = billingPeriod === "monthly" ? plan.priceMonthly : plan.priceYearly / 12
    return `R$ ${price.toFixed(2)}`
  }

  const getSavings = (plan: typeof plans[0]) => {
    if (plan.priceMonthly === 0) return null
    const monthlyCost = plan.priceMonthly * 12
    const savings = monthlyCost - plan.priceYearly
    return savings > 0 ? `Economize R$ ${savings.toFixed(2)}` : null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover:bg-white/50">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl shadow-lg">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              VitaHealth
            </h1>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transforme sua saúde com as ferramentas certas. Todos os planos incluem 14 dias de teste grátis.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                billingPeriod === "monthly"
                  ? "bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                billingPeriod === "yearly"
                  ? "bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Anual
              <Badge className="bg-orange-500 text-white border-0">
                -17%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-0 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? "ring-4 ring-green-500 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-1 text-sm font-semibold">
                    <Sparkles className="w-4 h-4 mr-1 inline" />
                    Mais Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${plan.color} text-white mb-4 mx-auto`}>
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Price */}
                <div className="text-center">
                  <div className="text-5xl font-bold text-gray-900 mb-2">
                    {getPrice(plan)}
                  </div>
                  {plan.priceMonthly > 0 && (
                    <>
                      <div className="text-gray-600 mb-2">
                        por mês
                      </div>
                      {billingPeriod === "yearly" && getSavings(plan) && (
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          {getSavings(plan)}
                        </Badge>
                      )}
                    </>
                  )}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full py-6 text-lg font-semibold rounded-lg transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl"
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
                >
                  {plan.cta}
                </Button>

                {/* Features */}
                <div className="space-y-3 pt-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <Check className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-2">Limitações:</p>
                    {plan.limitations.map((limitation, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-gray-500">
                        <span>•</span>
                        <span>{limitation}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Compare todos os recursos
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Recurso</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Básico</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Premium</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Profissional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { feature: "Monitoramento de calorias", basic: true, premium: true, pro: true },
                  { feature: "Contador de passos", basic: true, premium: true, pro: true },
                  { feature: "Registro de hidratação", basic: true, premium: true, pro: true },
                  { feature: "Sem anúncios", basic: false, premium: true, pro: true },
                  { feature: "Planos de refeição personalizados", basic: false, premium: true, pro: true },
                  { feature: "Dicas de IA", basic: false, premium: true, pro: true },
                  { feature: "Sincronização com dispositivos", basic: false, premium: true, pro: true },
                  { feature: "Histórico ilimitado", basic: false, premium: true, pro: true },
                  { feature: "Gerenciamento de clientes", basic: false, premium: false, pro: true },
                  { feature: "Dashboard profissional", basic: false, premium: false, pro: true },
                  { feature: "API de integração", basic: false, premium: false, pro: true },
                  { feature: "Marca branca", basic: false, premium: false, pro: true }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-700">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {row.basic ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.premium ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.pro ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <Users className="w-8 h-8" />,
              title: "50K+ Usuários",
              description: "Confiança comprovada"
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Dados Seguros",
              description: "Criptografia de ponta"
            },
            {
              icon: <Headphones className="w-8 h-8" />,
              title: "Suporte 24/7",
              description: "Sempre disponível"
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "Resultados Reais",
              description: "Transformações comprovadas"
            }
          ].map((badge, idx) => (
            <Card key={idx} className="border-0 shadow-lg text-center bg-white">
              <CardContent className="p-6">
                <div className="inline-flex p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl text-white mb-4">
                  {badge.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{badge.title}</h4>
                <p className="text-sm text-gray-600">{badge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Perguntas Frequentes
          </h3>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                q: "Posso cancelar a qualquer momento?",
                a: "Sim! Você pode cancelar sua assinatura a qualquer momento sem taxas ou penalidades."
              },
              {
                q: "Como funciona o teste grátis?",
                a: "Todos os planos incluem 14 dias de teste grátis. Você não será cobrado até o final do período de teste."
              },
              {
                q: "Posso mudar de plano depois?",
                a: "Claro! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento."
              },
              {
                q: "Quais formas de pagamento são aceitas?",
                a: "Aceitamos cartões de crédito, débito, PIX e boleto bancário."
              },
              {
                q: "Há desconto para estudantes?",
                a: "Sim! Estudantes têm 50% de desconto em todos os planos pagos. Entre em contato com nosso suporte."
              }
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-6 last:border-0">
                <h4 className="font-semibold text-gray-900 mb-2 text-lg">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl shadow-2xl p-12 text-center text-white">
          <h3 className="text-4xl font-bold mb-4">
            Pronto para começar sua transformação?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já escolheram uma vida mais saudável com o VitaHealth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full font-semibold"
            >
              Começar Teste Grátis
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-6 text-lg rounded-full"
            >
              Falar com Vendas
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            Sem cartão de crédito necessário • Cancele quando quiser
          </p>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  )
}
