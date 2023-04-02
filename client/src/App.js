import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'

function App() {
  const [products, setProducts] = useState([])

  const GetProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/products')
      console.log(response.data)
      setProducts(response.data)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    GetProducts()
  }, [])

  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route
            path="products/find/:id"
            element={
              <ProductDetails products={products} GetProducts={GetProducts} />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
