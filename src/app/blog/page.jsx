import React, { useEffect } from "react"; 

export default function BlogPage() {
    console.log("ini buku");
    useEffect(() => {
        window.alert('ini buku');
    }, []);
    return (
        <div className='flex-col'>
            <h1 className="text-2xl font-bold text-center">Blog</h1>
            <p className="text-center">Iki buku</p>
            <img src='/assets/Buku.jpeg' alt="Foto Blog" className="mx-auto my-4" />
        </div>
    );
}