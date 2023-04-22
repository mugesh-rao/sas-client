import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Caurosel from '../components/Home/Caurosel'
import FooterData from '../components/Home/FooterData'
import NewsAndEvents from '../components/Home/NewsAndEvents'
import PrincipalDirectorMessage from '../components/Home/PrincipalDirectorMessage'
import Aos from 'aos'

function Home() {
  Aos.init();
  return (
    <>
<Header/>
<div className='mt-24'>

<Caurosel/>
</div>
<NewsAndEvents/>
<div data-aos="fade-down"   data-aos-duration="1000">

<PrincipalDirectorMessage/>
</div>
<div className='mt-6'>
<FooterData/>

</div>

   <Footer/> 
   </>
  )
}

export default Home