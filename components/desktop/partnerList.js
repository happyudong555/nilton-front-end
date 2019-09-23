import React from 'react'
import { Col, Row, Card } from 'antd'
const PartnerList = () => {
    return (
        <div>
            <Row gutter={16}>
                <div className="clearfix">
                    <h1>
                        <strong>Partnership by</strong>
                    </h1>
                    <br />
                    <Col style={{ marginBottom: 30 }} md={{ span: 8 }}>
                        <Card>
                            <div className="parnerLogo">
                                <img src={`http://seekvectorlogo.com/wp-content/uploads/2017/12/amadeus-vector-logo.png`} />
                            </div>
                        </Card>
                    </Col>
                    <Col style={{ marginBottom: 30 }} md={{ span: 8 }}>
                        <Card>
                            <div className="parnerLogo">
                                <img src={`https://i1.wp.com/www.tatnews.org/wp-content/uploads/2019/01/TAT-official-logo-2-1.jpg?fit=1000%2C717&ssl=1`} />
                            </div>
                        </Card>
                    </Col>
                    <Col style={{ marginBottom: 30 }} md={{ span: 8 }}>
                        <Card>
                            <div className="parnerLogo">
                                <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/IATAlogo.svg/1200px-IATAlogo.svg.png`} />
                            </div>
                        </Card>
                    </Col>
                    <Col style={{ marginBottom: 30 }} md={{ span: 8 }}>
                        <Card>
                            <div className="parnerLogo">
                                <img src={`https://logolog.org/files/logo/2/sa/sabre-logo_1000.png`} />
                            </div>
                        </Card>
                    </Col>
                    <Col style={{ marginBottom: 30 }} md={{ span: 8 }}>
                        <Card>
                            <div className="parnerLogo">
                                <img src={`https://yt3.ggpht.com/a/AGF-l79o2wg5oh2KtIspcVA3_dSVfappvvDURU3ZEA=s900-c-k-c0xffffffff-no-rj-mo`} />
                            </div>
                        </Card>
                    </Col>
                </div>
            </Row>
            <style>{`
                .clearfix {
                    clear:both;
                }
                .parnerLogo {
                    width: 100%;
                    height: 200px;
                    overflow: hidden;
                }
                .parnerLogo img {
                    width: 100%;
                    height: 100%;
                    object-fit:contain;
                }
            `}</style>
        </div>
    )
}
export default PartnerList;