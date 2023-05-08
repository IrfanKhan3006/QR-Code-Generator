import React from 'react';
import './App.css';
import PreNavbar from './Components/PreNavbar';
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Slider from "./Components/Slider.jsx"
import data from "./Data/data.json";
import Offers from "./Components/Offers.js"
import Heading from "./Components/Heading.jsx"
import StarProduct from "./Components/StarProduct.jsx"
import HotAccessoriesMenu from "./Components/HotAccessoriesMenu.jsx"
import HotAccessories from "./Components/HotAccessories.jsx"
import ProductReview from "./Components/ProductReview.jsx"
import Videos from "./Components/Videos.jsx"
import Banner from "./Components/Banner.jsx"
import Footer from "./Components/Footer.jsx"
import NavOption from "./Components/NavOption.jsx"

function App() {


  return (
    <Router >
      <PreNavbar />
      <Navbar />
      <NavOption miPhones={data.miPhones} redmiPhones={data.redmiPhones} laptop={data.laptop} tv={data.tv} fitnessAndLifeStyle={data.fitnessAndLifeStyle}
      home={data.home} audio={data.audio} accessories={data.accessories}/>
      <Slider start={data.banner.start} />
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCT" />
      <StarProduct StarProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

        <Routes>
        <Route exact path='/music' element={
        < HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}></Route>
        <Route exact path='/smartDevice' element={
        < HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />}></Route>
        <Route exact path='/Home' element={
        < HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />}></Route>
        <Route exact path='/Lifestyle' element={
        < HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />}></Route>
        <Route exact path='/MobileAccessories' element={
        < HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}></Route>
        </Routes>
      <Heading text="PRODUCT REVIEW" />
      <ProductReview ProductReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos Videos={data.videos}/>
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner}/>

      <Footer footer={data.footer}/>
      
    </Router> 
  );
}
export default App;