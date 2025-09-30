"use client";
import React, { useState } from "react";

export default function Page() {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Textbox Contoh</h1>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Masukkan teks di sini"
        className="px-4 py-2 border rounded w-64"
      />
      <p className="mt-4">Isi textbox: {text}</p>
    </div>
  );
}