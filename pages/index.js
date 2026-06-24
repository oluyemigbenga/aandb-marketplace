export default function Home() {
  return (
    <div style={{padding: '40px', fontFamily: 'system-ui', textAlign: 'center'}}>
      <h1>A&B Marketplace</h1>
      <p style={{fontSize: '18px', color: '#666'}}>Buy and sell anything</p>
      
      <div style={{marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center'}}>
        <a href="/seller" style={{background: '#0070f3', color: 'white', padding: '15px 30px', borderRadius: '8px', textDecoration: 'none'}}>
          Seller Dashboard
        </a>
        <a href="/admin" style={{background: '#333', color: 'white', padding: '15px 30px', borderRadius: '8px', textDecoration: 'none'}}>
          Admin Panel
        </a>
      </div>
    </div>
  )
}