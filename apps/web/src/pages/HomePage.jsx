import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Clock, Zap, Users, TrendingUp, Shield, Sparkles, 
  CheckCircle2, MessageSquare, ArrowRight, Bot, Target,
  Headphones, BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatDemoWidget from '@/components/ChatDemoWidget';
import BenefitCard from '@/components/BenefitCard';
import ProblemCard from '@/components/ProblemCard';
import StepCard from '@/components/StepCard';
import CheckmarkItem from '@/components/CheckmarkItem';

const WHATSAPP_URL = 'https://wa.me/5511939412228';

function HomePage() {

  const problems = [
    {
      title: 'Clientes esperando resposta',
      description: 'Mensagens acumuladas no WhatsApp enquanto sua equipe está ocupada ou fora do horário comercial.'
    },
    {
      title: 'Equipe sobrecarregada',
      description: 'Atendentes gastando tempo com perguntas repetitivas ao invés de focar em vendas complexas.'
    },
    {
      title: 'Perda de oportunidades fora do horário',
      description: 'Clientes que desistem porque não conseguem atendimento à noite ou nos finais de semana.'
    },
    {
      title: 'Falta de qualificação',
      description: 'Leads chegando sem informações básicas, dificultando o trabalho da equipe de vendas.'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Respostas instantâneas',
      description: 'Seus clientes recebem resposta em segundos, não em horas. Sem espera, sem frustração.'
    },
    {
      icon: Clock,
      title: 'Disponível 24/7',
      description: 'O agente nunca dorme. Atende seus clientes de madrugada, feriados e finais de semana.'
    },
    {
      icon: Users,
      title: 'Menos tarefas repetitivas',
      description: 'Sua equipe para de responder as mesmas perguntas e foca no que realmente importa: vender.'
    },
    {
      icon: Target,
      title: 'Qualificação automática',
      description: 'O agente coleta informações importantes antes de passar para sua equipe, economizando tempo.'
    },
    {
      icon: TrendingUp,
      title: 'Cresça sem contratar',
      description: 'Atenda 10x mais clientes sem precisar aumentar sua equipe de atendimento.'
    },
    {
      icon: Sparkles,
      title: 'Experiência melhorada',
      description: 'Clientes satisfeitos com atendimento rápido e eficiente, aumentando suas chances de venda.'
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Configuração personalizada',
      description: 'Configuramos o agente com as informações do seu negócio: produtos, horários, políticas e tom de voz da sua marca.'
    },
    {
      number: 2,
      title: 'Integração com WhatsApp',
      description: 'Conectamos o agente ao seu número do WhatsApp Business. Tudo funciona nativamente, sem apps externos.'
    },
    {
      number: 3,
      title: 'Leads qualificados chegando',
      description: 'O agente atende, responde dúvidas, coleta informações e encaminha leads prontos para sua equipe fechar.'
    }
  ];

  const differentials = [
    'Personalizado para o seu negócio, não uma resposta genérica',
    'Funciona nativamente no WhatsApp, sem apps ou links externos',
    'Qualificação inteligente de leads antes de passar para sua equipe',
    'Respostas instantâneas, não em minutos ou horas',
    'Disponível 24 horas por dia, 7 dias por semana',
    'Fácil de usar, sem necessidade de treinamento técnico',
    'Reduz custos com atendimento enquanto aumenta vendas'
  ];

  const objections = [
    {
      question: 'Meus clientes vão perceber que é um robô?',
      answer: 'O agente é treinado para conversar naturalmente, como um atendente humano. Ele usa o tom de voz da sua marca e responde de forma personalizada. A maioria dos clientes não percebe a diferença, e quando percebem, ficam impressionados com a rapidez.'
    },
    {
      question: 'E se o agente não souber responder algo?',
      answer: 'O agente é configurado com todas as informações do seu negócio. Se surgir uma pergunta que ele não sabe responder, ele transfere automaticamente para sua equipe humana, garantindo que nenhum cliente fique sem resposta.'
    },
    {
      question: 'Quanto tempo leva para implementar?',
      answer: 'A configuração inicial leva de 3 a 5 dias úteis. Nós fazemos todo o trabalho: configuração, treinamento do agente e integração com seu WhatsApp. Você só precisa fornecer as informações do seu negócio.'
    },
    {
      question: 'E se o WhatsApp mudar as regras?',
      answer: 'Nós monitoramos constantemente as políticas do WhatsApp e atualizamos o sistema automaticamente. Você não precisa se preocupar com mudanças técnicas ou de compliance.'
    },
    {
      question: 'Qual o investimento necessário?',
      answer: 'O investimento varia de acordo com o volume de mensagens e nível de personalização. Agende uma demonstração para receber uma proposta personalizada para o seu negócio. Geralmente, o retorno acontece no primeiro mês.'
    }
  ];

  const faqs = [
    {
      question: 'Como o agente aprende sobre meu negócio?',
      answer: 'Durante a configuração, nossa equipe coleta informações sobre seus produtos, serviços, horários, políticas e tom de voz. O agente é treinado especificamente para o seu negócio, não é uma solução genérica.'
    },
    {
      question: 'Posso usar em outros canais além do WhatsApp?',
      answer: 'Atualmente focamos exclusivamente no WhatsApp por ser o canal preferido dos brasileiros. Estamos desenvolvendo integrações com Instagram Direct e Messenger para breve.'
    },
    {
      question: 'Posso personalizar as respostas do agente?',
      answer: 'Sim! Você pode ajustar o tom de voz, adicionar ou remover informações, e definir como o agente deve se comportar em diferentes situações. Tudo é configurável.'
    },
    {
      question: 'Que tipo de suporte vocês oferecem?',
      answer: 'Oferecemos suporte via WhatsApp, email e telefone durante horário comercial. Para clientes premium, temos suporte prioritário 24/7 e um gerente de conta dedicado.'
    },
    {
      question: 'Quanto tempo leva para ver resultados?',
      answer: 'A maioria dos clientes vê resultados imediatos: redução no tempo de resposta e aumento na satisfação. O impacto em vendas geralmente aparece nas primeiras 2-4 semanas.'
    },
    {
      question: 'Posso cancelar quando quiser?',
      answer: 'Sim, não temos fidelidade. Você pode cancelar a qualquer momento. Acreditamos que você vai ficar porque os resultados falam por si.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Silveira IA - Atendimento inteligente para empresas</title>
        <meta name="description" content="Responda seus clientes no WhatsApp em segundos, 24 horas por dia. Agente de IA que atende, qualifica pedidos e encaminha para sua equipe." />
      </Helmet>

      <Header />

      <main>
        <section id="hero" className="section-spacing bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
                  Responda seus clientes no WhatsApp em segundos. 24 horas por dia.
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
                  Agente de IA que atende, qualifica pedidos e encaminha para sua equipe. Sem perder uma única oportunidade de venda.
                </p>
                <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                  Enquanto você dorme, o agente está trabalhando. Respondendo dúvidas, coletando informações e preparando leads qualificados para sua equipe fechar vendas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Button 
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 text-base"
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      Entrar em contato com um especialista
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Veja o agente funcionando em tempo real
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2 max-w-sm mx-auto lg:max-w-none"
              >
                <div className="relative">
                  <img 
                    src="https://images.hostinger.com/247ff959-4a6f-4621-b7f3-44c359d1ae98.png" 
                    alt="Empresário de pequeno negócio sorrindo ao usar o smartphone com um atendimento inteligente por IA no WhatsApp"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Resposta instantânea</p>
                      <p className="text-xs text-muted-foreground">24/7 disponível</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">O desafio de crescer sem perder clientes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProblemCard {...problem} />
                </motion.div>
              ))}
            </div>
            <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cada mensagem não respondida é uma venda perdida. Cada cliente que espera é um cliente que pode ir para o concorrente. O custo de não ter atendimento 24/7 é maior do que você imagina.
            </p>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transforme seu atendimento com IA</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Um agente de inteligência artificial que trabalha para você 24 horas por dia, respondendo clientes, qualificando leads e aumentando suas vendas.
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-8">
              {['Cliente envia mensagem', 'Agente responde instantaneamente', 'Coleta informações', 'Qualifica o lead', 'Encaminha para equipe'].map((step, index) => (
                <React.Fragment key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-2">
                      <span className="text-2xl font-bold text-primary">{index + 1}</span>
                    </div>
                    <p className="text-sm text-center max-w-[120px]">{step}</p>
                  </motion.div>
                  {index < 4 && (
                    <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios que transformam seu negócio</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BenefitCard {...benefit} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="section-spacing bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Como funciona</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Três passos simples para transformar seu atendimento
              </p>
            </div>
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <StepCard {...step} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-muted">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Veja o agente funcionando agora</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Demonstração em tempo real de como o agente responde seus clientes
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ChatDemoWidget />
            </motion.div>
            <p className="text-center text-sm text-muted-foreground mt-8">
              Esta é uma demonstração. Agende uma call para ver o agente configurado para o seu negócio.
            </p>
          </div>
        </section>

        <section id="diferenciais" className="section-spacing bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher Silveira IA</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {differentials.map((differential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <CheckmarkItem text={differential} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas frequentes</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {objections.map((item, index) => (
                <AccordionItem key={index} value={`objection-${index}`} className="bg-white rounded-xl px-6 border-none shadow-sm">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-spacing bg-accent text-accent-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para transformar seu atendimento?</h2>
              <p className="text-lg opacity-90 mb-8 leading-relaxed max-w-2xl mx-auto">
                Agende uma demonstração gratuita e veja o agente funcionando com as informações do seu negócio. Sem compromisso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button 
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 text-base"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Entrar em contato com um especialista
                  </a>
                </Button>
              </div>
              <p className="text-sm opacity-75">Sem compromisso. Sem cartão de crédito.</p>
            </motion.div>
          </div>
        </section>

        <section id="faq" className="section-spacing bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas frequentes</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((item, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-muted rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;