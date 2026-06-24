import { useState } from 'react'

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@test.com', role: 'Seller', status: 'Active', joined: '2026-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@test.com', role: 'Buyer', status: 'Active', joined: '2026-02-20' },
    { id: 3, name: 'Mike Johnson', email: 'mike@test.com', role: 'Seller', status: 'Suspended', joined: '2026-03-10' }
  ])

  const stats = {
    totalUsers: 247,
    totalSales: 18420,
    activeListings: 89,
    revenue: 2847
  }

  const handleLogin = () => {
    if (password === 'admin123') setLoggedIn(true)
    else alert('Incorrect password')
  }

  if (!loggedIn) {
    return (
      <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div style={{background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', width: '400px'}}>
          <h1 style={{marginBottom: '8px', fontSize: '28px'}}>A&B Admin</h1>
          <p style={{color: '#64748b', marginBottom: '30px'}}>Enter your credentials to continue</p>
          <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            style={{width: '100%', padding: '12px', marginBottom: '16px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '15px', outline: 'none'}}
          />
          <button 
            onClick={handleLogin}
            style={{width: '100%', background: '#4f46e5', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer'}}
          >
            Login
          </button>
          <p style={{marginTop: '20px', textAlign: 'center'}}><a href="/" style={{color: '#4f46e5', textDecoration: 'none'}}>← Back to Home</a></p>
        </div>
      </div>
    )
  }

  return (
    <div style={{minHeight: '100vh', background: '#f8fafc'}}>
      {/* Header */}
      <div style={{background: 'white', borderBottom: '1px solid #e2e8f0', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div>
          <h1 style={{fontSize: '24px', fontWeight: '700'}}>A&B Admin Dashboard</h1>
          <p style={{color: '#64748b', fontSize: '14px'}}>Manage your marketplace</p>
        </div>
        <button onClick={() => setLoggedIn(false)} style={{background: '#ef4444', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600'}}>
          Logout
        </button>
      </div>

      <div style={{padding: '40px', maxWidth: '1400px', margin: '0 auto'}}>
        {/* Stats Grid */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px'}}>
          <div style={{background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
            <p style={{color: '#64748b', fontSize: '14px', marginBottom: '8px'}}>Total Users</p>
            <h3 style={{fontSize: '32px', fontWeight: '700'}}>{stats.totalUsers}</h3>
          </div>
          <div style={{background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
            <p style={{color: '#64748b', fontSize: '14px', marginBottom: '8px'}}>Total Sales</p>
            <h3 style={{fontSize: '32px', fontWeight: '700'}}>${stats.totalSales.toLocaleString()}</h3>
          </div>
          <div style={{background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
            <p style={{color: '#64748b', fontSize: '14px', marginBottom: '8px'}}>Active Listings</p>
            <h3 style={{fontSize: '32px', fontWeight: '700'}}>{stats.activeListings}</h3>
          </div>
          <div style={{background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
            <p style={{color: '#64748b', fontSize: '14px', marginBottom: '8px'}}>Revenue</p>
            <h3 style={{fontSize: '32px', fontWeight: '700'}}>${stats.revenue.toLocaleString()}</h3>
          </div>
        </div>

        {/* Users Table */}
        <div style={{background: 'white', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden'}}>
          <div style={{padding: '24px', borderBottom: '1px solid #e2e8f0'}}>
            <h2 style={{fontSize: '20px', fontWeight: '600'}}>User Management</h2>
          </div>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead style={{background: '#f8fafc'}}>
              <tr>
                <th style={{textAlign: 'left', padding: '16px 24px', fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase'}}>Name</th>
                <th style={{textAlign: 'left', padding: '16px 24px', fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase'}}>Email</th>
                <th style={{textAlign: 'left', padding: '16px 24px', fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase'}}>Role</th>
                <th style={{textAlign: 'left', padding: '16px 24px', fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase'}}>Status</th>
                <th style={{textAlign: 'left', padding: '16px 24px', fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase'}}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} style={{borderBottom: '1px solid #e2e8f0'}}>
                  <td style={{padding: '16px 24px', fontWeight: '500'}}>{user.name}</td>
                  <td style={{padding: '16px 24px', color: '#64748b'}}>{user.email}</td>
                  <td style={{padding: '16px 24px'}}>
                    <span style={{background: user.role === 'Seller' ? '#dbeafe' : '#dcfce7', color: user.role === 'Seller' ? '#1e40af' : '#166534', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '600'}}>
                      {user.role}
                    </span>
                  </td>
                  <td style={{padding: '16px 24px'}}>
                    <span style={{background: user.status === 'Active' ? '#dcfce7' : '#fee2e2', color: user.status === 'Active' ? '#166534' : '#991b1b', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '600'}}>
                      {user.status}
                    </span>
                  </td>
                  <td style={{padding: '16px 24px'}}>
                    <button 
                      onClick={() => setUsers(users.filter(u => u.id !== user.id))}
                      style={{background: '#ef4444', color: 'white', border: 'none', padding: '6px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '500'}}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{marginTop: '30px', display: 'flex', gap: '16px'}}>
          <a href="/" style={{color: '#4f46e5', textDecoration: 'none', fontWeight: '500'}}>← Home</a>
          <a href="/seller" style={{color: '#4f46e5', textDecoration: 'none', fontWeight: '500'}}>Seller Dashboard →</a>
        </div>
      </div>
    </div>
  )
}