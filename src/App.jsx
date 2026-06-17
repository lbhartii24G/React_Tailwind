import React from 'react'
import Card from './components/card'
import Navbar from './components/navbar'
import Hero from './components/hero'
import FeaturedProduct from './components/featuredProduct'
import ServicesCards from './components/servicesCards'
import ClientFeedback from './components/clientFeedback'
import { Lightbulb, Layers, Waypoints, CircleDot } from "lucide-react"


 

const author_arr = [
    {
        icon: Lightbulb,
        title: "STRATEGIC DESIGN", 
        info: "Design systems crafted with purpose and clarity."
    },
    {
        icon: Layers,
        title: "BRAND EXPERIENCESs", 
        info: "Memorable experiences that build lasting impact."
    },
    {
        icon: Waypoints,
        title:"MOTION & STORYTELLINGs", 
        info: "Visual storytelling that moves audiences."
    },
    {
        icon: CircleDot,
        title: "MOTION & STORYTELLING", 
        info: "Intelligent solutions for the future of brands."
    }

]

const App = () => {
  return (
    <>
    {/* Menu bar */}
    <Navbar />

    {/* Hero Section */}
    <Hero />  

    {/* 4 Card section */}
    <div className="authorCard_wrapper container_wrapper mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {
        author_arr.map(function(data, index){
            return <Card  
                  key = {index}
                  cardtitle={data.title} 
                  cardInfo={data.info} 
                  icon={data.icon}/> 
        })
      }  
    </div>

    {/* Featured Product section */}
    <FeaturedProduct />

    {/* Services Cards */}
    <ServicesCards />

    <ClientFeedback />
     
    </>
  ) 
}

export default App