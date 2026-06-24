import { useState } from 'react'

export default function Seller() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [products, setProducts] = useState([])
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '' })

  const handleLogin = () => {
    if (email.includes('@')) setLoggedIn(true)
    else alert('Enter valid email')
  }

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price) return
    setProducts([...products, { 
      id: Date.now(), 
      name: newProduct.name, 
      price: parseFloat(newProduct.price),
      description: newProduct.description,
      status: 'Active',
      sales: 0
    }])
    setNewProduct({ name: '', price: '', description: '' })
  }

  const totalEarnings = products.reduce((sum, p) => sum + (p.price * p.sales), 0)
  const totalSales = products.reduce((sum, p) => sum + p.sales, 0)

  if (!loggedIn) {
    return (
      <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>
        <div style={{background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', width: '400px'}}>
          <h1 style={{marginBottom: '8px', fontSize: '28px'}}>Seller Portal</h1>
          <p style={{color: '#64748b', marginBottom: '30px'}}>Login to manage your store</p>
          <input 
            type="email"
            placeholder="seller@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            style={{width: '100%', padding: '12px', marginBottom: '16px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '15px', outline: 'none'}}
          />
          <button 
            onClick={handleLogin}
            style={{width: '100%', background: '#f5576c', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer'}}
          >
            Login
          </button>
          <p style={{marginTop: '20px', textAlign: 'center'}}><a href="/" style={{color: '#f5576c', textDecoration: 'none'}}>← Back to Home</a></p>
        </div>
      </div>
    )
  }

  return (
    <div style={{minHeight: '100vh', background: '#f8fafc'}}>
      {/* Header */}
      <div style={{background: 'white', borderBottom: '1px solid #e2e8f0', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div>
          <h1 style={{fontSize: '24px', fontWeight: '700'}}>Seller Dashboard</h1>
          <p style={{color: '#64748b', fontSize: '14px'}}>{email}</p>
        </div>
        <button onClick={() => setLoggedIn(false)} style={{background: '#64748b', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600'}}>
          Logout
        </button>
      </div>

      <div style={{padding: '40px', maxWidth: '1400px', margin: '0 auto'}}>
        {/* Stats */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px'}}>
          <div style={{background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
            <p style={{color: '#64748b', fontSize: '14px', marginBottom: '8px'}}>Total Earnings</p>
            <h3 style={{fontSize: '32px', fontWeight: '700'}}>${totalEarnings.toFixed(2)}</h3>
          </div>
          <div style={{background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
            <p style={{color: '#64748b', fontSize: '14px', marginBottom: '8px'}}>Total Sales</p>
            <h3 style={{fontSize: '32px', fontWeight: '700'}}>{totalSales}</h3>
          </div>
          <div style={{background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
            <p style={{color: '#64748b', fontSize: '14px', marginBottom: '8px'}}>Active Products</p>
            <h3 style={{fontSize: '32px', fontWeight: '700'}}>{products.length}</h3>
          </div>
        </div>

        {/* Add Product Form */}
        <div style={{background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '40px'}}>
          <h2 style={{fontSize: '20px', fontWeight: '600', marginBottom: '20px'}}>Add New Product</h2>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px'}}>
            <input 
              placeholder="Product name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
              style={{padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '15px', outline: 'none'}}
            />
            <input 
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
              style={{padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '15px', outline: 'none'}}
            />
          </div>
          <textarea 
            placeholder="Product description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
            style={{width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '15px', outline: 'none', marginBottom: '16px', minHeight: '80px', fontFamily: 'inherit'}}
          />
          <button onClick={addProduct} style={{background: '#f5576c', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '8px', cursor: 'pointer', fontSize: '15px', fontWeight: '600'}}>
            + Add Product
          </button>
        </div>

        {/* Products Grid */}
        <div style={{background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
          <h2 style={{fontSize: '20px', fontWeight: '600', marginBottom: '20px'}}>Your Products</h2>
          {products.length === 0 ? (
            <div style={{textAlign: 'center', padding: '60px 20px', color: '#64748b'}}>
              <p style={{fontSize: '18px'}}>No products yet</p>
              <p>Add your first product above to get started</p>
            </div>
          ) : (
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px'}}>
              {products.map(p => (
                <div key={p.id} style={{border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px'}}>
                  <h3 style={{fontSize: '18px', fontWeight: '600', marginBottom: '8px'}}>{p.name}</h3>
                  <p style={{color: '#64748b', fontSize: '14px', marginBottom: '16px'}}>{p.description || 'No description'}</p>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: '24px', fontWeight: '700', color: '#f5576c'}}>${p.price.toFixed(2)}</span>
                    <button 
                      onClick={() => setProducts(products.filter(x => x.id !== p.id))} 
                      style={{background: '#ef4444', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px'}}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{marginTop: '30px', display: 'flex', gap: '16px'}}>
          <a href="/" style={{color: '#f5576c', textDecoration: 'none', fontWeight: '500'}}>← Home</a>
          <a href="/admin" style={{color: '#f5576c', textDecoration: 'none', fontWeight: '500'}}>Admin Panel →</a>
        </div>
      </div>
    </div>
  )
}