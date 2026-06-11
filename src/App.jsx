import React from 'react'
import Card from './components/card'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import { Lightbulb, Layers, Waypoints, CircleDot } from "lucide-react"

const author_arr = [
    {
        icon: Lightbulb,
        title: "STRATEGIC DESIGN", 
        info: "Design systems crafted with purpose and clarity."
    },
    {
        icon: Layers,
        title: "BRAND EXPERIENCES", 
        info: "Memorable experiences that build lasting impact."
    },
    {
        icon: Waypoints,
        title:"MOTION & STORYTELLING", 
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
    <Navbar />
    <Hero />  
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
    
    </>
  ) 
}

export default App