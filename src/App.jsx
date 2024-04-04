import HeaderBg from './Header.jsx'
import Cards from './Cards.jsx'
import TopCompanies from './TopCompanies.jsx'
import BitsAreBetter from './BitsAreBetter.jsx'
import Reviews from './Reviews.jsx'
import ShopByCategory from './ShopByCategory.jsx'
import BottomCompanies from './BottomCompanies.jsx'
import FAQs from './FAQs.jsx'

export default function App() {
  return (
    <>
      <Main>
        <HeaderBg />
        <MainContent />
      </Main>
      <TopCompanies />
      <Cards/>
      <BitsAreBetter/>
      <Reviews/>
      <ShopByCategory/>
      <BottomCompanies/>
      <FAQs/>
    </>
  )
}

const Main = ({ children }) => <main>{children}</main>

const MainContent = () => {
  return (
    <div className='mainContent'>
      <h1>A better way to brush your teeth.</h1>
      <p>Toothpaste Bits without the plastic tubes or harsh chemicals that <i>actually</i> work.</p>
      <button className='button'>SHOP NOW</button>
    </div>
  )
}
