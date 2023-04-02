import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
// import Search from '../components/Search'

const Home = ({ products }) => {
  return (
    <div>
      <div>
        <h2 className="product-title">Products</h2>
        <section className="container-grid">
          {products.map((product) => (
            <Link to={`/products/find/${product.id}`} key={product.id}>
              <ProductCard
                name={product.name}
                image={product.image}
                price={product.price}
                // addToBag={addToBag}
              />
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
