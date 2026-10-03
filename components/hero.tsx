"use client"

import { motion } from "framer-motion"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center overflow-hidden border-b border-border"
    >
      <BackgroundDecor />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-36 lg:px-10 lg:pb-32 lg:pt-40">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24"
        >
          {/* Lado esquerdo */}
          <div>
            <motion.div
              variants={item}
              className="mb-8 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-foreground/70" />

              <span className="text-[11px] tracking-[0.38em] text-muted-foreground">
                MENDES & BRITO ADVOCACIA
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-serif text-6xl font-light leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl"
            >
              Quem
              <br />
              <span className="italic text-muted-foreground">somos.</span>
            </motion.h1>

            {/* Conheça as sócias reposicionado */}
            <motion.div
              variants={item}
              className="mt-10 flex items-center gap-5"
            >
              <span className="h-px w-14 bg-foreground/40" />

              <a
                href="#socias"
                className="text-[11px] tracking-[0.28em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                CONHEÇA AS SÓCIAS
              </a>
            </motion.div>
          </div>

          {/* Lado direito */}
          <motion.div
            variants={item}
            className="flex flex-col justify-center border-l border-border pl-0 lg:pl-12"
          >
            <p className="max-w-2xl font-serif text-2xl font-light leading-relaxed text-foreground sm:text-3xl lg:text-[2rem]">
              Advocacia construída sobre estratégia, proximidade e segurança jurídica.
            </p>

            <div className="mt-10 max-w-2xl space-y-6 text-[15px] leading-8 text-muted-foreground sm:text-base">
              <p>
                Fundado em 2018 por Yohanna Mendes e Anya Brito, o Mendes & Brito
                Advocacia nasceu como uma boutique jurídica voltada ao atendimento
                personalizado e à construção de soluções jurídicas estratégicas.
              </p>

              <p>
                Mais do que oferecer serviços jurídicos, o escritório busca compreender
                a realidade de cada cliente, identificando riscos, oportunidades e
                caminhos juridicamente seguros para a tomada de decisões.
              </p>

              <p>
                Com sede em Fortaleza, o escritório atua de forma próxima, técnica e
                estratégica, preservando a individualidade de cada demanda e construindo
                relações pautadas pela confiança.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  )
}

function BackgroundDecor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute -right-48 top-1/4 h-[34rem] w-[34rem] rounded-full bg-foreground/[0.035] blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-foreground/[0.025] blur-[100px]"
      />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1.3,
        duration: 1,
      }}
      className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
    >
      <span className="text-[9px] tracking-[0.4em] text-muted-foreground">
        ROLE
      </span>

      <span className="relative flex h-10 w-px overflow-hidden bg-border">
        <motion.span
          animate={{
            y: [-40, 40],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute h-5 w-px bg-foreground/70"
        />
      </span>
    </motion.div>
  )
}
