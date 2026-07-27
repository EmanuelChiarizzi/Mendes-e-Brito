"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Monika Abreu",
    text: "Escritório com ambiente agradável, profissionais comprometidos com os clientes!",
  },
  {
    name: "Mily Paiva",
    text: "Recomendo o trabalho da doutora e de sua equipe.",
  },
  {
    name: "André Brito",
    text: "Profissionalismo, ética e qualidade nos serviços prestados!",
  },
]

export function Testimonials() {
  return (
    <section
      id="depoimentos"
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
              DEPOIMENTOS
            </span>
          </div>

          <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Confiança construída em cada{" "}
            <span className="italic text-gold">atendimento.</span>
          </h2>

          <p className="mt-10 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
            Avaliações públicas de clientes sobre a experiência com o Mendes &
            Brito Advogados.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="h-4 w-4 fill-current"
                  strokeWidth={1.2}
                  aria-hidden="true"
                />
              ))}
            </div>

            <span>4,9 no Google</span>
            <span className="text-border">•</span>
            <span>36 avaliações</span>
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 border-t border-border/60 lg:mt-24 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.75,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative border-b border-border/60 px-6 py-12 lg:min-h-[360px] lg:border-b-0 lg:px-8 lg:py-14 ${
                index > 0 ? "lg:border-l lg:border-border/60" : ""
              }`}
            >
              <div className="absolute inset-0 bg-foreground/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col">
                <Quote
                  className="h-8 w-8 text-gold"
                  strokeWidth={1.1}
                  aria-hidden="true"
                />

                <p className="mt-10 font-serif text-2xl font-light leading-relaxed text-foreground lg:text-3xl">
                  “{testimonial.text}”
                </p>

                <div className="mt-auto pt-12">
                  <div className="h-px w-12 bg-gold/70" />
                  <p className="mt-5 text-sm tracking-[0.2em] text-muted-foreground">
                    {testimonial.name.toUpperCase()}
                  </p>
                  <p className="mt-2 text-xs tracking-[0.18em] text-gold">
                    AVALIAÇÃO NO GOOGLE
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