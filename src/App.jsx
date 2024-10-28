import { Hero,CustomerReviews,
  Footer,PopularProducts,Services,SpecialOffers,
  Subscribe,SuperQuality
 } from './index'

 import Nav from "./components/Nav";

const App =()=>(
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r">
      <Hero />
    </section>
    <section className="padding">
    <PopularProducts />
    </section>
    <section className="padding">
    <SuperQuality />
    </section>
    <section className="padding-x padding-y">
    <Services />
    </section>
    <section className="padding">
    <SpecialOffers />
    </section>
    <section className="bg-pale-blue padding">
    <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
    <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
)

export default App