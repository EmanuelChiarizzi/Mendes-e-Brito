"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const teamMembers = [
  {
    name: "Amanda Trindade",
    role: "Estagiária",
    oab: "",
    image: "/equipe-otimizada/amanda.webp",
  },
  {
    name: "Letícia Alencar",
    role: "Estagiária",
    oab: "",
    image: "",
  },
  {
    name: "Maria Veras",
    role: "Assistente Jurídica",
    oab: "",
    image: "",
  },
  {
    name: "Kamylla",
    role: "Secretária Executiva",
    oab: "",
    image: "/equipe-otimizada/kamylla.webp",
  },
  {
    name: "Gabriela Farias",
    role: "Advogada",
    oab: "OAB/CE 53.153 | OAB/RN 24.008-A",
    image: "/equipe-otimizada/gabriela.webp",
  },
  {
    name: "Isadora Silva",
    role: "Advogada",
    oab: "OAB/CE 57.241",
    image: "/equipe-otimizada/isadora.webp",
  },
  {
    name: "Rodrigo Lima",
    role: "Advogado",
    oab: "OAB/CE 45.645",
    image: "/equipe-otimizada/rodrigo.webp",
  },
  {
    name: "Lyzanndra Silva",
    role: "Advogada — Coordenação",
    oab: "OAB/CE 44.207",
    image: "/equipe-otimizada/lyzanndra.webp",
  },
  {
    name: "Yohanna Mendes",
    role: "Sócia Diretora",
    oab: "OAB/CE 37.250",
    image: "/equipe-otimizada/yohanna.webp",
  },
  {
    name: "Anya Brito",
    role: "Sócia Diretora",
    oab: "OAB/CE 19.162",
    image: "/equipe-otimizada/anya.webp",
  },
]

const carouselMembers = [...teamMembers, ...teamMembers, ...teamMembers]

export function Team() {
  return (
    <section
      id="equipe"
      className="relative overflow-hidden border-t border-border/60"
    >
      <BackgroundDecor />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 pt-20 lg:px-10 lg:pb-16 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />

            <span className="text-xs tracking-[0.4em] text-gold">
              NOSSA EQUIPE
            </span>
          </div>

          <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Profissionais que unem técnica, estratégia e{" "}
            <span className="italic text-gold">proximidade.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
            Uma equipe comprometida com atendimento personalizado, análise
            criteriosa e construção de soluções jurídicas adequadas a cada
            realidade.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 w-full overflow-hidden border-y border-border/60 py-8 lg:py-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-background to-transparent sm:w-32 lg:w-48" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-background to-transparent sm:w-32 lg:w-48" />

        <motion.div
          className="flex w-max gap-6 px-6 lg:gap-8 lg:px-10"
          animate={{
            x: ["0%", "-33.333%"],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {carouselMembers.map((member, index) => (
            <article
              key={`${member.name}-${index}`}
              className="group w-[300px] shrink-0 overflow-hidden border border-border/60 bg-background/80 backdrop-blur-sm sm:w-[340px] lg:w-[380px]"
            >
              <div className="relative flex h-[390px] items-center justify-center overflow-hidden bg-foreground/[0.025] sm:h-[430px]">
                <div className="absolute inset-6 border border-border/60" />

                <div className="absolute left-6 top-6 h-px w-12 bg-gold" />
                <div className="absolute left-6 top-6 h-12 w-px bg-gold" />

                <div className="absolute bottom-6 right-6 h-px w-12 bg-gold" />
                <div className="absolute bottom-6 right-6 h-12 w-px bg-gold" />

                {member.image ? (
                  <>
                    <Image
                      src={member.image}
                      alt={`Foto profissional de ${member.name}`}
                      fill
                      sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 380px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  </>
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3">
                    <span className="font-serif text-5xl font-light text-gold/30">
                      M&B
                    </span>

                    <span className="text-[10px] tracking-[0.3em] text-muted-foreground">
                      FOTO EM ATUALIZAÇÃO
                    </span>
                  </div>
                )}
              </div>

              <div className="border-t border-border/60 px-6 py-7 sm:px-8 sm:py-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[10px] tracking-[0.28em] text-gold sm:text-xs">
                      {member.role.toUpperCase()}
                    </p>

                    <h3 className="mt-3 font-serif text-2xl font-light text-foreground sm:text-3xl">
                      {member.name}
                    </h3>

                    {member.oab && (
                      <p className="mt-4 text-sm text-muted-foreground">
                        {member.oab}
                      </p>
                    )}
                  </div>

                  <ArrowUpRight
                    className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-8 lg:px-10 lg:py-10">
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          Cada profissional contribui com conhecimento técnico, visão
          estratégica e compromisso com os objetivos de cada cliente.
        </p>

        <span className="hidden text-[10px] tracking-[0.35em] text-gold sm:block">
          MENDES & BRITO
        </span>
      </div>
    </section>
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