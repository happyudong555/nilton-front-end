import React, { useEffect, useState } from 'react'
import axios from 'axios'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Card, List, Icon, Timeline, Divider } from 'antd'
import { FacebookButton, FacebookCount } from 'react-social'
const Navbar = dynamic(import('../components/desktop/navbar'), { ssr: false });
const RelatedPost = dynamic(import('../components/desktop/relatedPost'), { ssr: false });
const Footer = dynamic(import('../components/desktop/footer'), { ssr: false })
const webURL = 'https://niltontravel.com';
const api = 'http://167.71.218.37';
const storageAPI = 'https://nilton.sgp1.digitaloceanspaces.com/content';
const Index = ({ url: { query: { id } } }) => {
    const [loading, setLoad] = useState(false);
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        axios.get(`${api}/detail/${id}`).then((res) => {
            if (res.data === null) {
                setDetail([]);
            }
            else {
                setDetail(res.data);
            }
        });
    })
    const setAlbums = (albums) => {
        if (Object.values(albums).length === 0) {
            <div>
            </div>
        }
        else {
            return (
                <div className="albumsContainer">
                    <List dataSource={albums} renderItem={albumsSet => (
                        <li key={albumsSet._id} className="albumsLayout">
                            <img src={`${storageAPI}/${albumsSet}`} className="albumsImageSet lazyload" alt={albumsSet} />
                        </li>
                    )} />
                </div>
            )
        }
    }
    // sharing to facebook
    const webTitle = Object.values(detail).map(item => item.title);
    const image = Object.values(detail).map(item => item.image);
    const appId = '133758567104408';
    const URL = `${webURL}/detail?id=${id}`
    const IconFont = Icon.createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });
    return (
        <React.Fragment>
            <Head>
                <title>{webTitle}</title>
                <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.0-alpha.3/antd.min.css" />
                <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Kanit&display=swap" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:url" content={URL} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={webTitle} />
                <meta property="og:description" content="จองโรงแรม รีสอร์ท ที่พัก รับประกันราคาดีที่สุด จองง่ายและรวดเร็ว ราคาพิเศษ" />
                <meta property="og:image" content={`${storageAPI}/${image}`} />
                <meta name="keywords" content="จอง ตั๋ว เครื่องบิน ราคาพิเศษ บินทั่วโลกกับตั๋วเครื่องบินราคาถูก โปรโมชั่นตั๋วเครื่องบินราคาพิเศษ จองตั๋วราคาถูก" />
                <script type="text/javascript" async src="https://www.googletagmanager.com/gtag/js?id=UA-149583162-1"></script>
                <script type="text/javascript" src="../static/js/googleAnalytic.js"></script>
            </Head>
            <div>
                <div className="clearfix">
                    <Navbar />
                </div>
                {
                    !loading && Object.values(detail).map((post) => (
                        <div>
                            <div md={{ span: 12 }} className="mainContent">
                                <Card style={{ padding: 0 }} bordered={false}>
                                    <img className="bg_images" src={`${storageAPI}/${post.image}`} />
                                </Card>
                            </div>
                            <div className="contentContainer clearfix">
                                <div>
                                    <h1>{post.title}</h1>
                                    <p>
                                        {post.content}
                                    </p>
                                </div>
                                <br />
                                <br />
                                <h2><strong>Share content</strong></h2>
                                <div className="facebookShare" style={{ marginTop: 10 }}>
                                    <FacebookButton url={URL} appId={appId}>
                                        <Icon type="facebook" />
                                    </FacebookButton>
                                </div>
                                <br />
                                <br />
                                {<RelatedPost />}
                            </div>
                            <div className="serviceInfo">
                                <Divider orientation="left"><h2><strong>Package Info</strong></h2></Divider>
                                <Timeline>
                                    <Timeline.Item style={{ textTransform: 'capitalize' }}><strong>Airline :</strong> {post.airlines}</Timeline.Item>
                                    <Timeline.Item style={{ textTransform: 'capitalize' }}><strong>Service Types :</strong> {post.service}</Timeline.Item>
                                    <Timeline.Item style={{ textTransform: 'capitalize' }}><strong>Date : </strong> {post.date}</Timeline.Item>
                                    <Timeline.Item style={{ textTransform: 'capitalize' }}><strong>Distribution : </strong> {post.author}</Timeline.Item>
                                </Timeline>
                                <br />
                                {setAlbums(post.albums)}
                            </div>
                        </div>
                    ))
                }
                <div className="clearfix">
                    <Footer />
                </div>
            </div>
            <style>{`
                .clearfix {
                    clear:both;
                }
                .bg_images {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    margin: auto;
                    display: block;
                }
                .contentContainer {
                    padding: 30px;
                    width: 60%;
                    height: auto;
                    margin: auto;
                    margin-top: 0;
                    display: block;
                    float: left;
                }
                .contentContainer h1 {
                    white-space: pre-line;
                    overflow: hidden;
                    font-size: 3rem;
                    font-weight: bold;
                    text-transform: capitalize;
                }
                .contentContainer h3 {
                    color: #868e96;
                    text-transform: capitalize;
                }
                .contentContainer p {
                    font-size: 1.6rem;
                    line-height: 40px;
                    white-space: pre-line;
                    font-family: sukhumvit set, kanit !important;
                    font-weight: 400 !important;
                    padding-top: 13px;
                }
                .contentContainer span {
                    font-size: 20px;
                    margin-bottom:14px;
                }
                .mainContent {
                    width: 100%;
                    height: auto;
                    background-color: #fff;
                }
                .mainContent .ant-card-body {
                    padding: 0;
                }
                .custom-header {
                    overflow: hidden;
                    height: 80px;
                    background-color: #fff;
                    border-bottom: 1px solid #ded6d6;
                }
                .albumsLayout {
                    padding-left: 0;
                    text-decoration: none;
                }
                .albumsImageSet {
                    width: 250px;
                    height: 250px;
                    float: left;
                    object-fit: cover;
                    object-position: center top;
                    overflow: hidden;
                    padding-right: 0;
                    padding-top: 0;
                    padding: 3px;
                }
                .albumsContainer{
                    width: 100%;
                    height: auto;
                    overflow-x: hidden;
                    margin-bottom: 20px;
                }
                .facebookShare button {
                    border: 0;
                    outline: none;
                    background-color: transparent;
                }
                .facebookShare i{
                    cursor: pointer;
                    font-size: 40px;
                }
                .serviceInfo {
                    padding:25px;
                    width: 40%;
                    height: auto;
                    float:left;
                    border-left: 2.2px dashed #f1f1f1;
                }
                @media screen and (min-width: 320px) and (max-width: 420px) {
                    .avatar {
                        display: none;
                    }
                    .logo img {
                        height: 45px;
                    }
                    .custom-header {
                        padding: 20px;
                        padding-top: 0;
                    }
                    .backgroundImages {
                        height: 250px;
                    }
                    .contentContainer {
                        width: 100%;
                        padding-bottom: 0;
                    }
                    .albumsImageSet {
                        width: 155px;
                        height: 155px;
                    }
                    .contentContainer h1 {
                        font-size: 1.8rem;
                    }
                    .contentContainer span {
                        font-size: 17px;
                        margin-bottom:14px;
                    }
                    .serviceInfo {
                        width: 100%;
                        padding-top: 0;
                    }
                }
            `}</style>
        </React.Fragment>
    )
}

export default Index;