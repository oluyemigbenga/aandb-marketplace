import { useState } from 'react'

export default function Seller() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [products, setProducts] = useState([])
  const [newProduct, setNewProduct] = useState({ name: '', price: '' })

  const handleLogin = () => {
    if (email.includes('@')) setLoggedIn(true)
    else alert('Enter valid email')
  }

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price) return
    setProducts([...products, { 
      id: Date.now(), 
      name: newProduct.name, 
      price: parseFloat(newProduct.price)
    }])
    setNewProduct({ name: '', price: '' })
  }

  if (!loggedIn) {
    return (
      <div style={{padding: '40px', fontFamily: 'system-ui', maxWidth: '400px', margin: '100px auto'}}>
        <h1>Seller Login</h1>
        <input 
          type="email"
          placeholder="seller@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '4px'}}
        />
        <button 
          onClick={handleLogin}
          style={{width: '100%', background: '#0070f3', color: 'white', border: 'none', padding: '12px', borderRadius: '4px', cursor: 'pointer'}}
        >
          Login
        </button>
        <p style={{marginTop: '20px'}}><a href="/">← Back to Home</a></p>
      </div>
    )
  }

  return (
    <div style={{padding: '40px', fontFamily: 'system-ui', maxWidth: '1200px', margin: '0 auto'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1>Seller Dashboard</h1>
        <button onClick={() => setLoggedIn(false)} style={{background: '#333', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer'}}>
          Logout
        </button>
      </div>
      <p>Logged in as: {email}</p>

      <h2>Add Product</h2>
      <div style={{display: 'flex', gap: '10px', marginBottom: '30px'}}>
        <input 
          placeholder="Product name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
          style={{padding: '10px', border: '1px solid #ddd', borderRadius: '4px'}}
        />
        <input 
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
          style={{padding: '10px', border: '1px solid #ddd', borderRadius: '4px'}}
        />
        <button onClick={addProduct} style={{background: '#0070f3', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer'}}>
          Add
        </button>
      </div>

      <h2>Your Products: {products.length}</h2>
      {products.map(p => (
        <div key={p.id} style={{border: '1px solid #eee', padding: '10px', margin: '10px 0', borderRadius: '4px', display: 'flex', justifyContent: 'space-between'}}>
          <span>{p.name} - ${p.price.toFixed(2)}</span>
          <button onClick={() => setProducts(products.filter(x => x.id !== p.id))} style={{background: 'red', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer'}}>
            Delete
          </button>
        </div>
      ))}

      <div style={{marginTop: '30px'}}>
        <a href="/" style={{marginRight: '20px'}}>← Home</a>
        <a href="/admin">Admin Panel →</a>
      </div>
    </div>
  )
}