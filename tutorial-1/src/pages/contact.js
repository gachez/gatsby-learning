import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from '../components/layout'

export default () => (
<Layout>
<div style={{ color: `coral` }}>
    <Link 
    style={{
        fontSize: '25px',
        fontWeight: 'bold',
        color: 'coral',
        marginBottom: '2rem'
    }}
    to="/">Home</Link>
    <p>Send us a message!</p>
    <p>music@gmail.com</p>
  </div>
</Layout>

)