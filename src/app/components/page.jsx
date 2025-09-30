'use client';

import React from 'react';

const widgets = [
  { color: 'bg-cyan-500', title: 'MESSAGES', value: '1,410', desc: '70% Increase in 30 Days' },
  { color: 'bg-green-500', title: 'BOOKMARKS', value: '410', desc: '70% Increase in 30 Days' },
  { color: 'bg-orange-400', title: 'UPLOADS', value: '13,648', desc: '' },
  { color: 'bg-red-500', title: 'LIKES', value: '93,139', desc: '70% Increase in 30 Days' },
  { color: 'bg-cyan-500', title: 'BOOKMARKS', value: '41,410', desc: '70% Increase in 30 Days' },
  { color: 'bg-green-500', title: 'LIKES', value: '41,410', desc: '70% Increase in 30 Days' },
  { color: 'bg-orange-400', title: 'EVENTS', value: '41,410', desc: '70% Increase in 30 Days' },
  { color: 'bg-red-500', title: 'COMMENTS', value: '41,410', desc: '70% Increase in 30 Days' },
];

const stats = [
  { color: 'bg-cyan-500', value: '150', label: 'New Orders' },
  { color: 'bg-green-500', value: '53%', label: 'Bounce Rate' },
  { color: 'bg-orange-400', value: '44', label: 'User Registrations' },
  { color: 'bg-red-500', value: '65', label: 'Unique Visitors' },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Widgets <span className="text-gray-400 font-normal text-base">Preview page</span></h1>
      {/* Widget Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {widgets.map((w, i) => (
          <div key={i} className={`rounded-lg shadow ${w.color} text-white p-4`}>
            <div className="font-bold">{w.title}</div>
            <div className="text-3xl font-extrabold my-2">{w.value}</div>
            {w.desc && <div className="text-xs">{w.desc}</div>}
          </div>
        ))}
      </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {stats.map((s, i) => (
          <div key={i} className={`rounded-lg shadow ${s.color} text-white p-4 flex flex-col justify-between`}>
            <div className="text-3xl font-extrabold">{s.value}</div>
            <div className="text-sm mt-2">{s.label}</div>
            <div className="text-xs mt-2 text-right opacity-70">More info</div>
          </div>
        ))}
      </div>
      {/* Expandable/Removable/Collapsable Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-4">Expandable</div>
        <div className="bg-white rounded-lg shadow p-4">Removable</div>
        <div className="bg-white rounded-lg shadow p-4">Collapsable</div>
        <div className="bg-white rounded-lg shadow p-4">Loading state</div>
      </div>
      {/* Direct Chat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-4">
            <div className="font-bold mb-2">Direct Chat</div>
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
              <div>
                <div className="font-semibold">Alexander Pierce</div>
                <div className="text-xs text-gray-500">23 Jan 2:00 pm</div>
              </div>
            </div>
            <div className="bg-blue-100 rounded p-2 mb-2 text-sm">Is this template really for free? That's unbelievable!</div>
            <div className="text-right text-xs text-gray-500">You better believe it!</div>
          </div>
        ))}
      </div>
    </div>
  );
}