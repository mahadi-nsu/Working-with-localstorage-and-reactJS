import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: []
    };
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
  }

  add() {
    var title = this.refs.title.value;
    if (localStorage.getItem("works") == null) {
      var works = [];
      works.push(title);
      localStorage.setItem("works", JSON.stringify(works));
    } else {
       works = JSON.parse(localStorage.getItem("works"));
      works.push(title);
      localStorage.setItem("works", JSON.stringify(works));
    }

    this.setState({
      works: JSON.parse(localStorage.getItem("works"))
    });
  }

  delete(e){
    // console.log(index);
    var index  =  e.target.getAttribute('data-key');
    // console.log(index);
    var list =  JSON.parse(localStorage.getItem('works'));
    list.splice(index,1);

    this.setState({
      works : list
    });

    localStorage.setItem('works',JSON.stringify(list))
  }

  render() {
    const {works} = this.state;
    console.log(works)
    return (
      <div>
        <h2>TODO USING LOCAL STORAGE</h2>
        <input type="text" placeholder="Enter a title" ref="title" />
        <input type="button" value="Add" onClick={this.add} />

        <ul>
          {works.map(function(work,index){
            return(
              <li key = {index}>
                {work} <input type = "button" value = "x" onClick = {this.delete} data-key = {index}/>
              </li>
            )
          },this)}
        </ul>
      </div>
    );
  }
}

export default App;
