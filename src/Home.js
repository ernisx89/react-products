import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return <h1><Link to="/products">Products List</Link></h1>
}