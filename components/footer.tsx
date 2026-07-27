import { ArrowUpRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-3 lg:px-10">
        <div>
          <p className="font-serif text-2xl font-light text-foreground">
            Mendes & Brito
          </p>
          <p className="mt-2 text-xs tracking-[0.35em] text-muted-foreground">
            ADVOGADOS
          </p>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Soluções jurídicas estratégicas, personalizadas e responsáveis para
            pessoas e empresas.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.28em] text-gold">
            NAVEGAÇÃO
          </p>

          <nav className="mt-6 flex flex-col gap-4 text-sm text-muted-foreground">
            <a href="#inicio" className="transition-colors hover:text-gold">
              Início
            </a>
            <a href="#escritorio" className="transition-colors hover:text-gold">
              Escritório
            </a>
            <a
              href="#areas-de-atuacao"
              className="transition-colors hover:text-gold"
            >
              Áreas de atuação
            </a>
            <a href="#equipe" className="transition-colors hover:text-gold">
              Equipe
            </a>
            <a href="#contato" className="transition-colors hover:text-gold">
              Contato
            </a>
          </nav>
        </div>

        <div>
          <p className="text-xs tracking-[0.28em] text-gold">
            CONTATO
          </p>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>(85) 99860-0040</p>
            <p>@mendesbritoadvogados</p>
            <p>
              Rua Vicente Linhares, 500, salas 1902 e 1903, Aldeota, Fortaleza —
              CE.
            </p>
          </div>

          <a
            href="https://wa.me/5585998600040"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-gold"
          >
            Fale com nossa equipe
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.3} />
          </a>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>
            © {currentYear} Mendes & Brito Advogados. Todos os direitos
            reservados.
          </p>

          <p>Fortaleza — Ceará</p>
        </div>
      </div>
    </footer>
  )
}