import React from 'react'
import dynamic from 'next/dynamic';
import Head from 'next/head'
const Navbar = dynamic(import('../components/desktop/navbar'), { ssr: false });
const PartnerList = dynamic(import('../components/desktop/partnerList'),{ ssr: false })
const Partner = () => {
    return (
        <div>
            <Head>
                <title>Nilton Travel center</title>
                <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.0-alpha.3/antd.min.css" />
            </Head>
            <Navbar />
            <div className="clearfix parnerContainer">
                <PartnerList/>
            </div>
            <style>{`
                .clearfix {
                    clear:both;
                }
                .parnerContainer {
                    padding: 50px;
                }
                @media screen and (min-width: 320px) and (max-width:420px) {
                    .parnerContainer {
                        padding:30px;
                    }
                }
            `}</style>
        </div>
    )
}
export default Partner;