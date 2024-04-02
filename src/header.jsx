export default function HeaderBg() {
    return (
        <>
        <div className='headerBg'>
            <HeaderMain />
        </div>
        </>
    )
}

const HeaderMain = () => {
    return (
        <div className='headerMain'>
            <LeftHeader />
            <HeaderLinks />
            <RightHeader />
        </div>
    )
}

const LeftHeader = () => {
    return (
        <div className='leftHeader'>
            <Hamburger />
            <span className="logo">Bite</span>
        </div>
    )
}

const Hamburger = () => {
    return (
        <div className='hamburger'>
            {/* <div className='hamburgerClose'> */}
            <span></span>
            <span></span>
            <span></span>
            {/* </div> */}

            {/* <div className='hamburgerOpen'>
                <span></span>
                <span></span>
            </div> */}
        </div>
    )
}

const RightHeader = () => {
    return (
        <div className='rightHeader'>
            <svg className='user' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
            <svg className='bag' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" /></svg>
        </div>
    )
}

const HeaderLinks = () => {
    return (
        <div className='headerLinks'>
            <HeaderLink>SHOP</HeaderLink>
            <HeaderLink>ABOUT</HeaderLink>
            <HeaderLink>OUR IMPACT</HeaderLink>
        </div>
    )
}

const HeaderLink = ({ children }) => {
    return (
        <div className='HeaderLink'>
            <a href="">{children}</a>
            <div className='headerLinkHoverLine'></div>
        </div>
    )
}