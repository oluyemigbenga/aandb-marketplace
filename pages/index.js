export default function Home() {
  return (
    <div style={{minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{textAlign: 'center', color: 'white', padding: '40px'}}>
        <h1 style={{fontSize: '64px', fontWeight: '800', marginBottom: '20px'}}>A&B Marketplace</h1>
        <p style={{fontSize: '24px', marginBottom: '50px', opacity: '0.9'}}>Buy and sell anything, anywhere</p>
        
        <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <a href="/seller" style={{background: 'white', color: '#667eea', padding: '18px 40px', borderRadius: '12px', textDecoration: 'none', fontSize: '18px', fontWeight: '600', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', transition: 'all 0.2s'}}>
            Start Selling
          </a>
          <a href="/admin" style={{background: 'rgba(255,255,255,0.2)', color: 'white', padding: '18px 40px', borderRadius: '12px', textDecoration: 'none', fontSize: '18px', fontWeight: '600', border: '2px solid white'}}>
            Admin Login
          </a>
        </div>
      </div>
    </div>
  )
}