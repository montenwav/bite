import HeaderBg from './Header.jsx'
import Cards from './Cards.jsx'
import CompaniesCarousel from './CompaniesCarousel.jsx'

export default function App() {
  return (
    <>
      <Main>
        <HeaderBg />
        <MainContent />
      </Main>
      <CompaniesCarousel />
      <Cards/>
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
