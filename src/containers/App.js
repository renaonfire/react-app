import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary';

import './App.css';

//class can use contstructor function that can use the state property
class App extends Component {
  constructor() {
    super()
    //state is what can change in the app, virtual dom that uses this state and passes on as props 
    this.state = {
      robots: [],
      //searchfield is blank as the value that we use from searchfield to search for robots is defined in filteredRobots
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => this.setState({robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
   
  }

  render () {
    //this inputs the value into the searchfield that then updates the state and send the new prop to cardlist
    const { robots, searchfield } = this.state
    const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    
    // if robot array lenght is 0 then show loading 
    return !robots.length ? 
     <h1> Loading </h1> :
     (
          <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
              <Scroll>
                <ErrorBoundary>
                  <CardList robots={filteredRobots}/>
                </ErrorBoundary>
              </Scroll>
          </div>  
        )
  }
}
  


export default App;
