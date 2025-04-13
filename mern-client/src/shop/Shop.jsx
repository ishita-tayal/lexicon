import React, { useEffect, useState } from 'react'

const Shop = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));
    }, [])
    return (
        <div>Shop</div>
    )
}

export default Shop