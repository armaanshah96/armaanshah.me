import React from "react";
import classes from './App.module.css';
import PageTitle from './components/Title';
import Breadcrumbs from './components/Breadcrumbs';

const App = () => {
  return (
    <div className={classes.App}>
      <Breadcrumbs />
      <PageTitle />
    </div>
  );
}

export default App;
