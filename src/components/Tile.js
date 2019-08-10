import React, { Component } from "react"

export default class Tile extends Component {
    render() {
        return (
            <div className={"ui eight wide column"}>
                <h1>{this.props.hog.name}</h1>
                <img src={require (`../hog-imgs/${this.props.hog.name.toLowerCase().split(" ").join("_")}.jpg`)} alt="pig" />
            </div>
        )
    }
}
