import React,{ Component } from "react";
import "../styles/Add.scss"

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      from: "",
      funFact: "",
      cityOrCountry: "",
      indoorsOrOutdoors: "",
      travelOrStayHome: "",
      topsOrSubway: "",
      dogOrCat: ""
    }
  }

  componentDidMount() {
    const { show, students, index } = this.props;
    if(show === "Edit") {
      this.setState({
        name: students[index].name,
        from: students[index].from,
        funFact: students[index].funFact,
        cityOrCountry: students[index].cityOrCountry,
        indoorsOrOutdoors:students[index].indoorsOrOutdoors,
        travelOrStayHome: students[index].travel,
        topsOrSubway: students[index].topsOrSubway,
        dogOrCat: students[index].dogOrCat})
    }
  }


  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  clearInputs = () => {
    this.setState({
      name: "",
      from: "",
      funFact: "",
      cityOrCountry: "",
      indoorsOrOutdoors: "",
      travelOrStayHome: "",
      topsOrSubway: "",
      dogOrCat: ""})
  }


  render() {
    const { name, from ,funFact, cityOrCountry, indoorsOrOutdoors, travelOrStayHome, topsOrSubway, dogOrCat } = this.state;
    const { handleSubmit, show, handleEdit } = this.props;
    return (
      <form 
        onSubmit={e => {show === "" 
          ? handleSubmit(e, name, from, funFact, cityOrCountry, indoorsOrOutdoors, travelOrStayHome, topsOrSubway, dogOrCat) 
          : handleEdit(e, name, from, funFact, cityOrCountry, indoorsOrOutdoors, travelOrStayHome, topsOrSubway, dogOrCat); this.clearInputs()}}>
        <label style={{"marginTop": "10px"}}>Name:</label>
        <input 
          type="text"
          required
          name="name"
          value={name}
          onChange={e => this.handleChange(e)}
        />
        <label>From:</label>
        <input
          type="text"
          required
          name="from"
          value={from}
          onChange={e => this.handleChange(e)}
        />
        <label>Fun Fact:</label>
        <input
          type="text"
          required
          name="funFact"
          value={funFact}
          onChange={e => this.handleChange(e)}
        />
        <label>City or Country:</label>
        <input
          type="text"
          required
          name="cityOrCountry"
          value={cityOrCountry}
          onChange={e => this.handleChange(e)}
        />
        <label>Indoors or outdoors:</label>
        <input
          type="text"
          required
          name="indoorsOrOutdoors"
          value={indoorsOrOutdoors}
          onChange={e => this.handleChange(e)}
        />
        <label>Travel or stay home:</label>
        <input
          type="text"
          required
          name="travelOrStayHome"
          value={travelOrStayHome}
          onChange={e => this.handleChange(e)}
        />
        <label>Top's or Subway:</label>
        <input
          type="text"
          required
          name="topsOrSubway"
          value={topsOrSubway}
          onChange={e => this.handleChange(e)}
        />
        <label>Cat or dog:</label>
        <input
          type="text"
          required
          name="dogOrCat"
          value={dogOrCat}
          onChange={e => this.handleChange(e)}
        />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Add;