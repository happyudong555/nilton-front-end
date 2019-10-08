import React from 'react'
import { Row, Col, Card, Icon } from 'antd'
import axios from 'axios'
const storageAPI = 'https://nilton.sgp1.digitaloceanspaces.com/content';
const api = 'http://167.71.218.37';
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
                                        <p>
                                            {item.content}
                                        </p>
                                        <h5 className="author">POST BY : {item.author}</h5>
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
                    .author {
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