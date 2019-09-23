import React, { PureComponent } from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic';
import { Col, Row } from 'antd'
export default class Slider extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            slide: "/static/images/slider_images/undraw_into_the_night_vumi.svg"
        }
    }
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col style={{backgroundImage:`url(${this.state.slide})`}} md={{ span: 12 }} className="box">
                    </Col>
                    <Col md={{ span: 12 }} className="description">
                        <h1>What is Nilton ?</h1>
                        <h3>
                            Nilton Travel Center would like to take this oppotunnity of extending our services and by making all your travel arrangements.
                            we are now offering a complete range of International travel services at our office and we specialisin.
                        </h3>
                    </Col>
                </Row>
                <style>{`
                    .clearfix {
                        clear:both;
                    }
                    .box {
                        height: 500px;
                        background-color: #fff;
                        border-top: 1px solid #efeaeae0;
                        border-bottom: 1px solid #efeaeae0;
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: center;
                    }
                    .description {
                        height: 500px;
                        background-color: #2b2766;
                    }
                    .description h1{
                        padding: 70px;
                        padding-bottom: 0;
                        font-size: 2.4rem;
                        font-weight: bold;
                        color: #fff;
                        text-transform: capitalize;
                    }
                    .description h3 {
                        color: #fff;
                        font-size: 1.3rem;
                        line-height: 35px;
                        font-weight: bold;
                        padding: 70px;
                        padding-top: 0;
                    }
                    @media screen and (min-width: 320px) and (max-width: 420px) {
                        
                        .box {
                            height: 250px;
                        }
                        .description {
                            height: auto;
                        }
                        .description h1 {
                            font-size: 2rem;
                            text-align: center;
                            padding: 30px;
                            margin-bottom: 0;
                            padding-bottom: 10px;
                        }
                        .description h3 {
                            font-size: 1.1rem;
                            padding: 30px;
                            padding-top: 0;
                            font-weight: initial;
                        }
                        .footerContainer {
                            padding:26px;
                        }
                        .footerContainer .ant-col-md-8 {
                            padding: 0 !important;
                        }
                    }
                `}
                </style>
            </React.Fragment>
        )
    }
}