import React from 'react'
import { Layout, Row, Col,Icon } from 'antd'
const { Content } = Layout;
export default class Awards extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            awards: [
                {
                    "id": 1,
                    "awardsURL": "/static/images/awards/08.jpg"
                },
                {
                    "id": 2,
                    "awardsURL": "/static/images/awards/03.jpg"
                },
                {
                    "id": 3,
                    "awardsURL": "/static/images/awards/06.jpg"
                },
                {
                    "id": 4,
                    "awardsURL": "/static/images/awards/05.jpg"
                }
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <Content>
                    <div className="awardsContainer">
                        <h1 style={{ color: '#000' }}><strong><Icon type="trophy"/> Achievement</strong></h1>
                        <br />
                        <Row gutter={16}>
                            {
                                this.state.awards.map((list) => (
                                    <Col md={{ span: 6 }}>
                                        <div className="trophy">
                                            <img src={list.awardsURL} />
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                </Content>
                <style>{`
                    .awardsContainer {
                        padding: 0;
                        padding-top: 0;
                        background: #fff;
                    }
                    .trophy img {
                        width: 100%;
                        height: 370px;
                        object-fit: cover;
                        border: 1px solid #eee;
                        margin-bottom: 22px;
                    }
                `}</style>
            </React.Fragment>
        )
    }
}