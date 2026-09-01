"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Escritório", href: "#escritorio" },
  { label: "Áreas de Atuação", href: "#areas-de-atuacao" },
  { label: "Contato", href: "#contato" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)

    onScroll()

    window.addEventListener("scroll", onScroll, {
      passive: true,
    })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        
        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-3"
          aria-label="Mendes & Brito Advocacia"
        >
          <div className="relative h-14 w-14 shrink-0 overflow-hidden">
            <Image
              src="/logotopo.png"
              alt="Símbolo Mendes & Brito"
              fill
              priority
              sizes="56px"
              className="object-cover scale-125"
            />
          </div>

          <div className="flex flex-col leading-none">
            <span className="font-serif text-lg tracking-[0.18em] text-foreground sm:text-xl">
              MENDES{" "}
              <span className="text-gold">&amp;</span>{" "}
              BRITO
            </span>

            <span className="mt-1.5 text-[10px] tracking-[0.42em] text-gold">
              ADVOCACIA
            </span>
          </div>
        </a>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}

                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Botão mobile */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="text-foreground md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? (
            <X
              className="h-6 w-6"
              strokeWidth={1.5}
            />
          ) : (
            <Menu
              className="h-6 w-6"
              strokeWidth={1.5}
            />
          )}
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <motion.ul
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: "auto",
          }}
          exit={{
            opacity: 0,
            height: 0,
          }}
          className="flex flex-col gap-1 border-t border-border bg-background/95 px-6 py-4 backdrop-blur-xl md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm tracking-wide text-muted-foreground transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  )
}