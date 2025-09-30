'use client';

import React, { useState } from "react";
import Link from "next/link";

const cards = [
    { src: '/assets/Buku.jpeg', title: 'Buku' },
    { src: '/assets/Tumbler.jpeg', title: 'Tumbler' },
    { src: '/assets/Buku.jpeg', title: 'Buku 2' },
    { src: '/assets/Tumbler.jpeg', title: 'Tumbler 2' },
    { src: '/assets/Buku.jpeg', title: 'Buku 3' },
    { src: '/assets/Tumbler.jpeg', title: 'Tumbler 3' },
    { src: '/assets/Buku.jpeg', title: 'Buku 4' },
    { src: '/assets/Tumbler.jpeg', title: 'Tumbler 4' },
    { src: '/assets/Buku.jpeg', title: 'Buku 5' },
];

export default function CardPage() {
    const [N, setN] = useState(5);

    // jangan ko lupa ini array untuk sidebar
    const sidebarNumbers = Array.from({ length: N }, (_, i) => N - i);

    return (
        <div className="min-h-screen bg-slate-100 flex">
            {/* Sidebar dave */}
            <aside className="w-48 bg-red-400 shadow-md h-screen p-4 flex flex-col gap-4">
                <div className="mb-4">
                    <label className="block mb-1 font-semibold">Jumlah Sidebar (N):</label>

                </div>
                <ul className="space-y-2">
                    {sidebarNumbers.map((num) => (
                        <li key={num}>
                            <span className="font-semibold text-blue-600 bg-black rounded px-2 py-1 block text-center">
                                {num}
                            </span>
                        </li>
                    ))}
                </ul>
            </aside>
            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center py-8">
                <h1 className="text-2xl font-bold text-center mb-8">Card</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
                    {cards.map((card, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-md flex flex-col items-center p-4">
                            <img src={card.src} alt={card.title} className="w-32 h-32 object-cover rounded-lg mb-4" />
                            <p className="font-semibold text-center">{card.title}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}