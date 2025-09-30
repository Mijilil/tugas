'use client'

import React, { useState } from 'react'

export const Form = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('login!')
    }
    return (
        <form onSubmit={onSubmit} className="space-y-12 w-full sm:w-[400px]">
            <div className="grid w-full item-center gap-1.5">
                <label htmlFor="email" >Email</label>
                <input
                    className="w-full bg-gray-200"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    type="email"
                />
            </div>
            <div className="grid w-full item-center gap-1.5">
                <label htmlFor="password">Password</label>
                <input
                    className="w-full bg-gray-200"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    type="password"
                />  
            </div>
            {error && <div>{error}</div>}
            <div className="w-full">
                <button
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors font-semibold"
                    size="lg"
                >
                    Masuk
                </button>
            </div>
        </form>
    )
}