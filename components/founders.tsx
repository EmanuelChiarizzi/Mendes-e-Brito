"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const founders = [
  {
    name: "Anya Lima Penha de Brito",
    shortName: "Anya Brito",
    role: "Advogada | Sócia do Mendes & Brito Advocacia",
    oab: "OAB/CE 19.162",
    image: "/equipe-otimizada/anya.webp",

    paragraphs: [
      "Advogada e sócia do Mendes & Brito Advocacia, Anya Lima Penha de Brito é Bacharel em Direito pela Universidade de Fortaleza (Unifor), desde 2006, e possui sólida trajetória profissional e acadêmica.",

      "É Mestre em Direito pelo Centro Universitário Christus (Unichristus), Pós-Graduada em Direito de Família e Sucessões pela Fundação Escola Superior do Ministério Público, possui MBA em Gestão e Business Law pela Universidade de Fortaleza (Unifor) e é Especialista em Direito do Trabalho pela Unichristus.",

      "Sua atuação é especialmente dedicada ao Direito das Famílias e Sucessões, área em que alia experiência profissional, formação acadêmica especializada e atuação estratégica na condução de questões familiares e patrimoniais.",

      "Atua em demandas relacionadas a divórcio, reconhecimento e dissolução de união estável, guarda e convivência, alimentos, partilha de bens, inventários e planejamento sucessório, tanto na esfera judicial quanto extrajudicial.",

      "Possui experiência na condução de casos de maior complexidade, especialmente aqueles que envolvem patrimônio relevante, estruturas empresariais, investigação da capacidade econômica, proteção patrimonial e repercussões financeiras decorrentes das relações familiares.",

      "À frente do Mendes & Brito Advocacia, participa diretamente da definição das estratégias jurídicas e do acompanhamento dos casos, pautando sua atuação pelo rigor técnico, estratégia, atendimento personalizado e busca por soluções juridicamente seguras.",
    ],

    education: [
      "Bacharel em Direito — Universidade de Fortaleza (Unifor), 2006",
      "Mestre em Direito — Centro Universitário Christus (Unichristus)",
      "Pós-Graduada em Direito de Família e Sucessões — Fundação Escola Superior do Ministério Público",
      "MBA em Gestão e Business Law — Universidade de Fortaleza (Unifor)",
      "Especialista em Direito do Trabalho — Centro Universitário Christus (Unichristus)",
    ],
  },

  {
    name: "Yohanna Pontes Mendes",
    shortName: "Yohanna Mendes",
    role: "Advogada | Sócia do Mendes & Brito Advocacia",
    oab: "OAB/CE 37.250",
    image: "/equipe-otimizada/yohanna.webp",

    paragraphs: [
      "Advogada e sócia do Mendes & Brito Advocacia, Yohanna Pontes Mendes é Bacharel em Direito pela Faculdade Farias Brito (FFB), Especialista em Direito Imobiliário pela Universidade de Fortaleza (Unifor) e membro do Instituto Brasileiro de Direito Imobiliário (IBRADIM).",

      "Com atuação concentrada no Direito Imobiliário e Patrimonial, possui ampla experiência na condução de questões relacionadas à regularização jurídica e registral de imóveis, estruturação de negócios imobiliários e organização patrimonial.",

      "Ao longo de sua trajetória profissional, desenvolveu experiência especialmente em procedimentos de regularização imobiliária, usucapião, adjudicação compulsória, retificação e regularização de registros, análise documental de imóveis, contratos de compra e venda e locações.",

      "Sua atuação também compreende o planejamento e a organização patrimonial, com análise jurídica voltada à proteção do patrimônio, prevenção de riscos e planejamento sucessório.",

      "Também atua de forma estratégica na estruturação e análise de negociações imobiliárias, realizando avaliação jurídica de documentos, contratos, matrículas, riscos e pendências que possam impactar a segurança e a viabilidade dos negócios.",

      "À frente do Mendes & Brito Advocacia, participa diretamente da definição das estratégias jurídicas e do acompanhamento dos casos, pautando sua atuação pela técnica, estratégia, segurança jurídica e atendimento personalizado.",
    ],

    education: [
      "Bacharel em Direito — Faculdade Farias Brito (FFB)",
      "Especialista em Direito Imobiliário — Universidade de Fortaleza (Unifor)",
      "Membro do Instituto Brasileiro de Direito Imobiliário (IBRADIM)",
    ],
  },
]

export function Founders() {
  return (
    <section
      id="socias"
      className="relative overflow-hidden border-t border-border/60"
    >
      <BackgroundDecor />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />

            <span className="text-xs tracking-[0.4em] text-gold">
              SÓCIAS
            </span>
          </div>

          <h2 className="font-serif text-4xl font-light leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Liderança construída com experiência, técnica e{" "}
            <span className="italic text-gold">estratégia.</span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {founders.map((founder, index) => (
            <Founder
              key={founder.name}
              founder={founder}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function Founder({
  founder,
  reverse,
}: {
  founder: (typeof founders)[number]
  reverse: boolean
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`grid items-start gap-10 lg:grid-cols-12 lg:gap-14 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="lg:col-span-5">
        <div className="relative aspect-[4/5] overflow-hidden border border-border/60 bg-foreground/[0.025]">
          <div className="absolute inset-5 z-10 border border-border/50" />

          <div className="absolute left-5 top-5 z-20 h-px w-14 bg-gold" />
          <div className="absolute left-5 top-5 z-20 h-14 w-px bg-gold" />

          <div className="absolute bottom-5 right-5 z-20 h-px w-14 bg-gold" />
          <div className="absolute bottom-5 right-5 z-20 h-14 w-px bg-gold" />

          <Image
            src={founder.image}
            alt={`Foto profissional de ${founder.name}`}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-top"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
        </div>
      </div>

      <div className="lg:col-span-7">
        <p className="text-xs tracking-[0.25em] text-gold">
          {founder.role.toUpperCase()}
        </p>

        <h3 className="mt-4 font-serif text-4xl font-light text-foreground sm:text-5xl">
          {founder.shortName}
        </h3>

        <p className="mt-4 text-sm text-muted-foreground">
          {founder.oab}
        </p>

        <div className="my-7 h-px w-20 bg-gold/70" />

        <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground">
          {founder.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10">
          <p className="mb-5 text-[11px] tracking-[0.3em] text-gold">
            FORMAÇÃO ACADÊMICA E INSTITUCIONAL
          </p>

          <div className="space-y-3">
            {founder.education.map((item) => (
              <div
                key={item}
                className="flex gap-4 border-b border-border/40 pb-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-[9px] h-px w-4 shrink-0 bg-gold/70" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function BackgroundDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
    >
      <div className="absolute inset-0 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative h-full w-full">
          {[0, 25, 50, 75, 100].map((left) => (
            <div
              key={left}
              className="absolute top-0 h-full w-px bg-border/30"
              style={{ left: `${left}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}