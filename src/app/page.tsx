import React from 'react'
import Navbar from "../app/components/Navbar"
import Progressor from './components/Progressor'
import ProductList from './components/ProductList'
import Carousel from './components/carousel'
import Banner from './components/Banner'
import Offer from './components/Offer'
import Card from './components/Card'
import Footer from './components/Footer'
import ProductCardGrid from './components/Menuitems'
import Reservation from './components/Reservation'

const App = () => {
  return (
    <div className='bg-gradient-to-r from-black to-slate-700 min-h-screen'>

     <Navbar />
      <Carousel/>
      <Progressor/>
      <ProductList/>
      <Banner/>
      <ProductList/>
      <ProductCardGrid/>
      <Offer/>
      <Card/>
      <Reservation/>
      <Footer/>


    </div>
  )
}

export default App
