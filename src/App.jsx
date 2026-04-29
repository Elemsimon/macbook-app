import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/productViewer'
import Showcase from './components/Showcase'
import Performance from './components/Performance'
import Footer from './components/Footer'
import Features from './components/Features'
import Highlights from './components/Highlights'

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <ProductViewer />
            <Showcase />
            <Performance />
            <Features />
            <Highlights />
            <Footer />
        </main>
    )
}

export default App