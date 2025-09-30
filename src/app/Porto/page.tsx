'use client';

import Image from 'next/image';

export default function PortoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#0f2027] text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-16 py-6">
        <div className="text-2xl font-bold">Portfolio</div>
        <ul className="flex gap-10 text-lg font-medium">
          <li><a href="#" className="hover:text-cyan-300">HOME</a></li>
          <li><a href="#" className="hover:text-cyan-300">ABOUT</a></li>
          <li><a href="#" className="hover:text-cyan-300">NEWS</a></li>
          <li><a href="#" className="hover:text-cyan-300">CONTACT</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 px-10 py-32">
        {/* Left Side */}
        <div className="flex-1 flex flex-col gap-6 max-w-xl">
          <div>
            <h2 className="text-3xl font-bold mb-2">Halo saya,</h2>
            <h1 className="text-3xl font-bold text-blue-400 mb-2">Dave Nugroho</h1>
            <h3 className="text-2xl font-bold mb-2">Dari XI FRONTEND</h3>
            <p className="mb-2">Music</p>
          </div>
          {/* Social Circles */}
          <div className="flex gap-6 mb-6">
            {[1, 2, 3, 4].map((_, i) => (
              <span
                key={i}
                className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_16px_2px_rgba(34,211,238,0.5)]"
              ></span>
            ))}
          </div>
          {/* More About Me Button */}
          <button className="bg-cyan-300 text-[#0a192f] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-cyan-400 transition w-fit shadow-[0_0_24px_2px_rgba(34,211,238,0.5)]">
            More About Me
          </button>
        </div>
        {/* Right Side - Foto Profil */}
        <div className="flex-1 flex items-center justify-center">
          <div
            className="rounded-full p-2 bg-gradient-to-tr from-cyan-400 via-cyan-200 to-transparent shadow-2xl"
            style={{ boxShadow: '0 0 40px 4px #22d3ee' }}
          >
            <div className="rounded-full overflow-hidden bg-white">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={320}
                height={320}
                className="object-cover w-80 h-80"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-40"></div>

      {/* About Me Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 px-10 py-32">
        <div className="flex-1 flex items-center justify-center">
          <div
            className="rounded-full p-2 bg-gradient-to-tr from-cyan-400 via-cyan-200 to-transparent shadow-2xl"
            style={{ boxShadow: '0 0 40px 4px #22d3ee' }}
          >
            <div className="rounded-full overflow-hidden bg-white">
              <Image
                src="/about.jpg"
                alt="About"
                width={320}
                height={320}
                className="object-cover w-80 h-80"
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start justify-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-center md:text-left text-lg text-gray-200 max-w-2xl">
            Ya ini saya Dave Nugroho, biasa dipanggil Dave. Saya siswa kelas XI Frontend di Smk Telkom Makassar. Saya suka bermain game, rubik, basket, dan berbagai alat musik.
            Saya juga suka mendengarkan musik terutama musik pop dan rock. Saya juga suka menonton film terutama film action dan komedi. Saya suka belajar hal baru terutama tentang teknologi dan pemrograman.
            Awalnya saya membenci jurusan ini, tetapi lama kelamaan saya belajar untuk mencintai dan tetap konsisten. Sekian dari saya, terima kasih.
          </p>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-40"></div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-10 py-32">
        {/* Card 1 */}
        <div className="bg-[#0a192f] rounded-xl border border-cyan-400 p-8 w-full max-w-md text-center shadow-[0_0_24px_2px_rgba(34,211,238,0.5)]">
          <h3 className="text-2xl font-bold mb-4">Program</h3>
          <p className="mb-6 text-gray-200">
            Belajar untuk mencintai, mencintai untuk belajar jurusan ini walaupun tidak suka.
            Karena pilihan ada di kita ketika mau memulai sesuatu yang baru, kita harus siap menerima risikonya.
            Dan itu yang saya rasakan ketika masuk jurusan ini.
          </p>
          <button className="bg-cyan-300 text-[#0a192f] font-semibold px-8 py-2 rounded-full shadow-lg hover:bg-cyan-400 transition shadow-[0_0_24px_2px_rgba(34,211,238,0.5)]">
            Contact Me
          </button>
        </div>
        {/* Card 2 */}
        <div className="bg-[#0a192f] rounded-xl border border-cyan-400 p-8 w-full max-w-md text-center shadow-[0_0_24px_2px_rgba(34,211,238,0.5)]">
          <h3 className="text-2xl font-bold mb-4">Music</h3>
          <p className="mb-6 text-gray-200">
            Saya bisa bermain gitar, bass, dan keyboard. Saya juga suka menyanyi walaupun suara saya biasa saja.
            Ini berawal sejak kelas 1 SMP, saya penasaran dengan alat musik lalu belajar secara otodidak.
            Syukur saya bisa bermain walaupun belum terlalu mahir. Saya juga suka mendengarkan musik pop dan jazz.
          </p>
          <button className="bg-cyan-300 text-[#0a192f] font-semibold px-8 py-2 rounded-full shadow-lg hover:bg-cyan-400 transition shadow-[0_0_24px_2px_rgba(34,211,238,0.5)]">
            Contact Me
          </button>
        </div>
        {/* Card 3 */}
        <div className="bg-[#0a192f] rounded-xl border border-cyan-400 p-8 w-full max-w-md text-center shadow-[0_0_24px_2px_rgba(34,211,238,0.5)]">
          <h3 className="text-2xl font-bold mb-4">Olahraga</h3>
          <p className="mb-6 text-gray-200">
            Saya suka olahraga terutama basket dan bela diri.
            Dulu mulai dari muaythai, pindah ke taekwondo, bahkan juara 2 tingkat kota.
            Namun karena cedera kaki, saya berhenti taekwondo lalu beralih ke basket.
            Basket bagi saya menyenangkan sekaligus menantang.
          </p>
          <button className="bg-cyan-300 text-[#0a192f] font-semibold px-8 py-2 rounded-full shadow-lg hover:bg-cyan-400 transition shadow-[0_0_24px_2px_rgba(34,211,238,0.5)]">
            Contact Me
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-40"></div>

      {/* Projects Section */}
      <div className="px-10 py-32">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3, 4, 5, 6].map((project, i) => (
            <div
              key={i}
              className="bg-[#0f253a] border border-cyan-400 rounded-xl p-6 shadow-[0_0_24px_2px_rgba(34,211,238,0.5)]"
            >
              <div className="h-40 bg-gray-700 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Project {i + 1}</h3>
              <p className="text-gray-300">
                Singkat saja {i + 1}. gak tau deng.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-40"></div>

      {/* Footer */}
      <footer className="bg-[#08121c] py-12 text-center text-gray-400">
        <p>© 2025 Dave Nugroho | XI Frontend</p>
      </footer>
    </div>
  );
}
