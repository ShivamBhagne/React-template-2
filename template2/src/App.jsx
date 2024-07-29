// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navigation from "./Navigation"
import Home from "./Home"
import About from "./About"
import Shop from "./Shop"
import Customer from "./Customer"
import Contact from "./Contact"

function App() {
const home=[{

  class:'card1',
  p:'CYBER MONDAY',
  h3:'Big Sale 50% Off',
  a:'View Collection',
  img:'./play.png',
  path:'./bannerV1-img1.jpg'
},{
  class:'card2',
  p:'NEW ARRIVAL',
  h3:'Pets Accessories',
  a:'View Collection',
  img:'./play.png',
  path:'./bannerV1-img2.jpg'
},{
  class:'card3',
  p:'BLACK FRIDAYS',
  h3:'Sale Up To 70% Off',
  a:'View Collection',
  img:'./play.png',
  path:'./bannerV1-img3.jpg'
}];



const product=[
  {img:'./product1.jpg',name:'Dog harness',dol:'$33'},
  {img:'./product2.jpg',name:'Dog harness',dol:'$33'},
  {img:'./product3.jpg',name:'Dog harness',dol:'$33'},
  {img:'./product4.jpg',name:'Dog harness',dol:'$33'},
  {img:'./product5.jpg',name:'Dog harness',dol:'$33'},
  {img:'./product6.jpg',name:'Dog harness',dol:'$33'},
  {img:'./product7.jpg',name:'Dog harness',dol:'$33'},
  {img:'./product8.jpg',name:'Dog harness',dol:'$33'},
  {img:'./product9.jpg',name:'Dog harness',dol:'$33'},
  {img:'./product10.jpg',name:'Dog harness',dol:'$33'},
  {img:'./product11.jpg',name:'Dog harness',dol:'$33'},
  {img:'./product12.jpg',name:'Dog harness',dol:'$33'}];


  const cust=[
    {h3:'Dogs Body Language',p:'Where Can I Get Some? The new site provides a closer look at our agency – what connects us, what excites us, and ultimately what best represents our culture. We’ve...',btn:'Read More',img:'./blog1.jpg'},
    {h3:'Multi Pets multi Vitamin',p:'Where Can I Get Some? The new site provides a closer look at our agency – what connects us, what excites us, and ultimately what best represents our culture. We’ve...',btn:'Read More',img:'./blog3.jpg'},
    {h3:'Pets Habbits',p:'Where Can I Get Some? The new site provides a closer look at our agency – what connects us, what excites us, and ultimately what best represents our culture. We’ve...',btn:'Read More',img:'./blog2.jpg'},
  ]


  const about=[
    {img:'./ab1.png',p1:'Free Shipping',p2:'Capped at $39 per order'},
    {img:'./ab2.png',p1:'Secure Payment',p2:'Up to 12 months installments'},
    {img:'./ab3.png',p1:'Return Pol',p2:'Shop with confidence'},
    {img:'./ab4.png',p1:'24/7 Support',p2:'Delivered to your door'}]
const nav1=['./icons8-search-50.png','./icons8-person-32.png','./icons8-heart-32.png','./icons8-fast-cart-32.png'];
  return (
    <>
{/* <p class="article-des"></p> */}
    <BrowserRouter>
      <Navigation n1={nav1}/>
      <Routes>
        <Route path="/" element={<Home h1={home}/>}></Route>
        <Route path="/About" element={<About a1={about}/>}></Route>
        <Route path="/Shop" element={<Shop shop1={product}/>}></Route>
        <Route path="/Customer" element={<Customer c1={cust}/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>



      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
