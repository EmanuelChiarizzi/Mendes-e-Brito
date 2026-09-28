"use client"
import Image from "next/image"

import { motion, type Variants } from "framer-motion"

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

const principles = [
  {
    title: "Compromisso",
    description: "Atuação técnica e dedicada em cada etapa do atendimento.",
  },
  {
    title: "Estratégia",
    description: "Soluções jurídicas personalizadas para cada realidade.",
  },
  {
    title: "Acolhimento",
    description: "Relacionamento próximo, transparente e baseado na confiança.",
  },
]

export function About() {
  return (
    <section
      id="escritorio"
      className="relative overflow-hidden border-t border-border/60"
    >
      <BackgroundDecor />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7"
          >
            <motion.div
              variants={item}
              className="mb-7 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-gold" />

              <span className="text-xs tracking-[0.4em] text-gold">
                O ESCRITÓRIO
              </span>
            </motion.div>

            <motion.h2
              variants={item}
              className="text-balance font-serif text-4xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Estratégia jurídica construída com técnica, compromisso e{" "}
              <span className="italic text-gold">acolhimento.</span>
            </motion.h2>

            <motion.div
              variants={item}
              className="mt-7 max-w-2xl space-y-5 text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg"
            >
              <p>
                Fundado em 2018 por Yohanna Mendes e Anya Brito, o Mendes &amp;
                Brito Advogados nasceu como uma boutique jurídica voltada ao
                atendimento personalizado e à construção de soluções jurídicas
                estratégicas.
              </p>

              <p>
                Mais do que oferecer serviços jurídicos, o escritório busca
                compreender profundamente cada cliente, desenvolvendo
                estratégias seguras, responsáveis e alinhadas às particularidades
                de cada demanda.
              </p>

              <p>
                Com sede em Fortaleza, o escritório atua com ética, proximidade
                e excelência, prestando assessoria jurídica a pessoas e empresas
                em diversas áreas do Direito.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-5"
          >
            <VisualPlaceholder />
          </motion.div>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 border-t border-border/60 md:grid-cols-3 lg:mt-16"
        >
          {principles.map((principle, index) => (
            <motion.li
              key={principle.title}
              variants={item}
              className={`group relative py-7 md:py-8 md:pr-8 ${
                index !== 0
                  ? "border-t border-border/60 md:border-l md:border-t-0 md:pl-8"
                  : "md:pr-8"
              }`}
            >
              <span className="absolute left-0 top-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-16 md:left-auto md:right-0 md:group-hover:w-24" />

              <span className="font-serif text-sm text-gold/80">
                0{index + 1}
              </span>

              <h3 className="mt-3 font-serif text-2xl font-light text-foreground transition-colors duration-300 group-hover:text-gold">
                {principle.title}
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

function VisualPlaceholder() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-border bg-black">
      <Image
        src="/FotoJuntas.jpeg"
        alt="Yohanna Mendes e Anya Brito, sócias fundadoras do Mendes & Brito Advocacia"
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

      <div className="absolute inset-4 rounded-sm border border-white/10" />

      <span className="absolute left-4 top-4 h-4 w-px bg-white/40" />
      <span className="absolute left-4 top-4 h-px w-4 bg-white/40" />
      <span className="absolute bottom-4 right-4 h-4 w-px bg-white/40" />
      <span className="absolute bottom-4 right-4 h-px w-4 bg-white/40" />

      <div className="absolute bottom-6 left-6 right-6">
        <p className="text-[10px] uppercase tracking-[0.32em] text-white/60">
          Sócias fundadoras
        </p>

        <p className="mt-2 font-serif text-2xl font-light text-white">
          Yohanna Mendes &amp; Anya Brito
        </p>
      </div>
    </div>
  )
}

function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
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

