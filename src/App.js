import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import './_app.scss'

const Layout = ({ children }) => {

    const [sidebar, toggleSidebar] = useState(false);

    const handleToggleSidebar = () => toggleSidebar(value => !value);

    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className="app__container">
                <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
                <Container fluid className="app__main">
                    { children }
                </Container>
            </div>
        </>
    )
}

const App = () => {

    return (
        <Router>
            <Switch>
            
                <Route path="/" exact>
                    <Layout>
                        <HomeScreen />
                    </Layout>
                </Route>

                <Route path="/auth">
                    <LoginScreen />
                </Route>

                <Route path="/search">
                    <Layout>
                        <h1>Resultados de búsqueda</h1>
                    </Layout>
                </Route>

                <Route>
                    <Redirect to="/" />
                </Route>

            </Switch>
        </Router>
    )
}

export default App
