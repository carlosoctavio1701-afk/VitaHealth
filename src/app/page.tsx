"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Apple, 
  Droplets, 
  Calculator, 
  Heart, 
  Activity, 
  Target,
  Plus,
  Minus,
  TrendingUp,
  Clock,
  Utensils,
  Zap,
  ArrowRight,
  Star,
  Users,
  Shield,
  Smartphone,
  LogIn
} from "lucide-react"
import Link from "next/link"

export default function VitaHealthLanding() {
  const [email, setEmail] = useState("")

  const features = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Monitoramento Completo",
      description: "Acompanhe calorias, passos, hidratação e muito mais em tempo real",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Apple className="w-8 h-8" />,
      title: "Nutrição Inteligente",
      description: "Descubra alimentos saudáveis e monte sua dieta personalizada",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Calculadoras de Saúde",
      description: "IMC, calorias diárias e outras métricas importantes",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Dicas Personalizadas",
      description: "Receba orientações baseadas no seu perfil e objetivos",
      color: "from-cyan-500 to-blue-500"
    }
  ]

  const stats = [
    { number: "50K+", label: "Usuários Ativos", icon: <Users className="w-6 h-6" /> },
    { number: "4.8", label: "Avaliação", icon: <Star className="w-6 h-6" /> },
    { number: "99%", label: "Satisfação", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Suporte", icon: <Smartphone className="w-6 h-6" /> }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Nutricionista",
      content: "O VitaHealth revolucionou como acompanho meus pacientes. Interface intuitiva e dados precisos!",
      avatar: "MS"
    },
    {
      name: "João Santos",
      role: "Personal Trainer",
      content: "Meus alunos adoram o app! Facilita muito o acompanhamento dos objetivos de cada um.",
      avatar: "JS"
    },
    {
      name: "Ana Costa",
      role: "Usuária",
      content: "Perdi 15kg em 6 meses usando o VitaHealth. As dicas personalizadas fazem toda diferença!",
      avatar: "AC"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                VitaHealth
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Recursos
              </a>
              <Link href="/pricing" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Preços
              </Link>
              <a href="#testimonials" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Depoimentos
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <Link href="/login">
                <Button variant="ghost" className="text-gray-700 hover:text-green-600">
                  <LogIn className="w-4 h-4 mr-2" />
                  Entrar
                </Button>
              </Link>
              <Link href="/login">
                <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white">
                  Começar Grátis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 pt-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-32">
          <div className="text-center">
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl shadow-lg">
                <Heart className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                VitaHealth
              </h1>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforme sua vida com
              <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                saúde inteligente
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              O aplicativo completo para monitorar sua saúde, nutrição e bem-estar. 
              Alcance seus objetivos com tecnologia de ponta e orientação personalizada.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/login">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Começar Gratuitamente
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-gray-300 hover:border-green-500 px-8 py-4 text-lg rounded-full transition-all duration-300"
                >
                  Ver Preços
                </Button>
              </Link>
            </div>

            {/* Email Signup */}
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-full border-2 border-gray-200 focus:border-green-500"
                />
                <Button className="rounded-full bg-green-600 hover:bg-green-700 px-6">
                  Inscrever
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Receba dicas de saúde e novidades do app
              </p>
            </div>
          </div>
        </div>

        {/* Floating Cards Preview */}
        <div className="absolute right-10 top-20 hidden lg:block animate-float">
          <Card className="w-64 shadow-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="w-6 h-6" />
                <span className="font-semibold">Hidratação</span>
              </div>
              <div className="text-3xl font-bold mb-2">1.750ml</div>
              <div className="text-sm opacity-90">Meta: 2.000ml</div>
              <div className="w-full bg-white/20 rounded-full h-2 mt-3">
                <div className="bg-white rounded-full h-2 w-4/5"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="absolute left-10 bottom-20 hidden lg:block animate-float-delayed">
          <Card className="w-64 shadow-2xl bg-gradient-to-br from-orange-500 to-red-500 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6" />
                <span className="font-semibold">Calorias</span>
              </div>
              <div className="text-3xl font-bold mb-2">1.847</div>
              <div className="text-sm opacity-90">Meta: 2.000 kcal</div>
              <div className="w-full bg-white/20 rounded-full h-2 mt-3">
                <div className="bg-white rounded-full h-2 w-5/6"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Tudo que você precisa para uma vida saudável
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recursos completos e intuitivos para transformar seus hábitos e alcançar seus objetivos de saúde
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6`}>
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Interface intuitiva e poderosa
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Dashboard completo com todas as métricas importantes, 
                calculadoras de saúde, dicas personalizadas e muito mais.
              </p>
              
              <div className="space-y-4">
                {[
                  "Monitoramento em tempo real",
                  "Relatórios detalhados",
                  "Sincronização com dispositivos",
                  "Lembretes inteligentes"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/login">
                <Button 
                  size="lg" 
                  className="mt-8 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-full"
                >
                  Experimentar Agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              {/* Mock App Interface */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold">VitaHealth</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-xl">
                      <Zap className="w-5 h-5 mb-2" />
                      <div className="text-2xl font-bold">1847</div>
                      <div className="text-sm opacity-90">Calorias</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-xl">
                      <Activity className="w-5 h-5 mb-2" />
                      <div className="text-2xl font-bold">8432</div>
                      <div className="text-sm opacity-90">Passos</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Café da Manhã</span>
                      <Badge variant="secondary">420 kcal</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Almoço</span>
                      <Badge variant="secondary">650 kcal</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              O que nossos usuários dizem
            </h3>
            <p className="text-xl text-gray-600">
              Milhares de pessoas já transformaram suas vidas com o VitaHealth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">
            Pronto para transformar sua saúde?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a milhares de pessoas que já escolheram uma vida mais saudável com o VitaHealth
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/login">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold"
              >
                Começar Gratuitamente
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg rounded-full"
              >
                Ver Planos e Preços
              </Button>
            </Link>
          </div>

          <p className="text-sm mt-6 opacity-75">
            Sem compromisso • Cancele quando quiser • Suporte 24/7
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6" />
                <span className="text-xl font-bold">VitaHealth</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transformando vidas através da tecnologia e cuidado com a saúde.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Recursos</a></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Preços</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Comunidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VitaHealth. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite 2s;
        }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  )
}
