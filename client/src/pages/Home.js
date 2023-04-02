import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import Search from '../components/Search'

const Home = ({ products }) => {
  return (
    <div>
      <div>
        <h2 className="parks-title">Parks</h2>
        <section className="container-grid">
          {products.map((product) => (
            <Link to={`/view/park/${product.id}`} key={product.id}>
              <ParkCard
                image={park.image}
                name={park.name}
                location={park.location}
              />
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
