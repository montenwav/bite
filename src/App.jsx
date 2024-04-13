import { Main } from './components/Main.jsx'
import { Cards } from './components/Cards.jsx'
import { TopCompanies } from './components/TopCompanies.jsx'
import { BitsAreBetter } from './components/BitsAreBetter.jsx'
import { Reviews } from './components/Reviews.jsx'
import { ShopByCategory } from './components/ShopByCategory.jsx'
import { BottomCompanies } from './components/BottomCompanies.jsx'
import { FAQs } from './components/FAQs.jsx'
import { Footer } from './components/Footer.jsx'
import {Provider} from './hooks/Provider.jsx'

export default function App() {
  return (
    <Provider>
      <Main/>
      <TopCompanies />
      <Cards/>
      <BitsAreBetter/>
      {/* <Reviews/> */}
      <ShopByCategory/>
      <BottomCompanies/>
      <FAQs/>
      <Footer/>
    </Provider>
  )
}