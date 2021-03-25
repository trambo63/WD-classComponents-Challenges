import React, { Component } from "react";

export default class DogIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "",
        };
    }

    fetchDog() {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => 
            this.setState({
                img: data.message,
            })
        );
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={() => this.fetchDog()}>Dog Pic</button>
                </div>
                <div>
                    <img src={this.state.img}/>
                </div>
            </div>
        )
    }
}