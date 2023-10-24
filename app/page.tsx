import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Parallax from '@/components/Parallax'
import Product from '@/components/Product'
import { getProducts } from '@/utils/fetchStripeProducts'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'

const Home = async () => {
  const products = await getProducts()

  return (
    <>
      <Hero />
      <Features />
      <Parallax />
      <>
        {products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </>
      <FAQ />
      <Contact />
    </>
  )
}

export default Home
