export default function CompaniesCarousel() {
    return (
        <>
            <Hr />
            <div className='companiesList'>
                <h1>AS SEEN IN</h1>
                <ul>
                    {companiesList.map(company => 
                        <li key={company.id}>
                            <img style={{ height: '23px', autoFit: 'auto'}} src={company.src} />
                        </li>
                    )}
                </ul>
            </div>
            <Hr />
        </>
    )
}

function Hr() {
    return (
        <div style={{ height: '1px', background: 'black' }}></div>
    )
  }

let companiesList = []
for (let i = 1; i < 8; i++) {
    companiesList.push({ id: i, src: `/src/images/companies/${i}.png` })
}