import React from 'react'
import Announcement from '../components/announcement'
import Header from "../components/Header/Header"
import List from "../components/List/List"
import Slidder from "../components/Slidder/Slidder"
import Category from '../components/Category'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import List2 from '../components/list2/List2'
import Footer from '../components/Footer/Footer'
import  "./home.css"
<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>



const Home = () => {
  return (
    <div>
      <Announcement />
        <Header />
        <Slidder />
        <Category />
        <Products />
        <Newsletter />
      <div className="homeContainer">
        <List />
        <List2 />
        <Footer />
      </div>
    </div>
  )
}

export default Home
