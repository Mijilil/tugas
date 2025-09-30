"use client"
import React, { useState } from "react";

const aplikasiData = [
  { title: "JURNAL MENGAJAR", icon: "📄" },
  { title: "NILAI", icon: "🎒" },
  { title: "AKADEMIK", icon: "📚" },
  { title: "PRESENSI", icon: "📝" },
  { title: "RAPOR", icon: "📑" },
];

const guruChatData = [
  {
    name: "DANIEL Lolo",
    message: "tabe, ada yang liat kunci motor ku?",
    time: "2 hari yang lalu",
    likes: 0,
  },
  {
    name: "ANANDA DZIKMAH AMALIA",
    message: "Keren sekali ini aplikasinya :)",
    time: "2 hari yang lalu",
    likes: 0,
  },
  {
    name: "RISDAYANTI",
    message:
      "malam mingguanaya dengan DIGITS...SEMANGAT untuk kita semua bapak /ibu",
    time: "2 hari yang lalu",
    likes: 0,
  },
  {
    name: "RAODATUL JANNAH",
    message: "",
    time: "",
    likes: 0,
  },
];

export default function DashboardPage() {
  const [jurnalClass, setJurnalClass] = useState("XI RPL 4");
  const [date, setDate] = useState("2025-09-29");
  const [chatInput, setChatInput] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-red-700">📶</span>
          <h1 className="font-bold text-lg text-gray-900">SMK TELKOM MAKASSAR</h1>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 text-gray-700">
            <span className="rounded-full bg-blue-600 text-white w-8 h-8 flex items-center justify-center uppercase">
              O
            </span>
            <span className="font-semibold text-gray-800">Dave</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left Big Column */}
        <div className="col-span-8 space-y-6">
          {/* Jurnal Mengajar */}
          <section className="bg-white shadow rounded p-4 space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <h2 className="text-gray-700 font-semibold flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-3-3v6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Jurnal Mengajar</span>
              </h2>

              <div className="flex space-x-2">
                <select
                  value={jurnalClass}
                  onChange={(e) => setJurnalClass(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 text-sm"
                >
                  <option>XI RPL 4</option>
                  <option>XI RPL 3</option>
                </select>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 text-sm"
                />
              </div>
            </div>

            {/* Status Kehadiran & Status Jurnal */}
            <div className="grid grid-cols-2 divide-x border-t pt-4 text-center text-gray-600 space-x-0 divide-gray-200">
              <div>
                <p className="font-semibold text-gray-800 mb-2">Status Kehadiran</p>
                <div className="flex justify-around text-2xl font-bold text-blue-600">
                  <div>
                    <p>0</p>
                    <p className="text-xs font-normal text-gray-500">Hadir</p>
                  </div>
                  <div>
                    <p>0</p>
                    <p className="text-xs font-normal text-gray-500">Tidak Hadir</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Status Jurnal</p>
                <div className="flex justify-around text-2xl font-bold text-blue-600">
                  <div>
                    <p>0</p>
                    <p className="text-xs font-normal text-gray-500">Belum</p>
                  </div>
                  <div>
                    <p>0</p>
                    <p className="text-xs font-normal text-gray-500">Draft</p>
                  </div>
                  <div>
                    <p>0</p>
                    <p className="text-xs font-normal text-gray-500">Simpan</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Aplikasi */}
          <section className="bg-white shadow rounded p-6">
            <h2 className="font-semibold text-gray-700 mb-6 flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-3-3v6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Aplikasi</span>
            </h2>
            <div className="flex justify-center space-x-10 text-center text-gray-700">
              {aplikasiData.map(({ title, icon }) => (
                <div
                  key={title}
                  className="flex flex-col items-center space-y-2 cursor-pointer hover:text-blue-600 transition"
                >
                  <div className="bg-blue-900 text-white rounded-md w-14 h-14 flex items-center justify-center text-2xl">
                    {icon}
                  </div>
                  <p className="text-xs font-bold">{title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Jadwal Mengajar Hari Ini */}
          <section className="bg-white shadow rounded p-4 space-y-3">
            <h2 className="font-semibold text-gray-700 mb-3 flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-3-3v6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Jadwal Mengajar Hari Ini</span>
            </h2>
            <div className="flex items-center space-x-3 text-gray-600">
              <span className="rounded-full bg-blue-200 w-8 h-8 flex items-center justify-center text-blue-700 font-bold">
                O
              </span>
              <div className="flex-1">
                <p className="font-semibold">KONSENTRASI KEAHLIAN RPL - XI - XI RPL 4</p>
                <p className="text-sm text-gray-500">14:00 - 14:45</p>
              </div>
              <span className="bg-orange-500 text-white px-3 py-1 rounded text-xs font-semibold">
                Upcoming
              </span>
            </div>
          </section>

          {/* To Do List */}
          <section className="bg-white shadow rounded p-4 space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-gray-700 flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-3-3v6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>To Do List</span>
              </h2>
              <button className="text-gray-400 hover:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
            <div className="text-gray-500 text-sm">
              {/* Placeholder content */}
              <p>To Do Items here...</p>
            </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-4 flex flex-col space-y-6 h-screen">
          {/* Guru Terbaik */}
          <section className="bg-white shadow rounded p-4 flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-gray-700">Guru Terbaik</h2>
              <p className="text-xs text-gray-400 italic">Belum ada guru terbaik</p>
            </div>
            <div className="w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center text-white font-bold text-xl">
              👩‍🏫
            </div>
          </section>

          {/* News */}
          <section className="bg-white shadow rounded p-4 flex flex-col space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-gray-700 flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-3-3v6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>News</span>
              </h2>

              <button className="text-gray-400 hover:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v16h16" />
                </svg>
              </button>
            </div>
            {/* News Content */}
            <div className="border rounded overflow-hidden">
              <img
                src="https://i.ibb.co/dQVRpXF/aplikasi-cuti-terbaru.png"
                alt="Aplikasi Cuti 3.0"
                className="w-full"
              />
              <div className="p-3">
                <h3 className="font-semibold text-gray-800 text-sm mb-1">Aplikasi CUTI 3.0</h3>
                <p className="text-xs text-gray-600 line-clamp-3">
                  Kami informasikan bahwa Aplikasi CUTI telah diperbarui ke Versi 3.0. Pembaruan ini dilakukan
                  untuk menyesuaikan sistem dengan Kebijakan Cuti...
                </p>
                <p className="text-xs text-gray-400 mt-2">6 hari yang lalu</p>
              </div>
            </div>
          </section>

          {/* Sapa Guru */}
          <section className="bg-white shadow rounded p-4 flex flex-col flex-grow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-gray-700 flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-3-3v6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Sapa Guru</span>
              </h2>

              <button title="Refresh" className="text-gray-400 hover:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4v5h.582M20 20v-5h-.581m0 0a7 7 0 11-6.874-6.874"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 space-y-4">
              {guruChatData.map(({ name, message, time, likes }, idx) => (
                <div key={idx} className="bg-gray-100 p-3 rounded shadow-sm">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="bg-blue-600 text-white rounded-full h-7 w-7 flex items-center justify-center text-xs uppercase font-semibold">
                      {name.charAt(0)}
                    </div>
                    <span className="font-semibold text-gray-700 text-sm">{name}</span>
                  </div>
                  <p className="text-gray-600 text-xs mb-1">{message}</p>
                  <div className="flex items-center text-xs text-gray-400 space-x-4">
                    <div className="flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 9l-3 3m0 0l-3-3m3 3V4m7 16h2a2 2 0 002-2v-5a2 2 0 00-2-2h-2"
                        />
                      </svg>
                      <span>{likes} orang suka</span>
                    </div>
                    <span>{time}</span>
                  </div>
                </div>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Handle sending chat; here only reset field
                setChatInput("");
              }}
              className="mt-4"
            >
              <input
                type="text"
                placeholder="Ketik sesuatu ..."
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
              />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
