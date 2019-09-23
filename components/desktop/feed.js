import React from 'react';
import dynamic from 'next/dynamic';
import { Layout } from 'antd';
const Service = dynamic(import('./service'), {ssr:false});
const Slider = dynamic(import('./Slider'), {ssr:false});
const Promo = dynamic(import('./Promo'));
const Award = dynamic(import('./Award'), {ssr: false});
const { Content } = Layout;
const Feed = (props) => {
    return (
        <div>
            <Content>
                <div className="containerSlider">
                    <Slider />
                </div>
                <div className="containerContent clearfix">
                    <Service />
                </div>
                <div className="containerPromo clearfix">
                    <Promo/>
                </div>
                <div className="containerAward clearfix">
                    <Award/>
                </div>
            </Content>
            <style>{`
                .clearfix {
                    clear:both;
                }
                .containerContent {
                    background: #fff;
                    padding: 40px;
                    height: auto;
                }
                .containerPromo, .containerAward {
                    padding: 40px;
                    height: auto;
                }
            `}
            </style>
        </div>
    )
}
export default Feed;