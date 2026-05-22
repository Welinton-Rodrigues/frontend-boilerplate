import Button from '../ui/Button'

function Hero() {
  return (
    <section className="flex h-[768px] w-full flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="mb-4 text-[64px] font-normal leading-[88px] text-primary">
        Find Your Perfect Print
      </h1>
      <p className="mb-8 max-w-md text-lg text-secondary">
        Curated collections that turn blank walls into beautiful expressions.
      </p>
      <Button>Shop for prints</Button>
    </section>
  )
}

export default Hero
