"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const founders = [
  {
    name: "Anya Lima Penha de Brito",
    shortName: "Anya Brito",
    role: "Sócia Diretora",
    oab: "OAB/CE 19.162",
    area: "Direito das Famílias e Sucessões",
    image: "/equipe-otimizada/anya.webp",

    description:
      "Advogada e sócia do Mendes & Brito Advocacia, possui sólida trajetória profissional e acadêmica, com atuação especialmente dedicada ao Direito das Famílias e Sucessões.",

    details:
      "Atua em demandas relacionadas a divórcio, união estável, guarda e convivência, alimentos, partilha de bens, inventários e planejamento sucessório, inclusive em casos que envolvem patrimônio relevante e estruturas empresariais.",

    education: [
      "Bacharel em Direito — Universidade de Fortaleza (Unifor), 2006",
      "Mestre em Direito — Centro Universitário Christus (Unichristus)",
      "Pós-Graduada em Direito de Família e Sucessões",
      "MBA em Gestão e Business Law — Universidade de Fortaleza",
      "Especialista em Direito do Trabalho — Unichristus",
    ],
  },

  {
    name: "Yohanna Pontes Mendes",
    shortName: "Yohanna Mendes",
    role: "Sócia Diretora",
    oab: "OAB/CE 37.250",
    area: "Direito Imobiliário e Patrimonial",
    image: "/equipe-otimizada/yohanna.webp",

    description:
      "Advogada e sócia do Mendes & Brito Advocacia, possui atuação concentrada no Direito Imobiliário e Patrimonial, assessorando pessoas físicas, famílias, investidores e empresas.",

    details:
      "Atua em regularização imobiliária, usucapião, adjudicação compulsória, análise documental, contratos, negociações imobiliárias, organização patrimonial e planejamento sucessório.",

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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 max-w-3xl lg:mb-20"
        >
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />

            <span className="text-xs tracking-[0.4em] text-gold">
              SÓCIAS DIRETORAS
            </span>
          </div>

          <h2 className="font-serif text-4xl font-light leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Experiência, estratégia e uma atuação{" "}
            <span className="italic text-gold">próxima.</span>
          </h2>
        </motion.div>

        <div className="space-y-24 lg:space-y-32">
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
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative">
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
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />

          <div className="absolute bottom-8 left-8 z-20">
            <span className="text-[10px] tracking-[0.35em] text-gold">
              MENDES & BRITO
            </span>
          </div>
        </div>
      </div>

      <div>
        <p className="text-xs tracking-[0.32em] text-gold">
          {founder.role.toUpperCase()}
        </p>

        <h3 className="mt-4 font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl">
          {founder.shortName}
        </h3>

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span>{founder.oab}</span>

          <span className="hidden text-gold sm:inline">•</span>

          <span className="text-foreground/85">{founder.area}</span>
        </div>

        <div className="my-8 h-px w-20 bg-gold/70" />

        <div className="max-w-xl space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>{founder.description}</p>
          <p>{founder.details}</p>
        </div>

        <div className="mt-9">
          <p className="mb-5 text-[11px] tracking-[0.3em] text-gold">
            FORMAÇÃO E ATUAÇÃO
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