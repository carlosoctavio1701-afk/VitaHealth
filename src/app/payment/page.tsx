"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  CreditCard, 
  Wallet, 
  DollarSign,
  Shield,
  Lock,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Calendar,
  User,
  Building,
  Smartphone,
  QrCode,
  Receipt,
  Clock,
  Star,
  Zap,
  Globe,
  ArrowRight,
  Plus,
  Minus
} from "lucide-react"
import Link from "next/link"

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState("credit-card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("premium")

  // Estados do formulário
  const [paymentData, setPaymentData] = useState({
    // Cartão de Crédito
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    
    // PIX
    pixKey: "",
    
    // Boleto
    boletoEmail: "",
    
    // Dados pessoais
    fullName: "",
    cpf: "",
    email: "",
    phone: ""
  })

  const plans = [
    {
      id: "basic",
      name: "Básico",
      price: 0,
      period: "Grátis para sempre",
      features: [
        "Até 100 transações/mês",
        "3 contas bancárias",
        "Relatórios básicos",
        "Suporte por email"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      id: "premium",
      name: "Premium",
      price: 19.90,
      period: "por mês",
      features: [
        "Transações ilimitadas",
        "Contas ilimitadas",
        "Relatórios avançados",
        "Metas financeiras",
        "Suporte prioritário",
        "Exportação de dados",
        "Categorização automática"
      ],
      popular: true,
      color: "from-blue-600 to-purple-600"
    },
    {
      id: "business",
      name: "Business",
      price: 49.90,
      period: "por mês",
      features: [
        "Tudo do Premium",
        "Multi-usuários (até 5)",
        "API de integração",
        "Relatórios personalizados",
        "Suporte 24/7",
        "Gerente de conta dedicado",
        "Backup automático"
      ],
      popular: false,
      color: "from-purple-600 to-pink-600"
    }
  ]

  const paymentMethods = [
    {
      id: "credit-card",
      name: "Cartão de Crédito",
      icon: <CreditCard className="w-5 h-5" />,
      description: "Visa, Mastercard, Elo",
      processing: "Aprovação instantânea"
    },
    {
      id: "pix",
      name: "PIX",
      icon: <QrCode className="w-5 h-5" />,
      description: "Pagamento instantâneo",
      processing: "Confirmação em segundos"
    },
    {
      id: "boleto",
      name: "Boleto Bancário",
      icon: <Receipt className="w-5 h-5" />,
      description: "Vencimento em 3 dias",
      processing: "Confirmação em até 2 dias úteis"
    }
  ]

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simular processamento do pagamento
    setTimeout(() => {
      setIsProcessing(false)
      setPaymentSuccess(true)
    }, 3000)
  }

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Pagamento Realizado!
            </h2>
            <p className="text-gray-600 mb-6">
              Seu plano {plans.find(p => p.id === selectedPlan)?.name} foi ativado com sucesso.
            </p>
            <div className="space-y-3">
              <Link href="/">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  Ir para Dashboard
                </Button>
              </Link>
              <Button variant="outline" className="w-full">
                Ver Recibo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  FinanceApp
                </h1>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-600">Pagamento Seguro</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Plans */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Escolha seu plano
              </h2>
              <p className="text-gray-600">
                Selecione o plano ideal para suas necessidades financeiras
              </p>
            </div>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {plans.map((plan) => (
                <Card 
                  key={plan.id}
                  className={`relative cursor-pointer transition-all duration-200 ${
                    selectedPlan === plan.id 
                      ? 'ring-2 ring-blue-500 shadow-lg scale-105' 
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Mais Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-2">
                    <div className={`w-12 h-12 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold">
                        {plan.price === 0 ? 'Grátis' : `R$ ${plan.price.toFixed(2).replace('.', ',')}`}
                      </div>
                      <div className="text-sm text-gray-600">{plan.period}</div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Payment Methods */}
            {selectedPlan !== "basic" && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Forma de Pagamento</CardTitle>
                  <p className="text-gray-600">Escolha como deseja pagar</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          selectedMethod === method.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedMethod(method.id)}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 rounded-lg ${
                            selectedMethod === method.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                          }`}>
                            {method.icon}
                          </div>
                          <div>
                            <div className="font-medium">{method.name}</div>
                            <div className="text-sm text-gray-600">{method.description}</div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">{method.processing}</div>
                      </div>
                    ))}
                  </div>

                  {/* Payment Form */}
                  <form onSubmit={handlePayment} className="space-y-6">
                    {/* Credit Card Form */}
                    {selectedMethod === "credit-card" && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Número do Cartão</Label>
                            <Input
                              id="cardNumber"
                              placeholder="1234 5678 9012 3456"
                              value={paymentData.cardNumber}
                              onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cardName">Nome no Cartão</Label>
                            <Input
                              id="cardName"
                              placeholder="João Silva"
                              value={paymentData.cardName}
                              onChange={(e) => setPaymentData({...paymentData, cardName: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiryDate">Validade</Label>
                            <Input
                              id="expiryDate"
                              placeholder="MM/AA"
                              value={paymentData.expiryDate}
                              onChange={(e) => setPaymentData({...paymentData, expiryDate: e.target.value})}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                              id="cvv"
                              placeholder="123"
                              value={paymentData.cvv}
                              onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* PIX Form */}
                    {selectedMethod === "pix" && (
                      <div className="text-center space-y-4">
                        <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center mx-auto">
                          <QrCode className="w-24 h-24 text-gray-400" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-2">Escaneie o QR Code</h3>
                          <p className="text-sm text-gray-600 mb-4">
                            Use o app do seu banco para escanear o código PIX
                          </p>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <p className="text-xs text-gray-500 mb-1">Ou copie a chave PIX:</p>
                            <code className="text-sm font-mono">
                              00020126580014BR.GOV.BCB.PIX0136123e4567-e12b-12d1-a456-426614174000
                            </code>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Boleto Form */}
                    {selectedMethod === "boleto" && (
                      <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertCircle className="w-5 h-5 text-yellow-600" />
                            <span className="font-medium text-yellow-800">Atenção</span>
                          </div>
                          <p className="text-sm text-yellow-700">
                            O boleto será enviado por email e terá vencimento em 3 dias úteis.
                            Após o pagamento, a confirmação pode levar até 2 dias úteis.
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="boletoEmail">Email para receber o boleto</Label>
                          <Input
                            id="boletoEmail"
                            type="email"
                            placeholder="seu@email.com"
                            value={paymentData.boletoEmail}
                            onChange={(e) => setPaymentData({...paymentData, boletoEmail: e.target.value})}
                            required
                          />
                        </div>
                      </div>
                    )}

                    {/* Personal Data */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-bold mb-4">Dados Pessoais</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Nome Completo</Label>
                          <Input
                            id="fullName"
                            placeholder="João Silva"
                            value={paymentData.fullName}
                            onChange={(e) => setPaymentData({...paymentData, fullName: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cpf">CPF</Label>
                          <Input
                            id="cpf"
                            placeholder="000.000.000-00"
                            value={paymentData.cpf}
                            onChange={(e) => setPaymentData({...paymentData, cpf: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                            value={paymentData.email}
                            onChange={(e) => setPaymentData({...paymentData, email: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone</Label>
                          <Input
                            id="phone"
                            placeholder="(11) 99999-9999"
                            value={paymentData.phone}
                            onChange={(e) => setPaymentData({...paymentData, phone: e.target.value})}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Processando Pagamento...
                        </div>
                      ) : (
                        <>
                          {selectedMethod === "boleto" ? "Gerar Boleto" : "Finalizar Pagamento"}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            )}

            {selectedPlan === "basic" && (
              <Card>
                <CardContent className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Plano Básico Selecionado</h3>
                  <p className="text-gray-600 mb-6">
                    Você pode começar a usar o FinanceApp gratuitamente agora mesmo!
                  </p>
                  <Link href="/">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      Começar Agora
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Summary */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Plano selecionado:</span>
                  <span className="font-bold">
                    {plans.find(p => p.id === selectedPlan)?.name}
                  </span>
                </div>
                
                {selectedPlan !== "basic" && (
                  <>
                    <div className="flex items-center justify-between">
                      <span>Valor mensal:</span>
                      <span className="font-bold">
                        R$ {plans.find(p => p.id === selectedPlan)?.price.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span>Desconto primeiro mês:</span>
                      <span className="font-bold text-green-600">-50%</span>
                    </div>
                    
                    <hr />
                    
                    <div className="flex items-center justify-between text-lg">
                      <span className="font-bold">Total hoje:</span>
                      <span className="font-bold text-blue-600">
                        R$ {((plans.find(p => p.id === selectedPlan)?.price || 0) / 2).toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      <p>• Cobrança recorrente mensal</p>
                      <p>• Cancele quando quiser</p>
                      <p>• Suporte 24/7</p>
                    </div>
                  </>
                )}

                {selectedPlan === "basic" && (
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">Grátis</div>
                    <div className="text-sm text-gray-600">
                      <p>• Sem cobrança</p>
                      <p>• Sem cartão de crédito</p>
                      <p>• Comece agora mesmo</p>
                    </div>
                  </div>
                )}

                {/* Security Features */}
                <div className="border-t pt-4">
                  <h4 className="font-bold mb-3">Segurança Garantida</h4>
                  <div className="space-y-2">
                    {[
                      { icon: <Shield className="w-4 h-4" />, text: "Criptografia SSL 256-bits" },
                      { icon: <Lock className="w-4 h-4" />, text: "Dados protegidos" },
                      { icon: <CheckCircle className="w-4 h-4" />, text: "PCI DSS Compliance" }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="text-green-600">{feature.icon}</div>
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Support */}
                <div className="border-t pt-4">
                  <h4 className="font-bold mb-2">Precisa de ajuda?</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Nossa equipe está pronta para ajudar você.
                  </p>
                  <Button variant="outline" className="w-full" size="sm">
                    <Smartphone className="w-4 h-4 mr-2" />
                    Falar com Suporte
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}