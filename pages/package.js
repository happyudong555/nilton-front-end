import React, { PureComponent } from 'react'
import axios from 'axios'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { Icon, Col, Input, Card } from 'antd'
const Navbar = dynamic(import('../components/desktop/navbar'), { ssr: false });
const Footer = dynamic(import('../components/desktop/footer'), { ssr: false });
const storageAPI = 'https://nilton.sgp1.digitaloceanspaces.com/content';
const webURL = 'https://admin.niltontravel.com';
const {Search} = Input;
export default class Store extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            service: [],
            search: ''
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
    searchBox = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    render() {
        const sightSeeing = () => {
            const findSight = this.state.service.map(item => item).filter(type => type.service === "sight seeing tours");
            const findSeeing = findSight.filter((item) => item.title.indexOf(this.state.search) !== -1);
            if (findSight.length === 0) {
                return (
                    <div className="clearfix">

                    </div>
                )
            }
            else {
                return (
                    <div>
                        <Head>
                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                            <meta property="og:description" content="ตัวแทนจำหน่ายขาย ตั๋วเครื่องบินราคาถูก ราคาเที่ยวบินภายในประเทศ และ ระหว่างประเทศ" />
                            <meta name="keywords" content="จอง ตั๋ว เครื่องบิน ราคาพิเศษ บินทั่วโลกกับตั๋วเครื่องบินราคาถูก โปรโมชั่นตั๋วเครื่องบินราคาพิเศษ จองตั๋วราคาถูก" />
                            <script type="text/javascript" async src="https://www.googletagmanager.com/gtag/js?id=UA-149583162-1"></script>
                            <script type="text/javascript" src="../static/js/googleAnalytic.js"></script>
                        </Head>
                        <h1><strong style={{ textTransform: 'capitalize' }}><Icon type="flag" style={{ marginRight: 13 }} />sight seeing tours</strong></h1>
                        <div className="containerService">
                            {
                                findSeeing.map((post) => (
                                    <Col key={post._id} className="toursService" md={{ span: 6 }}>
                                        <Card>
                                            <div className="cover">
                                                <div className="packageImage">
                                                    <img src={`${storageAPI}/${post.image}`} alt={post.title} />
                                                </div>
                                                <h2><strong>{post.title}</strong></h2>
                                                <h4 style={{ fontSize: '1.2rem', color: '#827f7f', fontWeight: 'lighter' }}>
                                                    <Link href={{ pathname: 'detail', query: { id: post._id } }}>{post.content}</Link>
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
        const findInThailand = findToursThailand.filter((item) => item.title.indexOf(this.state.search) !== -1);
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
                                findInThailand.map((tours) => (
                                    <Col key={tours._id} className="tourThailand" md={{ span: 6 }}>
                                        <Card>
                                            <div className="cover">
                                                <div className="packageImage">
                                                    <img src={`${storageAPI}/${tours.image}`} alt={tours.title} />
                                                </div>
                                                <h2><strong>{tours.title}</strong></h2>
                                                <h4 style={{ fontSize: '1.2rem', color: '#777373', fontWeight: 'lighter' }}>
                                                    <Link style={{ color: '#827f7f' }} href={{ pathname: 'detail', query: { id: tours._id } }}>{tours.content}</Link>
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
        const findTickets = findAirTicket.filter((item) => item.title.indexOf(this.state.search) !== -1);
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
                                findTickets.map((tours) => (
                                    <Col key={tours._id} className="tourThailand" md={{ span: 6 }}>
                                        <Card>
                                            <div className="cover">
                                                <div className="tourImage">
                                                    <img src={`${storageAPI}/${tours.image}`} alt={tours.title} />
                                                </div>
                                                <h2><strong>{tours.title}</strong></h2>
                                                <div>
                                                    <h3 style={{ fontWeight: 'bold', color: '#2b2766', textTransform: 'capitalize', fontSize: 14 }}>airlines : <span style={{ color: '#635e5e' }}>{tours.airlines}</span></h3>
                                                </div>
                                                <h4 style={{ fontSize: '1.2rem', color: '#777373', fontWeight: 'lighter' }}>
                                                    <Link style={{ color: '#827f7f' }} href={{ pathname: 'detail', query: { id: tours._id } }}>{tours.content}</Link>
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
        const find_Blog = this.state.service.filter((item) => item.title.indexOf(this.state.search) !== -1);
        const allItem = () => {
            return (
                <div style={{ paddingTop: 25 }} className="clearfix">
                    <h1><strong style={{ textTransform: 'capitalize' }}><Icon type="tags" /> All Deal</strong></h1>
                    <div className="containerService">
                        {
                            find_Blog.map((all) => (
                                <Col key={all._id} className="tourThailand" md={{ span: 6 }}>
                                    <Card>
                                        <div className="cover">
                                            <div className="AllpackageImage">
                                                <img src={`${storageAPI}/${all.image}`} alt={all.title} />
                                            </div>
                                            <div>
                                                <h2><strong>{all.title}</strong></h2>
                                                <h4 style={{ fontSize: '1.2rem', color: '#777373', fontWeight: 'lighter' }}>
                                                    <Link style={{ color: '#827f7f' }} href={{ pathname: 'detail', query: { id: all._id } }}>{all.content}</Link>
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
        return (
            <React.Fragment>
                <Head>
                    <title>Nilton Travel center</title>
                    <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.0-alpha.3/antd.min.css" />
                    <link href="https://fonts.googleapis.com/css?family=Noto+Serif:400,700&display=swap&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese" rel="stylesheet"/>
                </Head>
                <Navbar />
                <Col className="headerContainer">
                    <div>
                        <div style={{textAlign:'center'}}>
                            <h1 className="headTitle"><strong>Welcome to Nilton travel store</strong></h1>
                            <br />
                            <Search className="searchPackage" size="large" onChange={this.searchBox.bind(this)} type="text" placeholder="Find package..." />
                            
                        </div>
                    </div>
                </Col>
                <div className="storeContainer">
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
                    .headTitle {
                        font-size:2.1rem;
                        font-family: 'Noto Serif', serif !important;
                        text-transform: uppercase;
                        color: #fff;
                        font-weight: bold;
                    }
                    .headerContainer {
                        width: 100%;
                        height: 266px;
                        background-image: url(https://nilton.sgp1.digitaloceanspaces.com/asset/bg.jpg);
                        padding: 50px;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                    .searchPackage {
                        width: 50%;
                        display: block;
                        margin: auto;
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
                        height: 100%;
                        overflow: hidden;
                        object-fit: contain;
                        border-radius: 3px;
                    }
                    a {
                        color: #827f7f !important;
                    }
                    @media screen and (min-width:320px) and (max-width: 420px) {
                        .headerContainer {
                            height: 200px;
                        }
                        .headTitle {
                            font-size: 16.3px;
                        }
                        .searchPackage {
                            width: 100%;
                        }
                    }
                `}
                </style>
            </React.Fragment>
        )
    }
}