import React, { Component } from 'react';
 
export default class CatIndex extends Component{
 constructor(props){
   super(props);
   this.state = {
     breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
   }
   
 }
 render() {
  return(
      <div>
        <Cats breeds={this.state.breeds}/>
      </div>
  );
}

}

class Cats extends Component {
  render() {
    return(
      <div>
        {this.props.breeds.map((breeds) => {
          return <CatList cats={breeds} />;
        })}
      </div>
    );
  }
}

const CatList = (props) => {
  return(
    <>
        <p>{props.cats}</p>
    </>
  );
};

