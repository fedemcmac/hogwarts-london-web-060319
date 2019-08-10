import React, { Component } from "react";
import Tile from "./Tile";
import { options } from "sw-toolbox";

export default class TileContainer extends Component {
  render() {
    return (
        <div>
            <div className={"ui grid container"}>
                <select onChange={event => this.props.handleFilter(event)}>
                <option value="All">All</option>
                <option value={true}>Greased</option>
                <option value={false}>Not Greased</option>
                </select>
            </div>
            <div>
                <label>Sort by Name</label>
                <input type="checkbox" onChange={this.props.handleSortName}></input>
                
                <label>Sort by Weight</label>
                <input type="checkbox" onChange={this.props.handleSortWeight}></input>
                
            </div>
            <div>
                {this.props.hogs.map(hog => {
                return <Tile hog={hog} />;
            })}
        </div>
      </div>
    );
  }
}
