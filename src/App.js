import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewsContainer from './components/NewsContainer'


export class App extends Component {
 

  render() {
    return (
      <div>
         <Navbar />
         <NewsContainer />
      </div>
    )
  }
}

export default App;
