import React from 'react';
import People from './components/People';
import './App.css';
import getData from './util/getData.js';

export default class App extends React.Component{

  constructor(props){
    //Below line creates access to what I normally assume is this
    super(props);
    //Any data that can and will change (so we get another render!)
    this.state = {
      about: {},
      loaded: false
    }
  }

  render(){
    //bring in state...
    const {about, loaded} = this.state;

    if(!loaded) return (<div><h1>Loading...</h1></div>);

    return (<div className='App'>
          <h1>Welcome to the iSchool website...</h1>
          <h2>{about.title}</h2>
          <h4>{about.description}</h4>
          <h3>{about.quote}</h3>
          <h3>---{about.quoteAuthor}</h3>
          {/* now we can start loading our components */}
          <hr/>
          {/* I can write a comment! */}
          <People/>
      </div>
      );


  }

  componentDidMount(){
    //Go get the data
    getData('about/')
      .then((json)=>{
        console.log(json);
        this.setState({
          about: json, 
          loaded: true
        })
      });
  }

  //on mounting - 1) constructor 2) getDerivedStateFromProps 3) render 4) componentDidMount

}
