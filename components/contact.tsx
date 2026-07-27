"use client"

import { motion } from "framer-motion"
import {
  ArrowUpRight,
  AtSign,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react"

const contactItems = [
  {
    label: "WhatsApp",
    value: "(85) 99860-0040",
    href: "https://wa.me/5585998600040",
    icon: MessageCircle,
  },
  {
    label: "Telefone",
    value: "(85) 99860-0040",
    href: "tel:+5585998600040",
    icon: Phone,
  },
  {
    label: "Instagram",
    value: "@mendesbritoadvogados",
    href: "https://www.instagram.com/mendesbritoadvogados/",
    icon: AtSign,
  },
  {
    label: "Horário",
    value: "Atendimento até as 18h",
    href: "#contato",
    icon: Clock3,
  },
]

export function Contact() {
  return (
    <section
      id="contato"
      className="relative scroll-mt-24 overflow-hidden border-t border-border/60"
    >
      <BackgroundDecor />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-10 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />
              <span className="text-xs tracking-[0.4em] text-gold">
                CONTATO
              </span>
            </div>

            <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Fale com uma equipe preparada para{" "}
              <span className="italic text-gold">ouvir sua demanda.</span>
            </h2>

            <p className="mt-10 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
              Entre em contato para apresentar sua situação e receber as
              orientações iniciais sobre o atendimento do escritório.
            </p>

            <a
              href="https://wa.me/5585998600040"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 border border-gold bg-gold px-7 py-4 text-sm font-medium text-black transition-all duration-300 hover:bg-transparent hover:text-gold"
            >
              Fale pelo WhatsApp
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border border-border/60 bg-foreground/1.5"
          >
            <div className="border-b border-border/60 p-7 md:p-9">
              <div className="flex items-start gap-4">
                <MapPin
                  className="mt-1 h-5 w-5 shrink-0 text-gold"
                  strokeWidth={1.3}
                />

                <div>
                  <p className="text-xs tracking-[0.28em] text-gold">
                    ENDEREÇO
                  </p>

                  <p className="mt-4 font-serif text-2xl font-light leading-relaxed text-foreground">
                    Office Plaza Business Center
                  </p>

                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground lg:text-base">
                    Rua Vicente Linhares, 500, salas 1902 e 1903, Aldeota,
                    Fortaleza — CE, CEP 60135-270.
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Rua+Vicente+Linhares+500+Aldeota+Fortaleza"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-foreground transition-colors duration-300 hover:text-gold"
                  >
                    Ver rota no Google Maps
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.3} />
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              {contactItems.map((contact, index) => {
                const Icon = contact.icon

                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={
                      contact.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      contact.href.startsWith("http")
                        ? "noreferrer"
                        : undefined
                    }
                    className={[
                      "group relative border-b border-border/60 p-7 transition-colors duration-500 hover:bg-foreground/2.5 md:p-8",
                      index % 2 === 1
                        ? "sm:border-l sm:border-border/60"
                        : "",
                      index >= 2 ? "sm:border-b-0" : "",
                    ].join(" ")}
                  >
                    <Icon
                      className="h-5 w-5 text-gold"
                      strokeWidth={1.3}
                    />

                    <p className="mt-7 text-xs tracking-[0.25em] text-gold">
                      {contact.label.toUpperCase()}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-foreground">
                      {contact.value}
                    </p>

                    <ArrowUpRight
                      className="absolute right-6 top-7 h-4 w-4 text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold"
                      strokeWidth={1.25}
                    />
                  </a>
                )
              })}
            </div>
          </motion.div>
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