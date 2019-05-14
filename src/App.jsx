import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home';

const App = () => {
    return (
        <BrowserRouter>
            <main className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;