import React from 'react';
import Ujian from './ujian/Ujian/Ujian_544241108'; // Adjusted path

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#0f2027] flex items-center justify-center">
      <div>
        <Ujian />
        {/* Card 1 & 2 di tengah */}
        <div className="flex gap-10 mb-10 justify-center">
          {/* Card 1 */}
          <div className="bg-[#0a192f] rounded-xl border border-cyan-400 p-8 w-full max-w-md text-center shadow-[0_0_24px_2px_rgba(34,211,238,0.5)]">
            <h3 className="text-2xl font-bold mb-4">Program</h3>
            <p className="mb-6 text-gray-200">
              Ini adalah card program ujian. Silakan isi deskripsi program di sini sesuai kebutuhan.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-[#0a192f] rounded-xl border border-cyan-400 p-8 w-full max-w-md text-center shadow-[0_0_24px_2px_rgba(34,211,238,0.5)]">
            <h3 className="text-2xl font-bold mb-4">Latihan</h3>
            <p className="mb-6 text-gray-200">
              Ini adalah card latihan soal. Silakan isi deskripsi latihan di sini sesuai kebutuhan.
            </p>
          </div>
        </div>
        {/* Card 3, 4, 5 */}
        <div className="flex gap-10 items-center justify-center">
          {/* Card 3 */}
          <div className="bg-[#0a192f] rounded-xl border border-cyan-400 p-8 w-full max-w-md text-center mb-4 shadow-[0_0_24px_2px_rgba(34,211,238,0.5)]">
            <h3 className="text-2xl font-bold mb-4">Simulasi</h3>
            <p className="mb-6 text-gray-200">
              Ini adalah card simulasi ujian. Silakan isi deskripsi simulasi di sini sesuai kebutuhan.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-[#0a192f] rounded-xl border border-cyan-400 p-8 w-full max-w-md text-center mb-4 shadow-[0_0_24px_2px_rgba(34,211,238,0.5)]">
            <h3 className="text-2xl font-bold mb-4">Latihan</h3>
            <p className="mb-6 text-gray-200">
              Ini adalah card latihan soal. Silakan isi deskripsi latihan di sini sesuai kebutuhan.
            </p>
          </div>
          {/* Card 5 */}
          <div className="bg-[#0a192f] rounded-xl border border-cyan-400 p-8 w-full max-w-md text-center mb-4 shadow-[0_0_24px_2px_rgba(34,211,238,0.5)]">
            <h3 className="text-2xl font-bold mb-4">Tryout</h3>
            <p className="mb-6 text-gray-200">
              Ini adalah card tryout ujian. Silakan isi deskripsi tryout di sini sesuai kebutuhan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}