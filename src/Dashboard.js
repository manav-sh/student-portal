import React from 'react';
import {Sidebar} from './Sidebar.js';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import './dashboard.css';
import { Default, Activity, Scolarship, About, Profile, Payment } from './DBComponents.js';
const Dashboard = () => {
  let { path, url } = useRouteMatch();

  return <div className="dashboard">
    <Sidebar />
    <div className="modules">
      <Switch>
        <Route exact path={path} component={Default} />
        <Route path={`${path}/activity`} component={Activity} />
        <Route path={`${path}/scolarship`} component={Scolarship} />
        <Route path={`${path}/payment`} component={Payment} />
        <Route path={`${path}/profile`} component={Profile} />
        <Route path={`${path}/about`} component={About} />
      </Switch>
    </div>
  </div>;
};

export default Dashboard;