import { Link, useLocation } from "react-router-dom"


const ProductList = ({products}) => {

  const location = useLocation()

  return (
    <ul>
      {location.pathname === '/search' && <h2>Search results</h2>}
      {location.pathname === '/products' && <h2>Products</h2>}
    {Array.isArray(products) &&
      products.map((product) => (
        <li key={product.id}>
          <img width={250} height={250} src={product.thumbnail} alt={product.title} />
          <h2>Title: {product.title}</h2>
          <p>Rating: {product.rating}</p>
          <p>Category: {product.category}</p>
          <h3>Price: {product.price}</h3>
          <Link state={location} to={`/products/${product.id}`}>See the details</Link>
        </li>
      ))
    }
  </ul>
  )
}

export default ProductList