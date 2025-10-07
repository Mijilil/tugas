'use client';
import React, { useState } from 'react';

export default function DiskonPage() {
  const [nama, setNama] = useState('');
  const [kategori, setKategori] = useState('');
  const [harga, setHarga] = useState('');
  const [diskon, setDiskon] = useState('');
  const [hasil, setHasil] = useState<null | {
    nama: string;
    kategori: string;
    nilaiDiskon: number;
    total: number;
  }>(null);

  const handleHitung = (e: React.FormEvent) => {
    e.preventDefault();
    const hargaNum = parseFloat(harga);
    const diskonNum = parseFloat(diskon);
    if (isNaN(hargaNum) || isNaN(diskonNum)) return;
    const nilaiDiskon = hargaNum * (diskonNum / 100);
    const total = hargaNum - nilaiDiskon;
    setHasil({
      nama,
      kategori,
      nilaiDiskon,
      total,
    });
  };

  const handleBersih = () => {
    setNama('');
    setKategori('');
    setHarga('');
    setDiskon('');
    setHasil(null);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        marginTop: 50,
      }}
    >
      {/* CARD INPUT */}
      <div
        style={{
          width: 350,
          padding: 24,
          borderRadius: 12,
          boxShadow: '0 2px 8px #ddd',
          background: '#fff',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: 20 }}>
          Input Data Barang
        </h2>
        <form onSubmit={handleHitung}>
          <input
            type="text"
            placeholder="Masukan nama barang"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            style={{
              width: '100%',
              margin: '10px 0',
              padding: 10,
              fontSize: 16,
            }}
            required
          />
          <input
            type="text"
            placeholder="Masukan kategori barang"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            style={{
              width: '100%',
              margin: '10px 0',
              padding: 10,
              fontSize: 16,
            }}
            required
          />
          <input
            type="number"
            placeholder="Masukan harga barang"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            style={{
              width: '100%',
              margin: '10px 0',
              padding: 10,
              fontSize: 16,
            }}
            required
          />
          <input
            type="number"
            placeholder="Masukan diskon barang (%)"
            value={diskon}
            onChange={(e) => setDiskon(e.target.value)}
            style={{
              width: '100%',
              margin: '10px 0',
              padding: 10,
              fontSize: 16,
            }}
            required
          />
          <button
            type="submit"
            style={{
              width: '100%',
              background: 'blue',
              color: '#fff',
              border: 'none',
              padding: '12px 0',
              borderRadius: 6,
              fontWeight: 600,
              fontSize: 16,
              marginBottom: 10,
              cursor: 'pointer',
            }}
          >
            Hitung
          </button>
          <button
            type="button"
            style={{
              width: '100%',
              background: 'brown',
              color: '#fff',
              border: 'none',
              padding: '12px 0',
              borderRadius: 6,
              fontWeight: 600,
              fontSize: 16,
              cursor: 'pointer',
            }}
            onClick={handleBersih}
          >
            Bersih
          </button>
        </form>
      </div>

      {/* CARD HASIL */}
      <div
        style={{
          width: 350,
          padding: 24,
          borderRadius: 12,
          boxShadow: '0 2px 8px #ddd',
          background: '#fff',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: 20 }}>
          Hasil Perhitungan
        </h2>
        {hasil ? (
          <div style={{ textAlign: 'left', lineHeight: 1.8 }}>
            <div>
              Nama Barang: <b>{hasil.nama}</b>
            </div>
            <div>
              Kategori Barang: <b>{hasil.kategori}</b>
            </div>
            <div>
              Nilai Diskon: <b>{hasil.nilaiDiskon.toFixed(2)}</b>
            </div>
            <div>
              Total Harga: <b>{hasil.total.toFixed(2)}</b>
            </div>
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: '#888' }}>
            Belum ada hasil perhitungan.
          </p>
        )}
      </div>
    </div>
  );
}
