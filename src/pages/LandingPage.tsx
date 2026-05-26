import React from "react";
import heroFallback from "@assets/hero_1777469028928.webp";
import ctaClinic from "@/assets/cta-clinic.png";
import doctorPortrait from "@/assets/doctor-portrait.png";
import urgencyBg from "@assets/Untitled_design_1776366386390.png";
import logoImg from "@assets/logo_1776427159032.png";
import heroBg from "@assets/bg2_1776427699413.png";
import logoClara from "@assets/logoclara_1776428503274.png";
import avatarDra from "@assets/avatar_1776429906136.png";
import draFoto from "@assets/dra_1776430112801.png";
import { motion } from "framer-motion";
import {
  Heart,
  Stethoscope,
  Activity,
  CheckCircle2,
  Clock,
  User,
  Star,
  MessageCircle,
  ChevronDown,
  Shield,
  ActivitySquare,
  Baby,
  Footprints,
  PersonStanding,
  ArrowRight,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_URL = "https://wa.me/+5531993584428?text=Ol%C3%A1!%20Vim%20pelo%20site%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%2C";

const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const StaggerContainer = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      visible: { transition: { staggerChildren: 0.15 } },
      hidden: {},
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const StaggerItem = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const WhatsAppButton = ({
  className = "",
  showIcon = true,
  children = "Agendar consulta pelo WhatsApp",
}: {
  className?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
}) => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
    <Button
      size="lg"
      className={`rounded-full bg-[#25D366] hover:bg-[#20b858] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {showIcon && <MessageCircle className="mr-2 h-5 w-5" />}
      {children}
    </Button>
  </a>
);

function NavBar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-border/40">
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between h-16">
        <a href="#" className="shrink-0">
          <img src={logoImg} alt="Angélica Andrade – Ortopedista Pediátrica" className="h-10 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[
            { href: "#", label: "Início" },
            { href: "#sobre", label: "Sobre" },
            { href: "#condicoes", label: "Condições tratadas" },
            { href: "#faq", label: "Dúvidas" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0"
        >
          <Button
            className="h-10 rounded-full bg-[#25D366] hover:bg-[#20b858] text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 px-5"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar consulta
          </Button>
        </a>
      </div>
    </header>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-foreground">
      {/* Navbar */}
      <NavBar />

      {/* Sticky WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 ">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <button className="h-16 w-16 bg-[#25D366] hover:bg-[#20b858] cursor-pointer text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/30 transition-all hover:scale-105 active:scale-95 group">
            <MessageCircle className="h-8 w-8 group-hover:animate-pulse" />
          </button>
        </a>
      </div>

      {/* 1. Hero */}
      <section className="min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 relative overflow-hidden flex items-center">
        <img src={heroBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text */}
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 text-primary text-xs font-semibold tracking-widest uppercase mb-6 border border-primary/20">
                <Stethoscope className="h-3.5 w-3.5" />
                <span>Ortopedia Pediátrica Especializada</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-light text-secondary tracking-tight leading-[1.1] mb-6">
                O seu filho merece um olhar <strong>especialista</strong>, desde o primeiro dia.
              </h1>

              <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-lg">
                Consultas particulares com uma ortopedista pediátrica que é,
                também, mãe. Atendimento com tempo, presença e diagnóstico
                preciso para cada fase do desenvolvimento do seu filho.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-10">
                <div className="flex items-center gap-2.5 bg-muted rounded-full px-4 h-11">
                  <Heart className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    Atendimento humanizado
                  </span>
                </div>
                <div className="flex items-center gap-2.5 bg-muted rounded-full px-4 h-11">
                  <Shield className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    Precisão diagnóstica
                  </span>
                </div>
              </div>

              <WhatsAppButton className="text-base px-8 h-14">
                Agende sua consulta
                <ArrowRight className="ml-1 h-4 w-4" />
              </WhatsAppButton>
              <p className="text-sm text-muted-foreground mt-4">
                Atendimento particular com horário agendado
              </p>
            </FadeIn>

            {/* Right: image + floating card */}
            <FadeIn delay={0.2} className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={heroFallback}
                  className="w-full h-full object-cover"
                >
                  <source src={`${import.meta.env.BASE_URL}hero.webm`} type="video/webm" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 to-transparent" />
              </div>
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-border/30">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/15 rounded-full p-2 shrink-0 mt-0.5">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      Ambiente Acolhedor
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      Projetado para que as crianças se sintam seguras e à
                      vontade durante toda a avaliação.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. About the Doctor */}
      <section id="sobre" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
                Quem cuida do seu filho
              </h2>
              <h3 className="text-3xl md:text-4xl font-serif font-light text-secondary">
                Uma especialista que entende a ortopedia, e entende o que é ser <strong>mãe</strong>.
              </h3>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.2} className="order-2 md:order-1">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A Dra. Angélica não é apenas ortopedista pediátrica. Ela é mãe.
                E isso muda tudo. Quando você leva seu filho a uma consulta com
                ela, está falando com alguém que já sentiu a mesma ansiedade que
                você sente, a de olhar para seu filho e não saber se aquilo é
                normal ou não.
              </p>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Essa vivência prática não substitui a formação técnica, ela a
                complementa. Porque entender o desenvolvimento infantil de
                dentro, como mãe, adiciona uma camada de observação que vai além
                do que está nos livros.
              </p>

              <StaggerContainer className="space-y-6">
                <StaggerItem className="flex items-start gap-4">
                  <div className="bg-primary/20 p-2 rounded-lg mt-1">
                    <Shield className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">
                      Formação sólida
                    </h4>
                    <p className="text-muted-foreground mt-1">
                      Graduada em medicina pela UFJF, com especialização focada
                      na ortopedia infantil.
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex items-start gap-4">
                  <div className="bg-primary/20 p-2 rounded-lg mt-1">
                    <ActivitySquare className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">
                      Diagnóstico preciso
                    </h4>
                    <p className="text-muted-foreground mt-1">
                      Especialista em condições que exigem identificação
                      precoce.
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex items-start gap-4">
                  <div className="bg-primary/20 p-2 rounded-lg mt-1">
                    <MessageCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">
                      Comunicação clara
                    </h4>
                    <p className="text-muted-foreground mt-1">
                      Explica o diagnóstico de forma simples, sem termos que
                      geram mais dúvidas.
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex items-start gap-4">
                  <div className="bg-primary/20 p-2 rounded-lg mt-1">
                    <Heart className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">
                      Visão de mãe
                    </h4>
                    <p className="text-muted-foreground mt-1">
                      Mãe na prática, o que transforma completamente a forma de
                      olhar para cada caso.
                    </p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </FadeIn>

            <FadeIn delay={0.4} className="order-1 md:order-2">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={draFoto}
                  alt="Dra. Angélica, Ortopedista Pediátrica"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-sm text-center">
                  <span className="font-semibold text-foreground block">
                    Dra. Angélica
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Ortopedista Pediátrica
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Pain Identification */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <h2 className="text-sm font-semibold tracking-widest text-secondary uppercase mb-3 text-center">
              Para os pais que conhecem essa sensação
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-light text-secondary text-center mb-6">
              Você já ficou noites acordado com dúvidas sobre o desenvolvimento do seu <strong>filho</strong>?
            </h3>
            <p className="text-lg mx-auto text-center text-muted-foreground mb-12 max-w-2xl">
              Nenhum pai ou mãe deveria ter que esperar meses por uma resposta,
              ou sair de uma consulta com mais perguntas do que entrou.
            </p>
          </FadeIn>

          <Card className="border-none shadow-lg bg-white overflow-hidden rounded-2xl">
            <CardContent className="p-8 md:p-12">
              <StaggerContainer className="space-y-6">
                {[
                  "Percebeu algo diferente na pisada, na postura ou nos movimentos do seu filho e não sabe se é normal",
                  "Já levou ao pediatra, mas sente que precisa de uma avaliação mais específica",
                  "Seja para um tratamento específico ou apenas um exame de rotina",
                  "Prefere um diagnóstico especializado a meses de fisioterapia sem certeza",
                  "Quer ter tranquilidade, saber que seu filho está sendo acompanhado com cuidado de verdade",
                ].map((text, i) => (
                  <StaggerItem key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                    <p className="text-lg text-foreground">{text}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. Urgency + Belief Shift */}
      <section className="py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={urgencyBg}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#2a5480]/70" />
        </div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <FadeIn>
            <p className="text-xl md:text-2xl text-center font-light leading-relaxed mb-16 max-w-3xl mx-auto">
              Muitas condições ortopédicas infantis,como a displasia de quadril,
              o pé torto ou o torcicolo congênito, têm tratamento simples quando
              diagnosticadas cedo. O que muda o resultado é a velocidade e a
              precisão da avaliação.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 text-center border border-white/20 shadow-2xl relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-secondary w-12 h-12 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                <span className="text-6xl font-serif leading-none translate-y-4">
                  "
                </span>
              </div>
              <p className="text-2xl md:text-3xl font-semibold leading-snug mb-6 pt-4">
                Cada semana importa no desenvolvimento infantil. Um diagnóstico
                tardio pode transformar um tratamento simples em uma cirurgia.
              </p>
              <div className="flex items-center justify-center gap-3">
                <img
                  src={avatarDra}
                  alt="Dra. Angélica"
                  className="w-11 h-11 rounded-full object-cover object-top border-2 border-white/40 shrink-0"
                />
                <div className="text-left">
                  <p className="font-semibold text-white text-sm leading-tight">
                    Dra. Angélica
                  </p>
                  <p className="text-white/70 text-xs mt-0.5 tracking-wide">
                    Ortopedista Pediátrica
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-lg text-center mt-16 max-w-3xl mx-auto text-white/90">
              É por isso que a Dra. Angélica acredita que todo recém-nascido
              deveria passar por uma avaliação ortopédica. Não como um exame de
              rotina burocrático, mas como um ato de cuidado que pode mudar toda
              a trajetória da criança.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 5. Conditions Treated */}
      <section id="condicoes" className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
              O que a Dra. Angélica trata
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-light text-secondary mb-6">
              Condições que pedem atenção <strong>especializada</strong>, não espera
            </h3>
            <p className="text-lg text-muted-foreground">
              Cada uma dessas condições tem melhor resultado quando avaliada
              cedo por quem realmente entende.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "Displasia de quadril",
                desc: "Diagnóstico precoce que pode evitar completamente uma cirurgia. Tratamento com órtese, simples e eficaz quando feito no tempo certo.",
              },
              {
                icon: Footprints,
                title: "Pé torto congênito",
                desc: "Tratamento pelo Método Ponseti, realizado no consultório. Altamente eficaz quando iniciado cedo, sem necessidade de cirurgia na maioria dos casos.",
              },
              {
                icon: Baby,
                title: "Torcicolo congênito",
                desc: "Diagnóstico médico essencial antes de qualquer fisioterapia ou osteopatia. Condição frequentemente confundida, o acompanhamento correto faz toda a diferença.",
              },
              {
                icon: PersonStanding,
                title: "Pé chato, joelho valgo e varo",
                desc: "Na maioria dos casos, é fase do desenvolvimento, não é doença. Mas ter a confirmação de uma especialista é o que transforma a ansiedade em tranquilidade.",
              },
              {
                icon: User,
                title: "Postura e escoliose",
                desc: "Avaliação que diferencia alterações posturais normais da adolescência da escoliose estrutural, que precisa de acompanhamento específico.",
              },
              {
                icon: Stethoscope,
                title: "Avaliação do recém-nascido",
                desc: "Todo recém-nascido deveria passar por uma avaliação ortopédica. Uma consulta que pode identificar precocemente displasias, restrições de movimento e alterações motoras.",
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <Card className="h-full border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 rounded-2xl group bg-white">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                      <item.icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. Why Private Care */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-secondary uppercase mb-3">
              Por que o particular faz diferença
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-light text-secondary mb-6">
              Uma consulta com tempo, presença e <strong>atenção real</strong>
            </h3>
            <p className="text-lg text-muted-foreground">
              Não é sobre preço. É sobre o que o seu filho recebe dentro de cada
              consulta.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              {
                num: "01",
                title: "Tempo de verdade",
                desc: "Consultas com duração adequada para que nenhuma dúvida fique sem resposta. A Dra. Angélica não tem pressa. O seu filho merece essa calma.",
              },
              {
                num: "02",
                title: "Diagnóstico personalizado",
                desc: "Cada criança tem um desenvolvimento único. A avaliação não segue um roteiro genérico, ela parte do histórico, das dúvidas e das particularidades do seu filho.",
              },
              {
                num: "03",
                title: "Acesso direto à especialista",
                desc: "Você fala com a Dra. Angélica. Não com um assistente, não com uma triagem. Com quem vai cuidar do seu filho do início ao fim.",
              },
              {
                num: "04",
                title: "Acompanhamento contínuo",
                desc: "Pacotes de acompanhamento por período, com quantas consultas forem necessárias, sem surpresas no valor. A evolução do tratamento é monitorada de perto.",
              },
              {
                num: "05",
                title: "Explicações claras",
                desc: "Diagnóstico explicado de forma simples, sem termos que confundem. Você vai entender o que está acontecendo e o que precisa ser feito.",
              },
              {
                num: "06",
                title: "Tranquilidade como resultado",
                desc: "Sair de uma consulta com certeza, sobre o que é normal, o que precisa de atenção e o que fazer a seguir. Isso vale mais do que qualquer exame.",
              },
            ].map((item, i) => (
              <StaggerItem key={i} className="flex gap-6">
                <div className="text-primary/70 font-serif text-4xl font-bold pt-1">
                  {item.num}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 7. Positioning Statement */}
      <section className="py-24 bg-white border-y border-border/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-secondary mb-6">
                Atendimento particular: uma <strong>escolha de cuidado</strong>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A Dra. Angélica acredita que o atendimento particular permite
                entregar o nível de qualidade que cada criança merece. Por isso,
                ela se dedica exclusivamente a pacientes particulares, o que
                garante tempo, foco e personalização em cada consulta.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Esse modelo não é uma barreira, é uma escolha. Uma escolha de
                quem quer oferecer o melhor cuidado possível, sem as limitações
                que comprometeriam a qualidade da atenção ao seu filho.
              </p>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Para tornar o investimento mais acessível, a Dra. Angélica
                oferece pacotes de acompanhamento por período, valor fixo que
                inclui todas as consultas necessárias durante o tempo do
                tratamento.
              </p>
              <WhatsAppButton className="h-14 px-8">
                Agende uma consulta
              </WhatsAppButton>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="bg-muted border-none shadow-none rounded-3xl overflow-hidden">
                <div className="bg-secondary p-8 text-secondary-foreground text-center">
                  <h3 className="text-2xl font-serif font-light">
                    O que <strong className="!text-white">muda</strong> no atendimento particular
                  </h3>
                </div>
                <div className="p-8 space-y-6">
                  {[
                    {
                      label: "Tempo de consulta",
                      val: "Sem pressa, o necessário",
                    },
                    {
                      label: "Acesso à médica",
                      val: "Direto com a especialista",
                    },
                    { label: "Dúvidas respondidas", val: "Todas, sem exceção" },
                    { label: "Personalização", val: "Consulta sob medida" },
                    {
                      label: "Modelo de acompanhamento",
                      val: "Pacotes com valor fixo",
                    },
                    {
                      label: "Relação médico-paciente",
                      val: "Contínua e personalizada",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border-b border-border/50 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="font-medium text-foreground">
                        {item.label}
                      </span>
                      <span className="text-primary font-medium text-right ml-4">
                        {item.val}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
              Famílias que já passaram pela Dra. Angélica
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-light text-secondary">
              A confiança de quem já viveu a <strong>diferença</strong>
            </h3>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Meu filho tinha 2 meses quando notei algo diferente no movimento das pernas. A Dra. Angélica diagnosticou displasia de quadril precocemente. Hoje, sem cirurgia, ele está ótimo. Não tenho palavras para agradecer.",
                author: "Camila M.",
                role: "Mãe do Pedro, 8 meses",
                initials: "CM",
              },
              {
                text: "Levei minha filha a três pediatras antes de chegar à Dra. Angélica. Em uma consulta ela identificou o que ninguém tinha visto. O mais impressionante foi como ela explicou tudo, com paciência e clareza. A gente saiu tranquila.",
                author: "Renata S.",
                role: "Mãe da Sofia, 14 meses",
                initials: "RS",
              },
              {
                text: "Como pai, eu sempre achei que era exagero ficar preocupado com pisada e postura. A Dra. Angélica não só avaliou meu filho com todo o cuidado como me fez entender o que era normal e o que precisava de atenção. Sair da consulta com certeza foi o melhor remédio.",
                author: "Thiago L.",
                role: "Pai do Miguel, 3 anos",
                initials: "TL",
              },
            ].map((t, i) => (
              <StaggerItem key={i}>
                <Card className="h-full bg-white border-border shadow-sm rounded-2xl p-8 flex flex-col">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-8 flex-grow leading-relaxed">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 text-primary font-semibold text-sm flex items-center justify-center shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{t.author}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 9. FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-secondary uppercase mb-3">
              Dúvidas frequentes
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-light text-secondary mb-6">
              Perguntas que a gente entende, e responde com <strong>honestidade</strong>
            </h3>
            <p className="text-lg text-muted-foreground">
              Sabemos que a decisão de buscar um especialista particular tem
              peso. Aqui estão as dúvidas que mais chegam, respondidas de forma
              direta.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-border">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-6">
                  Preciso de encaminhamento para agendar?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  Não. Qualquer pai ou mãe pode agendar diretamente pelo
                  WhatsApp. Não é necessário indicação médica prévia para a
                  consulta particular.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-border">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-6">
                  A Dra. Angélica atende por algum plano de saúde?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  A Dra. Angélica atende exclusivamente de forma particular.
                  Esse modelo foi uma escolha consciente: permite dedicar o
                  tempo e a atenção que cada criança realmente precisa, sem as
                  limitações que comprometeriam a qualidade do cuidado.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-border">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-6">
                  Posso usar o reembolso do meu plano?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  Sim. Muitos planos de saúde oferecem reembolso para consultas
                  com especialistas fora da rede. Entre em contato com seu plano
                  para verificar as condições, e podemos fornecer o recibo
                  necessário.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-border">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-6">
                  Meu filho é bebê, é cedo demais para uma avaliação ortopédica?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  Na verdade, é o momento ideal. Muitas das condições mais
                  comuns, como displasia de quadril, têm tratamento simples
                  quando diagnosticadas nos primeiros meses. A avaliação precoce
                  é sempre a melhor escolha.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-border">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-6">
                  O prédio possui estacionamento?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  Sim. O prédio conta com estacionamento próprio, com cobrança à parte. Também há vagas disponíveis na rua em frente ao prédio, sujeitas à disponibilidade.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-border">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-6">
                  Qual é a duração da consulta?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  A consulta tem duração aproximada de 1 hora.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-border">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-6">
                  Como funcionam os retornos?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  Os retornos podem ser realizados em até 30 dias após a consulta, desde que estejam relacionados à queixa tratada anteriormente ou à avaliação de exames solicitados. Após esse prazo, ou em casos de novas queixas, será necessário agendar uma nova consulta.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border-border">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-6">
                  Preciso levar exames de imagem?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  Caso seja necessário levar exames de imagem, pedimos que nos avise com antecedência para que possamos fazer a solicitação antes da consulta.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="py-24 text-white text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={ctaClinic}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d2745]/92 to-[#1a3d6b]/88" />
        </div>
        <div className="container mx-auto max-w-3xl relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8">
              O cuidado que o seu filho merece começa com uma <strong className="!text-white">conversa</strong>
            </h2>
            <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
              Agende a consulta pelo WhatsApp. A Dra. Angélica responde
              pessoalmente, com atenção e sem pressa.
            </p>
            <WhatsAppButton className="text-base px-10 h-14 mb-8 shadow-xl">
              Agendar consulta agora
            </WhatsAppButton>
            <p className="text-sm opacity-80 mt-8">
              Atendimento na Vila da Serra, Nova Lima - Belo Horizonte ·
              Resposta rápida pelo WhatsApp
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white/90 py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Logo + tagline */}
            <div className="md:col-span-1">
              <div className="mb-4">
                <img src={logoClara} alt="Angélica Andrade – Ortopedista Pediátrica" className="h-14 w-auto" />
              </div>
              <p className="text-sm leading-relaxed text-white/60">
                Ortopedia Pediátrica em Belo Horizonte. Atendimento particular
                com tempo, presença e diagnóstico preciso.
              </p>
            </div>

            {/* Contact */}
            <div className="md:col-span-1">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                Contato
              </h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-white transition-colors"
                  >
                    <MessageCircle className="h-4 w-4 text-[#25D366] shrink-0" />
                    <span>(31) 99358-4428</span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <a 
                    href="https://maps.app.goo.gl/fQRKxF56JDSXoj7X9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-white transition-colors"
                    >
                      
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>
                      Rua Ministro Orozimbo Nonato, 442, Vila da Serra, Andar 11 Sala 1113, Nova Lima, MG, 34006-053.
                  </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div className="md:col-span-1">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                Links
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#sobre"
                    className="hover:text-white transition-colors"
                  >
                    Sobre a Dra. Angélica
                  </a>
                </li>
                <li>
                  <a
                    href="#condicoes"
                    className="hover:text-white transition-colors"
                  >
                    Condições tratadas
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    Dúvidas frequentes
                  </a>
                </li>
                <li>
                  <a
                    href="/politica-de-privacidade"
                    className="hover:text-white transition-colors"
                  >
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="md:col-span-1">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                Redes Sociais
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/ortopedista_angelica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/30 hover:text-white transition-all"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <p className="text-xs text-white/40 mt-6 leading-relaxed">
                Siga para conteúdos sobre saúde ortopédica infantil e
                desenvolvimento.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <p>
              © {new Date().getFullYear()} Dra. Angélica · Ortopedia
              Pediátrica. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
