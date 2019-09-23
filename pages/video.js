import React, { PureComponent } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic';
import { Layout, Row, Col } from 'antd';
const Navbar = dynamic(import('../components/desktop/navbar'), { ssr: false })
const Footer = dynamic(import('../components/desktop/footer'), {ssr: false});
const { Content } = Layout;
export default class Video extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            video: [
                {
                    "id": 1,
                    "videoURL": "https://www.youtube.com/embed/-p_vwENCO_w"
                },
                {
                    "id": 2,
                    "videoURL": "https://www.youtube.com/embed/4i8zYbA8wC8"
                },
                {
                    "id": 3,
                    "videoURL": "https://www.youtube.com/embed/PkxSPUZLGk8"
                },
                {
                    "id": 4,
                    "videoURL": "https://www.youtube.com/embed/_HD7VGYo-GU"
                },
                {
                    "id": 5,
                    "videoURL": "https://www.youtube.com/embed/5Jdr-Bfr_fM"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <Head>
                    <title>Videos | Nilton Travel center</title>
                    <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.0-alpha.3/antd.min.css" />
                </Head>
                <Navbar />
                <Content>
                    <div className="videoContainer">
                        <Row gutter={16}>
                            {
                                this.state.video.map((clip) => (
                                    <Col key={clip.id} md={{ span: 8 }}>
                                        <iframe className="video" src={clip.videoURL} frameborder="0"></iframe>
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                </Content>
                <Footer/>
                <style>{`
                    .videoContainer {
                        padding: 50px;
                        padding-top: 40px;
                        background: #ddd;
                    }
                    .video {
                        width: 100%;
                        height: 250px;
                        margin-bottom:20px;
                    }
                `}
                </style>
            </div>
        )
    }
}