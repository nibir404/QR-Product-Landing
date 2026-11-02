import { products } from './products.js'
import { Icon, ArrowUpRight } from './icons.jsx'

const external = { target: '_blank', rel: 'noopener noreferrer' }

function Navbar() {
  return (
    <header className="mx-auto flex w-full max-w-[1200px] items-center justify-end px-5 pt-6 md:justify-center md:px-8 md:pt-8">
      <nav aria-label="Products" className="hidden items-center gap-8 text-[15px] font-medium md:flex">
        {products.map((p) => (
          <a key={p.id} href={`#${p.id}`} className="transition-opacity hover:opacity-60">
            {p.name}
          </a>
        ))}
      </nav>
      <a href="#products" className="rounded-full bg-white px-3.5 py-2 text-[13px] font-medium md:hidden">
        {products.length} products
      </a>
    </header>
  )
}

const tilts = ['-rotate-[4deg]', 'rotate-[3deg] lg:-translate-y-3.5', '-rotate-[3deg] lg:translate-y-1.5', 'rotate-[4deg] lg:-translate-y-2']

function HeroCard({ product, tilt }) {
  const base = `block aspect-[150/184] w-full rounded-[22px] shadow-[0_14px_26px_rgba(17,17,17,0.16)] lg:w-[230px] lg:rounded-[30px] lg:shadow-[0_24px_40px_rgba(17,17,17,0.16)] overflow-hidden transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] ${tilt} ${product.theme.card}`
  const pad = 'flex h-full flex-col justify-between p-3.5 lg:p-[22px]'

  let inner
  if (product.id === 'joya') {
    inner = (
      <div className="relative h-full p-3 lg:p-[18px]">
        <img src={product.portrait} alt="" className="absolute inset-0 size-full object-cover" />
        <span className="relative inline-block rounded-full bg-[#F79549] px-2.5 py-1 text-[15px] font-extrabold text-[#0F1729] lg:px-4 lg:py-1.5 lg:text-[22px]">
          Joya
        </span>
      </div>
    )
  } else if (product.id === 'beto') {
    inner = (
      <div className={pad}>
        <img src={product.wordmark} alt="" className="h-[26px] w-auto self-start lg:h-[38px]" />
        <img src={product.logo} alt="" className="size-[72px] self-end lg:size-28" />
      </div>
    )
  } else if (product.id === 'qsor') {
    inner = (
      <div className={pad}>
        <span className="text-lg font-bold tracking-tight lg:text-[28px]">Qsor</span>
        <img src={product.logo} alt="" className="size-[68px] self-end lg:size-[104px]" />
      </div>
    )
  } else {
    inner = (
      <div className={pad}>
        <span className="text-lg leading-5 font-semibold tracking-tight lg:text-[28px] lg:leading-[30px]">
          Business
          <br />
          Brain
        </span>
        <img src={product.logo} alt="" className="size-[76px] self-end lg:size-[120px]" />
      </div>
    )
  }

  return (
    <a href={`#${product.id}`} aria-label={product.name} className={base}>
      {inner}
    </a>
  )
}

function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-5 md:px-8">
      <h1 className="max-w-[350px] pt-11 text-center text-[42px] leading-[44px] font-semibold tracking-[-0.045em] sm:max-w-[600px] sm:text-[56px] sm:leading-[58px] md:max-w-[900px] md:pt-[88px] md:text-[76px] md:leading-[78px]">
        AI products built for how Bangladesh works.
      </h1>

      <div className="grid w-full max-w-[342px] grid-cols-2 gap-3.5 px-1 pt-9 pb-8 sm:max-w-[420px] md:max-w-[480px] lg:flex lg:max-w-none lg:items-center lg:justify-center lg:gap-8 lg:px-0 md:pt-16 md:pb-12">
        {products.map((p, i) => (
          <HeroCard key={p.id} product={p} tilt={tilts[i]} />
        ))}
      </div>

      <p className="max-w-[334px] text-center text-base leading-6 text-[#4A4A4F] md:max-w-[560px] md:text-[19px] md:leading-7">
        An ERP, a receptionist, a private AI and a local cloud, all speaking Bangla and English.
      </p>
      <div className="flex gap-2 pt-[22px] pb-[52px] md:gap-2.5 md:pt-7 md:pb-28">
        <a
          href="#products"
          className="rounded-full bg-ink px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-black active:scale-[0.98] md:px-[26px] md:py-[15px] md:text-base"
        >
          Explore products
        </a>
      </div>
    </section>
  )
}

function ProductCard({ product }) {
  const { theme } = product
  const isJoya = product.id === 'joya'
  return (
    <article id={product.id} className="flex scroll-mt-6 flex-col gap-[18px] rounded-3xl bg-white p-5 md:p-8">
      <header className="flex items-center gap-3">
        <img
          src={product.logo}
          alt={`${product.name} logo`}
          className={`size-12 shrink-0 ${isJoya ? 'rounded-full border-2 border-[#F79549] object-cover' : ''}`}
        />
        <div>
          <h3 className="text-[21px] font-bold tracking-[-0.025em]">{product.name}</h3>
          <p className={`text-[13px] ${theme.category}`}>{product.category}</p>
        </div>
      </header>

      <p className="text-[15px] leading-[22px] text-[#3A3A3F]">{product.tagline}</p>

      <ul className="flex flex-col gap-2.5">
        {product.features.map((f) => (
          <li key={f.text} className="flex items-center gap-3 text-[15px] leading-5 text-[#2A2A2E]">
            <span className={`flex size-8 shrink-0 items-center justify-center rounded-[9px] ${theme.iconTile}`}>
              <Icon name={f.icon} />
            </span>
            {f.text}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex gap-2">
        <a
          href={product.url}
          {...external}
          className={`flex min-h-[46px] flex-1 items-center justify-between rounded-full px-[18px] py-3.5 text-[15px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.99] ${theme.cta} ${theme.ring}`}
        >
          Visit {product.domain}
          <ArrowUpRight />
        </a>
        <a
          href={product.brochure}
          download={`${product.name} brochure.pdf`}
          aria-label={`Download ${product.name} brochure`}
          title={`Download ${product.name} brochure`}
          className={`flex size-[50px] shrink-0 items-center justify-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.96] ${theme.iconTile} ${theme.ring}`}
        >
          <Icon name="download" className="size-5" />
        </a>
      </div>
    </article>
  )
}

function Products() {
  return (
    <section id="products" className="mx-auto w-full max-w-[1200px] scroll-mt-4 px-3 pb-3 md:px-8 md:pb-8">
      <div className="flex items-end justify-between px-2 pb-2 md:px-1 md:pb-4">
        <h2 className="text-[13px] font-medium tracking-[0.08em] text-muted uppercase md:text-[44px] md:leading-[48px] md:font-semibold md:tracking-[-0.035em] md:text-ink md:normal-case">
          What each one does
        </h2>
        <p className="hidden text-[15px] text-muted md:block">Tap any card to visit the product</p>
      </div>
      <div className="grid gap-3 pt-2 md:grid-cols-2 md:gap-6 md:pt-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-dvh overflow-x-hidden pb-[env(safe-area-inset-bottom)]">
      <Navbar />
      <main>
        <Hero />
        <Products />
      </main>
    </div>
  )
}
