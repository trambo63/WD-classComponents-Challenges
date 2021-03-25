import React, { Component } from 'react';
import {Input} from 'reactstrap';
 
export default class SearchIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'], input: "", results: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSubmit.bind(this);
    
  }

  handleChange(e) {
    this.setState({input: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.input){
      this.setState({results: [...this.state.things]}) 
    } else if(this.state.things.includes(this.state.input)){
      this.setState({results: [...this.state.results, this.state.input]})
    } else {
      return null
    }
  }
  

  render() {
    return(
      <div>
        <form onSubmit={this.handleSumbit}>
          <Input placeholder='Search Here' type="text" value={this.state.input} onChange={this.handleChange}/>
          <button type="submit" value="Submit">search</button>
        </form>
        <h3><Results results={this.state.results} /></h3>
      </div>
    )
  }
 }

 class Results extends Component {
   render() {
     return(
       <div>
         {this.props.results.map((results) => {
           return <ResultsList results={results} />;
         })}
       </div>
     )
   }
 }
 

 const ResultsList = (props) => {
    return(
      <>
        <p>{props.results}</p>
      </>
    )
 }
 


 
