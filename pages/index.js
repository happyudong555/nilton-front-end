import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import Head from 'next/head'
const Navbar = dynamic(import('../components/desktop/navbar'), { ssr: false })
const Feed = dynamic(import('../components/desktop/feed'));
const Footer = dynamic(import('../components/desktop/footer'), { ssr: false })
const Index = (props) => {
  return (
    <div>
      <Head>
        <title>Nilton Travel center</title>
        <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.0-alpha.3/antd.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="https://niltontravel.com/static/images/slider_images/undraw_into_the_night_vumi.svg"/>
        <meta property="og:description" content="ตัวแทนจำหน่ายขาย ตั๋วเครื่องบินราคาถูก ราคาเที่ยวบินภายในประเทศ และ ระหว่างประเทศ" />
        <meta name="keywords" content="จอง ตั๋ว เครื่องบิน ราคาพิเศษ บินทั่วโลกกับตั๋วเครื่องบินราคาถูก โปรโมชั่นตั๋วเครื่องบินราคาพิเศษ จองตั๋วราคาถูก" />
        <script type="text/javascript" async src="https://www.googletagmanager.com/gtag/js?id=UA-149583162-1"></script>
        <script type="text/javascript" src="../static/js/googleAnalytic.js"></script>
      </Head>
      <Navbar />
      <Feed />
      <Footer />
    </div>
  )
}
export default Index;