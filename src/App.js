import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Notes from './notes';

class App extends Component {
  constructor(){
    super()
    this.state = {
      count: 0,
    }
  }
  increment = () => {
    // this.setState({
    //   count: this.state.count + 1
    //   })
    this.props.dispatch({type: 'INCREMENT'})
    }

  decrement =() =>{
    // this.setState({
    //   count: this.state.count - 1
    // })
    this.props.dispatch({type: 'DECREMENT'})
  }

  incrementdua = () => {
      this.props.dispatch({type: 'INCREMENTDUA', plus: 2})
  }

  render() {
    console.log(this.props.count)
    return(
      <div className="App">
      <div>
          <Notes/>
          <center>
            <h1></h1>
          </center>
          <button onClick={() => this.decrement()}>
          kurang
          </button>
          <span></span>
          <button onClick={() => this.increment()}>
          tambah
          </button>
          <span></span>
          <button onClick={() => this.incrementdua()}>
          tambah +2
          </button>
      </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(App);
