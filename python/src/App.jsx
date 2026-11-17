import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
// import Home from './home'
// import Navbar from './navbar'
// import Footer from './footer'
// import Product from './product'
// import Student from './student'
// import Employe from './employ'
import Card from './cards'
import pizza from './assets/pizza.jpg'
import pizza1 from './assets/pizza1.jpg'
import pizza2 from './assets/pizza2.jpg'

function App() {
  return(
    <div>
      <h1>PIZZA SHOP</h1>
    <div className='shop'>
      <Card pizza={pizza} title="Veg pizza" prize="300"/>
      <Card pizza={pizza1} title="slice pizza" prize="380"/>
      <Card pizza={pizza2} title="chicken pizza" prize="500"/>
      </div>


    </div>
  )
  
    // <div>
    //   <Employe name="deepika" age={21} subject="python" isemployee={true}
    //   skills={["python","java"]} city="hyd"/><br></br>
    //   <Employe  age={22} subject="social" isemployee={true}
    //   skills={["js","social"]} city="gnt"/><br></br>
    //   <Employe name="deepu" age={23} subject="IT" isemployee={true}
    //   skills={["ss","jd"]} city="nellore"/><br></br>
    // </div>
    // <div>
    //   <Student name="deepu" age={21} course="Python" Collage="KHIT"/>
    //   <Student name="sri" age={23} Course="AI" Collage="KITS"/>
    //   <studnet name="mom" age={34} Course="DataScience" Collage="VIT"/>
    // </div>
    
    // <div>
    //   <Product name="Laptop" price={50000}/>
    //   <Product name="Mobile" price={30000}/>
    //   <Product name="Car" Price={1000000}/>
    //   <Product name="Table" price={500}/>
    // </div>
    // <div>
    //   <Home/>
    //   <Navbar/>
    //   <Card/>
    //   <Footer/>

    // </div>
    
    
  
};
   
export default App 