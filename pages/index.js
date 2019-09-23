import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import Head from 'next/head'
const Navbar = dynamic(import('../components/desktop/navbar'), { ssr: false })
const Feed = dynamic(import('../components/desktop/feed'));
const Footer = dynamic(import('../components/desktop/footer'), {ssr: false})
const Index = (props) => {
  return (
    <div>
      <Head>
        <title>Nilton Travel center</title>
        <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.0-alpha.3/antd.min.css" />
      </Head>
      <Navbar />
      <Feed/>
      <Footer/>
    </div>
  )
}
export default Index;