import React, { PureComponent } from 'react'
import axios from 'axios'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { Icon, Col, Carousel, Card } from 'antd'
const Navbar = dynamic(import('../components/desktop/navbar'), { ssr: false });
const Footer = dynamic(import('../components/desktop/footer'), { ssr: false });
const storageAPI = 'https://nilton.sgp1.digitaloceanspaces.com/content';
const webURL = 'http://167.71.218.37';
export default class Store extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            service: [],
            sliderItem: [
                {
                    "id": 1,
                    "image": "/static/images/slider_images/1.jpg"
                },
                {
                    "id": 2,
                    "image": "/static/images/slider_images/2.jpg"
                },
                {
                    "id": 3,
                    "image": "/static/images/slider_images/3.jpg"
                },
                {
                    "id": 4,
                    "image": "/static/images/slider_images/4.jpg"
                }
            ]
        }
    }
    componentDidMount() {
        axios.get(`${webURL}/blog`).then((res) => {
            if (res.data === null) {
                this.setState({
                    service: []
                })
            }
            else {
                this.setState({
                    service: res.data
                })
            }
        })
    }
    render() {
        const sightSeeing = () => {
            const findSight = this.state.service.map(item => item).filter(type => type.service === "sight seeing tours");
            if (findSight.length === 0) {
                return (
                    <div className="clearfix">

                    </div>
                )
            }
            else {
                return (
                    <div>
                        <h1><strong style={{ textTransform: 'capitalize' }}><Icon type="flag" style={{ marginRight: 13 }} />sight seeing tours</strong></h1>
                        <div className="containerService">
                            {
                                findSight.map((post) => (
                                    <Col key={post._id} className="toursService" md={{ span: 6 }}>
                                        <Card>
                                            <div className="cover">
                                                <div className="packageImage">
                                                    <img src={`${storageAPI}/${post.image}`} alt={post.title} />
                                                </div>
                                                <h2><strong>{post.title}</strong></h2>
                                                <h4 style={{ fontSize: 13, color: '#827f7f', fontWeight: 'lighter' }}>
                                                    <Link href={{pathname:'detail', query: {id: post._id}}}>{post.content}</Link>
                                                </h4>
                                            </div>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        }
        const findToursThailand = this.state.service.map(item => item).filter(type => type.service === "package tours thailand")
        const packageToursThai = () => {
            if (findToursThailand.length === 0) {
                return (
                    <div className="clearfix">
                    </div>
                )
            }
            else {
                return (
                    <div style={{ paddingTop: 25 }} className="clearfix">
                        <h1><strong style={{ textTransform: 'capitalize' }}><div className="thai_icon" style={{ marginRight: 13 }}></div>Tours Thailand</strong></h1>
                        <div className="containerService">
                            {
                                findToursThailand.map((tours) => (
                                    <Col key={tours._id} className="tourThailand" md={{ span: 6 }}>
                                        <Card>
                                            <div className="cover">
                                                <div className="packageImage">
                                                    <img src={`${storageAPI}/${tours.image}`} alt={tours.title}/>
                                                </div>
                                                <h2><strong>{tours.title}</strong></h2>
                                                <h4 style={{ fontSize: 13, color: '#777373', fontWeight: 'lighter' }}>
                                                    <Link style={{ color: '#827f7f' }} href={{pathname:'detail', query: {id: tours._id}}}>{tours.content}</Link>
                                                </h4>
                                            </div>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        }
        const findAirTicket = this.state.service.map(item => item).filter(type => type.service === "air tickets")
        const airTickets = () => {
            if (findAirTicket.length === 0) {
                return (
                    <div>

                    </div>
                )
            }
            else {
                return (
                    <div style={{ paddingTop: 25 }} className="clearfix">
                        <h1><strong style={{ textTransform: 'capitalize' }}><div className="tavelIcon" style={{ marginRight: 13 }}></div>Air Tickets</strong></h1>
                        <div className="containerService">
                            {
                                findAirTicket.map((tours) => (
                                    <Col key={tours._id} className="tourThailand" md={{ span: 6 }}>
                                        <Card>
                                            <div className="cover">
                                                <div className="tourImage">
                                                    <img src={`${storageAPI}/${tours.image}`} alt={tours.title}/>
                                                </div>
                                                <h2><strong>{tours.title}</strong></h2>
                                                <div>
                                                    <h3 style={{ fontWeight: 'bold', color: '#2b2766', textTransform: 'capitalize', fontSize: 14 }}>airlines : <span style={{ color: '#635e5e' }}>{tours.airlines}</span></h3>
                                                </div>
                                                <h4 style={{ fontSize: 13, color: '#777373', fontWeight: 'lighter' }}>
                                                    <Link style={{ color: '#827f7f' }} href={{pathname:'detail', query: {id: tours._id}}}>{tours.content}</Link>
                                                </h4>
                                            </div>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        }
        const allItem = () => {
            return (
                <div style={{ paddingTop: 25 }} className="clearfix">
                    <h1><strong style={{ textTransform: 'capitalize' }}><Icon type="tags" /> All Deal</strong></h1>
                    <div className="containerService">
                        {
                            this.state.service.map((all) => (
                                <Col key={all._id} className="tourThailand" md={{ span: 6 }}>
                                    <Card>
                                        <div className="cover">
                                            <div className="AllpackageImage">
                                                <img src={`${storageAPI}/${all.image}`} alt={all.title}/>
                                            </div>
                                            <div>
                                                <h2><strong>{all.title}</strong></h2>
                                                <h4 style={{ fontSize: 13, color: '#777373', fontWeight: 'lighter' }}>
                                                    <Link style={{ color: '#827f7f' }} href={{pathname:'detail', query: {id: all._id}}}>{all.content}</Link>
                                                </h4>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            ))
                        }
                    </div>
                </div>
            )
        }
        const deal = Object.values(this.state.service).slice(0, 4);
        return (
            <React.Fragment>
                <Head>
                    <title>Nilton Travel center</title>
                    <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.0-alpha.3/antd.min.css" />
                </Head>
                <Navbar />
                <div className="storeContainer">
                    <Col className="CarouselContainer" md={{ span: 12 }}>
                        <Carousel autoplay>
                            {
                                this.state.sliderItem.map((list) => (
                                    <div key={list._id}>
                                        <img src={list.image} alt={list.title}/>
                                    </div>
                                ))
                            }
                        </Carousel>
                    </Col>
                    <Col className="hot_dealContainer" md={{ span: 12 }}>
                        <div className="listDeal">
                            <h2 className="dealTitle">
                                <Icon style={{ fontSize: 30 }} type="fire" /> Promotion
                            </h2>
                            {
                                !this.state.loading && deal.map((deal) => (
                                    <div key={deal._id} className="dealImage">
                                        <div className="hotCover">
                                            <img src={`${storageAPI}/${deal.image}`} alt={deal.title}/>
                                        </div>
                                        <div className="hotDetail">
                                            <h3>{deal.title}</h3>
                                            <p><Link style={{ color: '#827f7f' }} href={{pathname:'detail', query: {id: deal._id}}}>{deal.content}</Link></p>
                                            <h5 className="dateDeal">{deal.date}</h5>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </Col>
                    <div className="clearfix">
                        {
                            sightSeeing()
                        }
                        {
                            packageToursThai()
                        }
                        {
                            airTickets()
                        }
                        {
                            allItem()
                        }
                    </div>
                </div>
                <Footer />
                <style>{`
                    .clearfix {
                        clear:both;
                    }
                    .thai_icon {
                        width: 28px;
                        height: 28px;
                        background-image: url(../static/icon/thai_flag.svg);
                        float:left;
                    }
                    .tavelIcon {
                        width: 28px;
                        height: 28px;
                        background-image: url(../static/icon/travel_icon.svg);
                        float:left;
                    }
                    .storeContainer {
                        padding: 50px;
                    }
                    .toursService, .tourThailand {
                        margin-right: 33px;
                        margin-bottom: 33px;
                    }
                    .packageImage, .AllpackageImage {
                        width: 100%;
                        height: 200px;
                        overflow:hidden;
                    }
                    .packageImage img {
                        width: 100%;
                        height: 100%;
                        object-fit:cover;
                        border-radius: 3px;
                    }
                    .cover h2 {
                        padding-top: 13px;
                        text-transform: capitalize;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .cover h4 {
                        height: 90px;
                        overflow:hidden;
                        font-family: sukhumvit set, kanit !important;
                        font-weight: 400 !important;
                        line-height: 25px;
                    }
                    .containerService {
                        margin-top: 25px;
                    }
                    .containerService .ant-card-body {
                        padding: 0;
                    }
                    .containerService .ant-card-bordered{
                        border: 0;
                    }
                    .CarouselContainer {
                        margin-bottom:30px;
                    }
                    .ant-carousel .slick-slide img {
                        width: 100%;
                    }
                    .ant-carousel .slick-slide {
                        text-align: center;
                        height: 340px;
                        background: transparent;
                        overflow: hidden;
                      }
                      
                    .ant-carousel .slick-slide h3 {
                        color: #fff;
                    }
                    .hot_dealContainer {
                        background-color: #fff;
                        height: 340px;
                        overflow: hidden;
                        overflow-y: auto;
                    }
                    .listDeal {
                        padding: 40px;
                        padding-top: 0;
                        padding-bottom: 0;
                    }
                    .dealTitle {
                        font-weight: bold;
                        padding-bottom: 15px;
                        border-bottom: 1px solid #f3f1f1;
                    }
                    .dealImage {
                        width: 100%;
                        padding-top:15px;
                        margin-bottom: 35px;
                    }
                    .hotCover{
                        height: 100px;
                        float: left;
                        overflow: hidden;
                    }
                    .hotCover img {
                        width: 180px;
                        height: 100%;
                        background-color: transparent;
                        border-radius: 4px;
                        object-fit: cover;
                    }
                    .hotDetail h3 {
                        position: relative;
                        left: 20px;
                        font-weight: bold;
                        text-transform: capitalize;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .hotDetail p{
                        position: relative;
                        left: 20px;
                        height: 40px;
                        overflow: hidden;
                    }
                    .dateDeal {
                        position: relative;
                        left: 20px;
                        text-transform: capitalize;
                        color: #aea8a8;
                    }
                    .tourImage {
                        width: 100%;
                        height: 200px;
                        overflow: hidden;
                    }
                    .tourImage img {
                        width: 100%;
                        height: 100%;
                        object-fit:cover;
                        overflow: hidden;
                    }
                    .AllpackageImage img {
                        width: 100%;
                        height: auto;
                        overflow: hidden;
                        object-fit: contain;
                        border-radius: 3px;
                    }
                    a {
                        color: #827f7f !important;
                    }
                `}
                </style>
            </React.Fragment>
        )
    }
}