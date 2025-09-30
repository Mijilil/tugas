'use client';

import React, { useEffect } from "react"; 

export default function BlogPage() {
    console.log("ini buku");
    useEffect(() => {
        window.alert('ini tumbler');
    }, []);
    return (
        <div className='flex-col'>
            <h1 className="text-2xl font-bold text-center">Product</h1>
            <p className="text-center">Iki Tumbler</p>
            <img src='/assets/Tumbler.jpeg' alt="Foto Blog" className="mx-auto my-4" />
        </div>
    );
}