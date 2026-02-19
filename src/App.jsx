import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/productViewer'

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <ProductViewer />
        </main>
    )
}

export default App