import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav } from 'components/Nav';
import { Home } from 'components/Home';
import { List } from 'components/List';


class App extends React.Component {
    render() {
        return (
            <Router>
                <>
                    <Nav />
                    <div className="container">
                        <Route path="/" exact={true} component={Home} />
                        <Route path="/list/" component={List} />
                    </div>
                </>
            </Router>
        );
    }
}

export { App };
