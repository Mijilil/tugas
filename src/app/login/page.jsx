import React from 'react'
import Link from 'next/link'
import { Form } from './Login'

export default function LoginPage() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-slate-100">
      <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-brown rounded-xl space-y-12">
        <h1 className="font-semibold text-2xl">Login</h1>
        <Form />
        <p className="text-center">
          Sudah punya akun?{' '}
          <Link className="text-indigo-500 hover:underline" href="/login">
            Masuk
          </Link>
        </p>
      </div>
    </div>
  )
}