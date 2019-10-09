import React from 'react'
import { Row, Col, Card, Icon } from 'antd'
import axios from 'axios'
import Link from 'next/link'
const storageAPI = 'https://nilton.sgp1.digitaloceanspaces.com/content';
const api = 'https://admin.niltontravel.com';
export default class Promo extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            blog: []
        }
    }
    componentDidMount() {
        axios.get(`${api}/blog`).then((res) => {
            if (res.data === null) {
                this.setState({
                    blog: []
                })
                setLoad(false)
            }
            else {
                this.setState({
                    blog: Object.values(res.data).slice(0, 3),
                    loading: true
                })
            }
        })
    }
    render() {
        const {loading, blog} = this.state;
        return (
            <React.Fragment>
                <h1 style={{ color: '#000' }}><strong><Icon type="fire" /> Hot Deal</strong></h1>
                <br />
                <Row gutter={16}>
                    {
                        loading && blog.map((item) => (
                            <Col key={item.id} md={{ span: 6 }}>
                                <div className="thumbnail">
                                    <Card>
                                        <div className="cover">
                                            <img src={`${storageAPI}/${item.image}`} alt={item.image} />
                                        </div>
                                        <h3><strong>{item.title}</strong></h3>
                                        <h5 className="date">Date : {item.date}</h5>
                                        <p style={{fontSize:'1.2rem'}}>
                                            <Link style={{ color: '#827f7f !important' }} href={{ pathname: 'detail', query: { id: item._id } }}>{item.content}</Link>
                                        </p>
                                        <h5 className="author">Service Type : {item.service}</h5>
                                    </Card>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
                <style>{`
                    .cover {
                        width: 100%;
                        height: 200px;
                        overflow:hidden;
                    }
                    .cover img {
                        width: 100%;
                        height: 100%;
                        overflow:hidden;
                        object-fit:cover;
                    }
                    .thumbnail {
                        margin-right: 20px;
                        margin-bottom: 26px;
                    }
                    .thumbnail .ant-card-body {
                        padding: 0;
                    }
                    .thumbnail h3 {
                        font-weight: bold;
                        padding: 20px;
                        width: 100%;
                        text-overflow: ellipsis;
                        text-transform: capitalize;
                        text-decoration: none;
                        white-space: nowrap;
                        overflow: hidden;
                        padding-bottom: 0;
                    }
                    .thumbnail h5 {
                        padding: 20px;
                        padding-top: 0;
                        padding-bottom: 6px;
                        overflow: hidden;
                        text-transform: capitalize;
                        color: #949292;
                    }
                    .thumbnail p {
                        padding: 20px;
                        padding-top: 0;
                        height: 90px;
                        overflow: hidden;
                    }
                    .thumbnail a {
                        color: #827f7f !important;
                    }
                    .author {
                        font-size: 13px;
                        font-weight: bold;
                        color: #000 !important;
                        margin-bottom: 20px;
                    }
                `}
                </style>
            </React.Fragment>
        )
    }
}