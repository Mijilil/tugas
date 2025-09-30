'use client';

export default function RegisterPage() {
  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', padding: '20px', border: '2px solid #1e90ff', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', fontWeight: 'bold', color: '#1e90ff' }}>Registrasi</h2>
      <form>
        <div style={{ marginBottom: '10px' }}>
          <label>Nama:</label><br />
          <input type="text" style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label><br />
          <input type="email" style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label><br />
          <input type="password" style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#1e90ff',
              color: 'white',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: 'bold',
              border: 'none'
            }}
          >
            Daftar
          </button>
        </div>
      </form>
    </div>
  );
}