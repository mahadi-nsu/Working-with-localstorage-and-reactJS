import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       works : []
    };
    this.add = this.add.bind(this)
  }

  add()
  {
    var title = this.refs.title.value;
    if(localStorage.getItem('works') == null){
      var works = [];
      works.push(title);
      localStorage.setItem('works',JSON.stringify(works));
    }else{
      var works  = JSON.parse(localStorage.getItem('works'));
      works.push(title);
      localStorage.setItem('works',JSON.stringify(works));
    }


    this.setState({
      works : JSON.parse(localStorage.getItem('works'))
    })
  }

  render() {
    console.log(this.state.works)
    return (
      <div>
        <h2>TODO USING LOCAL STORAGE</h2>
        <input type="text" placeholder="Enter a title" ref="title" />
        <input type="button" value = "Add" onClick = {this.add}/>
      </div>
    );
  }
}

export default App;
