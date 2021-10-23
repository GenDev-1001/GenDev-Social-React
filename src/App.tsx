import React from "react";
import './App.css';
import 'antd/dist/antd.css';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {BrowserRouter, Link, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {UsersPage} from "./components/Users/UsersContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store, {AppStateType} from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import {LoginPage} from "./components/login/Login";
import {Breadcrumb, Layout, Menu} from "antd";
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import {Header} from "./components/Header/Header";
import FrendsContainer from "./components/Navigation/Frends/FrendsContainer";

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const ChatPage = React.lazy(() => import('./components/pages/Chat/ChatPage'))

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    initializeApp: () => void
}

const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedChat = withSuspense(ChatPage);


class App extends React.Component<MapPropsType & DispatchPropsType> {
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('Some error occured');
        // console.error(promiseRejectionsEvent)
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <Layout>

                <Header/>

                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                // defaultSelectedKeys={['2']}
                                // defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >

                                <SubMenu key="sub1" icon={<UserOutlined />} title="My Profile">
                                    <Menu.Item key="1"><Link to='/profile' >Profile</Link></Menu.Item>
                                    <Menu.Item key="2" ><Link to='/dialogs' >Messages</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to='/music' >My music</Link></Menu.Item>
                                    <Menu.Item key="4"><Link to='/news' >News</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Developers">
                                    <Menu.Item key="5"><Link to='/developers'>Developers</Link></Menu.Item>
                                    <Menu.Item key="6"><Link to='/settings'>Settings</Link></Menu.Item>
                                    {/*<Menu.Item key="7">option7</Menu.Item>*/}
                                    {/*<Menu.Item key="8">option8</Menu.Item>*/}
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined />} title="Chat">
                                    <Menu.Item key="9"><Link to='/chat'>Developers chat</Link></Menu.Item>
                                    {/*<Menu.Item key="10">option10</Menu.Item>*/}
                                    {/*<Menu.Item key="11">option11</Menu.Item>*/}
                                    {/*<Menu.Item key="12">option12</Menu.Item>*/}
                                </SubMenu>

                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Switch>
                                <Route exact path="/" render={() => <Redirect to={"/profile"}/>}/>
                                <Route path="/profile/:userId?" render={() => <SuspendedProfile/>}/>
                                <Route path="/dialogs" render={() => <SuspendedDialogs/>}/>
                                <Route path="/news" render={() => <News/>}/>
                                <Route path="/music" render={() => <Music/>}/>
                                <Route path="/settings" render={() => <Settings/>}/>
                                <Route path="/developers" render={() => <UsersPage pageTitle={'Users'}/>}/>
                                <Route path="/login" render={() => <LoginPage/>}/>
                                <Route path="/chat" render={() => <div><SuspendedChat/></div>}/>
                                <Route path="*" render={() => <div>ERROR 404 NOT FOUND</div>}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Gendev ©2021 Created by 1613</Footer>
            </Layout>


            /*<div className='app-wrapper'>
                <HeaderContainer/>
                <Navigation/>
                <div className='app-wrapper-content'>

                </div>
            </div>*/
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized,
    }
}

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);


const SamuraiJSApp: React.FC = () => {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;