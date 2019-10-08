import React, {useState} from 'react';
import { Layout, Menu, Drawer, Icon } from 'antd';
import Link from 'next/link'
const { Header } = Layout;
const Navbar = (props) => {
    const [loading, setLoad] = useState(false);
    const showDrawer = ()=> {
        setLoad(true)
    }
    const onClose = ()=> {
        setLoad(false)
    }
    return (
        <div>
            <Layout>
                <Header className="custom-header">
                    <div className="logo">
                        <Link href={'/'}><a><img src={`https://nilton.sgp1.digitaloceanspaces.com/static/logo/logo-nilton.png`} /></a></Link>
                    </div>
                    <div className="desktopOnly">
                        <Menu
                            theme="white"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}>
                            <Menu.Item key="1"><Link href={'/'}><a>HOME</a></Link></Menu.Item>
                            <Menu.Item key="2"><Link href={'package'}><a>Package</a></Link></Menu.Item>
                            <Menu.Item key="3"><Link href={'video'}><a>VIDEOS</a></Link></Menu.Item>
                            <Menu.Item key="4"><Link href={'partner'}><a>PARTNERSHIP</a></Link></Menu.Item>
                        </Menu>
                    </div>
                    <div className="mobileOnly">
                            <Icon style={{cursor:'pointer'}} onClick={showDrawer} className="selectMenu" type="align-right" />
                        <Drawer
                            placement="right"
                            closable={false}
                            onClose={onClose}
                            visible={loading}>
                            <div style={{marginBottom:10,textAlign:'center',fontWeight:'bold'}} className="clearfix">
                                <Link href={'/'}><a style={{color:'#3d2e91'}}>HOME</a></Link>
                            </div>
                            <div style={{marginBottom:10,textAlign:'center',fontWeight:'bold'}} className="clearfix">
                                <Link href={'package'}><a style={{color:'#3d2e91'}}>Package</a></Link>
                            </div>
                            <div style={{marginBottom:10,textAlign:'center', fontWeight:'bold'}} className="clearfix">
                                <Link href={'video'}><a style={{color:'#3d2e91'}}>VIDEOS</a></Link>
                            </div>
                            <div style={{marginBottom:10,textAlign:'center', fontWeight:'bold'}} className="clearfix">
                                <Link href={'PARTNERSHIP'}><a style={{color:'#3d2e91'}}>PARTNERSHIP</a></Link>
                            </div>
                        </Drawer>
                    </div>
                </Header>
            </Layout>
            <style>{`
                .clearfix {
                    clear:both;
                }
                .desktopOnly {
                    display: block;
                }
                .mobileOnly {
                    display: none;
                }
                .selectMenu {
                    position: relative;
                    float: right;
                    top: 21px;
                    right: 30px;
                    font-size: 20px;
                    color: #3d2e91;
                    cursor: pointer;
                }
                #components-layout-demo-top .logo {
                    width: 120px;
                    height: 31px;
                    background: rgba(255, 255, 255, 0.2);
                    margin: 16px 24px 16px 0;
                    float: left;
                }
                .ant-menu-horizontal>.ant-menu-item-selected>a {
                    color: #443695 !important;
                }
                .ant-menu-horizontal>.ant-menu-item>a:hover {
                    color: #443695 !important;
                }
                .logo {
                    width: 200px;
                }
                .logo img {
                    width: 100%;
                    float: left;
                    margin-top: 15px;
                    margin-right: 20px;
                }
                .custom-header {
                    background: #fff;
                    margin-bottom: 0;
                }
                .custom-header ul {
                    border-bottom: 0;
                }
                .ant-menu-horizontal>.ant-menu-item-active, .ant-menu-horizontal>.ant-menu-item-open, .ant-menu-horizontal>.ant-menu-item-selected, .ant-menu-horizontal>.ant-menu-item:hover, .ant-menu-horizontal>.ant-menu-submenu-active, .ant-menu-horizontal>.ant-menu-submenu-open, .ant-menu-horizontal>.ant-menu-submenu-selected, .ant-menu-horizontal>.ant-menu-submenu:hover {
                    color: #443695;
                    border-bottom: 2px solid #443695;
                }
                .ant-drawer-content-wrapper {
                    width: 160px !important;
                }
                @media screen and (min-width: 320px) and (max-width: 420px) {
                    .desktopOnly {
                        display: none;
                    }
                    .mobileOnly {
                        display: block;
                    }
                    .custom-header {
                        padding: 0;
                        padding-left: 20px;
                    }
                }
            `}</style>
        </div>
    )
}
export default Navbar;