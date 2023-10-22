import Hero from '@/views/Hero'
import Productlist from '@/views/Productlist'
import Allprod from '@/views/allprod'
import ProductsSection from '@/views/productsSection'
import Promotion from '@/views/promotion'
import SearchSec from '@/views/searchSec'
export default function Home() {
  return (
  <div>
    <Hero/>
    <Promotion/>
    <ProductsSection/>
    <Allprod/>
    <SearchSec/>
    {/* <Productlist/> */}
  </div>
  )
}
