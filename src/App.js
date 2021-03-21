import React, { useState } from 'react';
import classes from './App.module.css';
import PageTitle from './components/Title';
import Breadcrumbs from './components/Breadcrumbs';

const App = () => {
  const [navigationState] = useState({
    path: [],
  });

  return (
    <div className={classes.App}>
      <Breadcrumbs
        navigation={navigationState}
        isHomepage={isHomepage(navigationState.path)}
      />
      <PageTitle
        navigation={navigationState}
        isHomepage={isHomepage(navigationState.path)}
      />
    </div>
  );
};

const isHomepage = (pathArray) => pathArray.length === 0;

export default App;
