import React from 'react'
import { Navbar } from './../components/ui/Navbar';
import { HeroScreen } from './../components/ui/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className="container mt-2">

                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/hero/:heroeId" component={HeroScreen}/>
                    <Route exact path="/dc/" component={DcScreen}/>
                    <Route exact path="/search/" component={SearchScreen}/>
                    <Redirect to="/marvel"/>

                </Switch>


            </div>
        </>
    )
}