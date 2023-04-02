import { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const ProductDetails = ({ products }) => {
  let { id } = useParams()
  const details = products.find((product) => products.id === id)

  useEffect(() => {}, [products])

  return (
    <div>
      <div>
        <h1>{details?.name}</h1>
      </div>
    </div>
  )
}

export default ProductDetails
