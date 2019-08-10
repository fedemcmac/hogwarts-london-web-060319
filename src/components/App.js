import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import TileContainer from "./TileContainer";

class App extends Component {
  state = {
    hogs: hogs
  };

  handleFilter = event => {
    let newHogs = hogs.filter(hog => {
      return hog.greased.toString() === event.target.value;
    });

    this.setState({
      hogs: newHogs
    });
    console.log(newHogs);
  };

  handleSortName = () => {
    let nameSort = this.state.hogs.sort((a, b) => (a.name < b.name) ? -1 : 1);

    console.log(nameSort);

    this.setState({
      hogs: nameSort
    })
   
  };
  handleSortWeight = () => {
    let weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    
    let weightSort = this.state.hogs.sort((a, b) => (a[weight] < b[weight]) ? -1 : 1);

    // console.log(this.state.hogs."weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water");
    
    this.setState({
      hogs: weightSort
    })
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <TileContainer
          handleFilter={this.handleFilter}
          hogs={this.state.hogs}
          handleSortName={this.handleSortName}
          handleSortWeight={this.handleSortWeight}
        />
      </div>
    );
  }
}

export default App;
