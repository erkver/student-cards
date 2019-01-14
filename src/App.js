import React, { Component } from 'react';
import Add from "./components/Add"
import { students } from "./Students";
import './App.scss';
import StudentCard from './components/StudentCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: students,
      show: "Home",
      index: 0
    }
  }

  handleDelete = i => {
    const { students } = this.state;
    let copy = students.slice();
    copy.splice(i, 1);
    this.setState({students: copy});
  }

  nextStudent = () => {
    const { index, students } = this.state;
    let num = index
    if(index === students.length - 1) {
      this.setState({index: 0})
    } else {
      this.setState({index: num += 1 })
    }
  }

  previousStudent = () => {
    const { index, students } = this.state;
    let num = index
    if(index === 0) {
      this.setState({index: students.length - 1 })
    } else {
      this.setState({ index: num -= 1 })
    }
  }

  handleSubmit = (e, name, from, funFact, cityOrCountry, indoorsOrOutdoors, travelOrStayHome, topsOrSubway, dogOrCat) => {
    const { students } = this.state;
    e.preventDefault();
    let copy = students.slice();
    copy.push({
      name,
      from,
      funFact,
      cityOrCountry,
      indoorsOrOutdoors,
      travelOrStayHome,
      topsOrSubway,
      dogOrCat
    });
    this.setState({students: copy, show: "Home"});
  }

  handleEdit = (e, name, from, funFact, cityOrCountry, indoorsOrOutdoors, travelOrStayHome, topsOrSubway, dogOrCat) => {
    const { students, index } = this.state;
    e.preventDefault();
    let copy = students.slice();
    copy[index] = {
      name,
      from,
      funFact,
      cityOrCountry,
      indoorsOrOutdoors,
      travelOrStayHome,
      topsOrSubway,
      dogOrCat
    };
    this.setState({ students: copy, show: "Home" });
  }


  render() {
    const { students, show, index } = this.state;
    console.log(this.state);
    return (
      <div className="App">
      <nav>
        <h3 onClick={() => this.setState({show: "Home"})}>Home</h3>
        <h3 onClick={() => this.setState({show: "Add"})}>Add student</h3>
      </nav>
        {show === "Home" ? 
          <>
            <StudentCard
              name={students[index].name}
              from={students[index].from}
              funFact={students[index].funFact}
              cityOrCountry={students[index].cityOrCountry}
              indoorsOrOutdoors={students[index].indoorsOrOutdoors}
              travel={students[index].travel}
              topsOrSubway={students[index].topsOrSubway}
              dogOrCat={students[index].dogOrCat}
              index={index + 1}
              total={students.length}
            />
            <div className="btn-cont">
              <button
                className="nav-btn" 
                onClick={() => this.previousStudent()}>{'< Previous'}</button>
              <div>
                <button onClick={() => this.setState({ show: "Add" })} className="chg-btn">Add</button>
                <button onClick={() => this.setState({show: "Edit"})} className="chg-btn">Edit</button>
                <button onClick={() => this.handleDelete(index)} className="chg-btn">Delete</button>
              </div>
              <button
                className="nav-btn"
                onClick={() => this.nextStudent()}>Next ></button>
            </div>
          </>
          : <Add
              show={show}
              handleSubmit={this.handleSubmit}
              students={students}
              index={index}
              handleEdit={this.handleEdit} 
            />}
      </div>
    );
  }
}

export default App;
