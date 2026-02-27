import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/productViewer'
import Showcase from './components/Showcase'
import Performance from './components/Performance'
import Footer from './components/Footer'

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <ProductViewer />
            <Showcase />
            <Performance />
            <Footer />
        </main>
    )
}

export default App