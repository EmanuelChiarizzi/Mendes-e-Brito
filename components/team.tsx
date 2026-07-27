"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const teamMembers = [
  {
    name: "Yohanna Mendes",
    role: "Sócia-fundadora",
    description:
      "Advogada e cofundadora do Mendes & Brito Advogados. Informações sobre formação, experiência e áreas de atuação serão validadas com o escritório.",
    initials: "YM",
  },
  {
    name: "Anya Brito",
    role: "Sócia-fundadora",
    description:
      "Advogada e cofundadora do Mendes & Brito Advogados. Informações sobre formação, experiência e áreas de atuação serão validadas com o escritório.",
    initials: "AB",
  },
]

export function Team() {
  return (
    <section
      id="equipe"
      className="relative overflow-hidden border-t border-border/60"
    >
      <BackgroundDecor />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-10 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs tracking-[0.4em] text-gold">
              NOSSA EQUIPE
            </span>
          </div>

          <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Profissionais que unem técnica, estratégia e{" "}
            <span className="italic text-gold">proximidade.</span>
          </h2>

          <p className="mt-10 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
            Uma equipe comprometida com atendimento personalizado, análise
            criteriosa e construção de soluções jurídicas adequadas a cada
            realidade.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 border-t border-border/60 md:grid-cols-2 lg:mt-24">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.75,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group border-b border-border/60 ${
                index === 1 ? "md:border-l md:border-border/60" : ""
              }`}
            >
              <div className="grid min-h-[580px] grid-rows-[1fr_auto]">
                <div className="relative flex items-center justify-center overflow-hidden bg-foreground/0.25">
                  <div className="absolute inset-8 border border-border/60" />
                  <div className="absolute left-8 top-8 h-px w-14 bg-gold" />
                  <div className="absolute left-8 top-8 h-14 w-px bg-gold" />
                  <div className="absolute bottom-8 right-8 h-px w-14 bg-gold" />
                  <div className="absolute bottom-8 right-8 h-14 w-px bg-gold" />

                  <span className="font-serif text-7xl font-light tracking-tight text-foreground transition-transform duration-700 group-hover:scale-105 md:text-8xl">
                    {member.initials}
                  </span>

                  <span className="absolute bottom-12 text-[10px] tracking-[0.35em] text-muted-foreground">
                    FOTO PROFISSIONAL
                  </span>
                </div>

                <div className="border-t border-border/60 px-6 py-8 md:px-8 md:py-10">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs tracking-[0.28em] text-gold">
                        {member.role.toUpperCase()}
                      </p>

                      <h3 className="mt-3 font-serif text-3xl font-light text-foreground">
                        {member.name}
                      </h3>
                    </div>

                    <ArrowUpRight
                      className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold"
                      strokeWidth={1.25}
                      aria-hidden="true"
                    />
                  </div>

                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground lg:text-base">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
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