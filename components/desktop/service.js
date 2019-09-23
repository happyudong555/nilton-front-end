import React, { PureComponent } from 'react';
import axios from 'axios';
import { Row, Col, Card} from 'antd'
export default class Service extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            service: [
                {
                    "id": 1,
                    "title": "sight seeing tours",
                    "imageURl": "/static/images/service/sight_seeing.png"
                },
                {
                    "id": 2,
                    "title": "package tour Thailand",
                    "imageURl": "/static/images/service/package_tours.png"
                },
                {
                    "id": 3,
                    "title": "air tickets",
                    "imageURl": "/static/images/service/all_airline_brands.gif"
                }
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <h1 style={{ color: '#000' }}>
                    <strong><div className="travelIcon"></div> 
                    Our Services
                    </strong>
                </h1>
                <br />
                <Row gutter={16}>
                    {
                        this.state.service.map((item) => (
                            <Col className="card_item" key={item.id} md={{ span: 6 }} style={{ marginBottom: 23 }}>
                                <Card title={<span className="serviceCover"><img src={item.imageURl} alt={item.title} /></span>} bordered={false}>
                                    <h4><strong>{item.title.toUpperCase()}</strong></h4>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
                <style>{`
                    .containerPromo, .containerAward {
                        padding-top: 0 !important;
                    }
                    .card_item {
                        margin-right: 26px;
                        margin-bottom: 26px;
                        border: 0;
                    }
                    .containerContent .ant-card-body {
                        padding: 20px;
                    }
                    .containerContent .ant-card-head {
                        border-bottom: 0;
                    }
                    .containerContent h4 {
                        font-weight: bold;
                        text-align:center;
                    }
                    .serviceCover img {
                        width: 100%;
                        height: 170px;
                        overflow:hidden;
                        object-fit:cover;
                    }
                    .travelIcon {
                        background-image: url(../static/icon/travel_icon.svg);
                        width: 43px;
                        height: 43px;
                        float: left;
                        margin-right: 20px;
                        background-size: cover;
                        background-repeat: no-repeat;
                    }
                    @media screen and (min-width:320px) and (max-width: 420px) {
                        .card_item {
                            margin: 0;
                            padding: 0;
                            border: 2px solid #eee;
                        }
                    }
                `}</style>
            </React.Fragment>
        )
    }
}