"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const areas = [
  {
    title: "Direito das Famílias",
    description:
      "Assessoria jurídica em questões familiares, com atuação responsável, estratégica e sensível às particularidades de cada caso.",
  },
  {
    title: "Direito das Sucessões",
    description:
      "Orientação em inventários, partilhas, planejamento sucessório e organização patrimonial.",
  },
  {
    title: "Direito Imobiliário",
    description:
      "Assessoria em negociações, contratos, regularizações e conflitos relacionados a imóveis.",
  },
  {
    title: "Direito Público",
    description:
      "Atuação em demandas relacionadas à Administração Pública e à defesa de direitos em processos administrativos e judiciais.",
  },
  {
    title: "Direito Criminal",
    description:
      "Defesa técnica, responsável e estratégica em todas as etapas de investigações e processos criminais.",
  },
]

export function PracticeAreas() {
  return (
    <section
      id="areas-de-atuacao"
      className="relative overflow-hidden border-t border-border/60"
    >
      <BackgroundDecor />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-10 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />

            <span className="text-xs tracking-[0.4em] text-gold">
              ÁREAS DE ATUAÇÃO
            </span>
          </div>

          <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Especialização jurídica para{" "}
            <span className="italic text-gold">
              diferentes necessidades.
            </span>
          </h2>

          <p className="mt-10 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
            Cada cliente possui uma realidade única. Por isso, o escritório atua
            de forma estratégica, oferecendo soluções personalizadas em
            diferentes áreas do Direito.
          </p>
        </motion.div>

        {/* Lista de áreas */}
        <ul className="mt-20 grid grid-cols-1 border-t border-border/60 md:grid-cols-2 lg:mt-24">
          {areas.map((area, index) => {
            const number = String(index + 1).padStart(2, "0")
            const isRightColumn = index % 2 === 1
            const isLastOddItem =
              areas.length % 2 !== 0 && index === areas.length - 1

            return (
              <motion.li
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={[
                  "group relative border-b border-border/60",
                  isRightColumn
                    ? "md:border-l md:border-border/60"
                    : "",
                  isLastOddItem ? "md:col-span-2" : "",
                ].join(" ")}
              >
                <a
                  href="#contato"
                  className="relative flex min-h-52 items-start gap-6 overflow-hidden px-1 py-10 transition-colors duration-500 md:gap-8 md:px-8 md:py-12"
                >
                  {/* Fundo no hover */}
                  <span className="pointer-events-none absolute inset-0 bg-foreground/0.25 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Linha dourada */}
                  <span className="pointer-events-none absolute left-0 top-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />

                  {/* Numeração */}
                  <span className="relative mt-1 font-serif text-sm text-gold/70 transition-colors duration-300 group-hover:text-gold">
                    {number}
                  </span>

                  {/* Conteúdo */}
                  <div className="relative flex-1 transition-transform duration-500 ease-out group-hover:translate-x-2">
                    <h3 className="font-serif text-2xl font-light text-foreground transition-colors duration-300 group-hover:text-gold lg:text-3xl">
                      {area.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground lg:text-base">
                      {area.description}
                    </p>
                  </div>

                  {/* Seta */}
                  <ArrowUpRight
                    className="relative mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                </a>
              </motion.li>
            )
          })}
        </ul>

        {/* Chamada final */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="border-b border-l border-r border-border/60 px-6 py-16 text-center md:px-10 md:py-20"
        >
          <h3 className="font-serif text-3xl font-light text-foreground md:text-4xl">
            Não encontrou a área que procura?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Nossa equipe está preparada para analisar sua demanda e orientar
            sobre a estratégia jurídica mais adequada.
          </p>

          <a
            href="#contato"
            className="mt-8 inline-flex items-center gap-3 border border-gold bg-gold px-7 py-4 text-sm font-medium text-black transition-all duration-300 hover:bg-transparent hover:text-gold"
          >
            Fale com nossa equipe
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </motion.div>
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