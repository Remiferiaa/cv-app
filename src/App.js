import React from "react";
import MyInfo from "./Components/personal";
import MySkills from "./Components/skill";
import MyHistory from "./Components/history";
import MyExp from "./Components/experience";
import "./styles/app.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false
    }
  }

  viewChange = (e) => {
    if (e.target.innerText === "Edit Mode") {
      this.setState({
        isEdit: true
      })
    } else {
      this.setState({
        isEdit: false
      })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="viewChange">
          <button className="chg" type="button" onClick={this.viewChange}>Edit Mode</button>
          <button className="chg" type="button" onClick={this.viewChange}>Preview Mode</button>
        </div>
        <div className="cv">
          <MyInfo isEdit={this.state.isEdit} />
          <MySkills isEdit={this.state.isEdit}/>
          <MyExp isEdit={this.state.isEdit} />
          <MyHistory isEdit={this.state.isEdit} />
        </div>
      </div>
    )
  }
}

export default App