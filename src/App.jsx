import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import BucketList from './pages/bucketList/BucketList';
import Home from './pages/home/Home';
import Map from './pages/map/Map';
import AddBoulder from './pages/addBoulder/AddBoulder';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/bucketList'>
                <BucketList />
            </Route>
            <Route path='/map'>
                <Map />
            </Route>
            <Route path='/addBoulder'>
                <AddBoulder />
            </Route>
        </Router>
    );
};

export default App;