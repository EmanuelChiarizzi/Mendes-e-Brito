"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-svh items-center overflow-hidden">
      <BackgroundDecor />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-28 lg:px-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div variants={item} className="mb-10 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs tracking-[0.4em] text-gold">SOLUÇÕES JURÍDICAS ESTRATÉGICAS</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance font-serif text-5xl font-light leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Excelência jurídica para proteger aquilo que{" "}
            <span className="italic text-gold">mais importa.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl"
          >
            Atuação estratégica para empresas e pessoas, oferecendo soluções jurídicas modernas, seguras e
            personalizadas.
          </motion.p>

          <motion.div variants={item} className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-medium tracking-wide text-background transition-all duration-300 hover:bg-gold-muted"
            >
              Fale com nossa equipe
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#areas-de-atuacao"
              className="group inline-flex items-center justify-center gap-2 rounded-sm border border-border px-8 py-4 text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:border-gold hover:text-gold"
            >
              Conheça nossas áreas
            </a>
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  )
}

function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* fine vertical guide lines */}
      <div className="absolute inset-0 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative h-full w-full">
          {[0, 25, 50, 75, 100].map((left) => (
            <div
              key={left}
              className="absolute top-0 h-full w-px bg-border/40"
              style={{ left: `${left}%` }}
            />
          ))}
        </div>
      </div>

      {/* slow drifting gold glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute -right-40 top-1/4 h-[36rem] w-[36rem] rounded-full bg-gold/10 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-foreground/[0.04] blur-[100px]"
      />

      {/* bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 1 }}
      className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
    >
      <span className="text-[10px] tracking-[0.4em] text-muted-foreground">ROLE</span>
      <span className="relative flex h-12 w-px overflow-hidden bg-border">
        <motion.span
          animate={{ y: [-48, 48] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute h-6 w-px bg-gold"
        />
      </span>
    </motion.div>
  )
}
