import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Homepage/Home'
import Contact from './components/Contact/Contact'
import "./App.css"

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </Router>
            </div>
        )
    }
}