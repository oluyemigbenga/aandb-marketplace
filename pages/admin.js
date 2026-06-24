import { useState } from 'react'

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', role: 'Seller', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'Buyer', status: 'Active' }
  ])

  const handleLogin = () => {
    if (password === 'admin123') setLoggedIn(true) // Change this password!
    else alert('Wrong password')
  }

  if (!loggedIn) {
    return (
      <div style={{padding: '40px', fontFamily: 'system-ui', maxWidth: '400px', margin: '100px auto'}}>
        <h1>Admin Login</h1>
        <p style={{color: '#666'}}>Password hint: admin123</p>
        <input 
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
          style={{width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '4px'}}
        />
        <button 
          onClick={handleLogin}
          style={{width: '100%', background: '#333', color: 'white', border: 'none', padding: '12px', borderRadius: '4px', cursor: 'pointer'}}
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
        <h1>A&B Marketplace Admin</h1>
        <button onClick={() => setLoggedIn(false)} style={{background: '#333', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer'}}>
          Logout
        </button>
      </div>
      <p style={{color: 'green'}}>Site is live ✅</p>
      
      <h2>User Management</h2>
      <table style={{width: '100%', borderCollapse: 'collapse'}}>
        <thead>
          <tr style={{borderBottom: '2px solid #ddd'}}>
            <th style={{textAlign: 'left', padding: '10px'}}>Name</th>
            <th style={{textAlign: 'left', padding: '10px'}}>Role</th>
            <th style={{textAlign: 'left', padding: '10px'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} style={{borderBottom: '1px solid #eee'}}>
              <td style={{padding: '10px'}}>{user.name}</td>
              <td style={{padding: '10px'}}>{user.role}</td>
              <td style={{padding: '10px'}}>
                <button 
                  onClick={() => setUsers(users.filter(u => u.id !== user.id))}
                  style={{background: 'red', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer'}}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{marginTop: '30px'}}>
        <a href="/" style={{marginRight: '20px'}}>← Home</a>
        <a href="/seller">Seller Dashboard →</a>
      </div>
    </div>
  )
}