import React, { Component } from 'react';

import Header from './header';
import Card from './card';

class Home extends Component {
  render() {
    return (
      <div className="home">
        { Header('Mad Libs App', 'Fill out the fields below and click generate to get your unique Mad Libs story!') } 
        <Card /> 
      </div>
    );
  }
}

export default Home;