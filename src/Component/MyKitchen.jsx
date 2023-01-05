import React from 'react'
import { Link } from 'react-router-dom'

export default function MyKitchen() {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#F5F5F5', padding: '20px' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#FF0000', textTransform: 'uppercase', margin: '0' }}>
        Welcome to our kitchen
      </h1>
      <p style={{ fontSize: '18px', fontWeight: 'normal', color: '#333333', margin: '20px 0' }}>
        We are excited to share our recipes with you. Browse through our collection of delicious dishes and find something that tickles your taste buds.
      </p>
      <Link to="/myrecipes">
        <button style={{ fontSize: '16px', fontWeight: 'bold', color: '#FFFFFF', backgroundColor: '#FF0000', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
          Explore our recipes
        </button>
      </Link>
    </div>
  )
}
    