import React from "react";
import uniqid from "uniqid"

class MySkills extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            skill: {
                text: "",
                id: uniqid()
            },
            skillList: []
        }
    }

    handleChange = (e, index) => {
        const { name, value } = e.target
        let skillList = [...this.state.skillList]
        let item = { ...skillList[index] }
        item[name] = value
        skillList[index] = item
        this.setState({ skillList }) 
    }

    skillRender = () => {
        this.setState({
            skillList: this.state.skillList.concat(this.state.skill),
            skill: {
                text: "",
                id: uniqid()
            }
        })
    }

    skillRemove = (index) => {
        let skillList = [...this.state.skillList]
        skillList.splice(index, 1)
        this.setState({ skillList })
    }

    skillEdit = () => {
        const { skillList } = this.state
        return (
            <div className="skills">
                <h1>Skills</h1>
                <button className="new" onClick={this.skillRender}>+</button>
                {skillList.map((skill, index) => {
                    return (
                        <div key={skill.id} className="talent" >
                            <label htmlFor="text">Skill Name: </label>
                            <input value={skill.text} onChange={e => this.handleChange(e, index)} name="text" id="text" autoComplete="off" placeholder="Skills" />
                            <button className="delSkill" onClick={e => this.skillRemove(e, index)}>❌</button>
                        </div>
                    )
                })}
            </div>
        )
    }

    skillView = () => {
        const { skillList } = this.state
        return (
            <div className="skills">
                <h1>Skills</h1>
                {skillList.map((skill) => {
                    return (
                        <div key={skill.id} className="cvPreview" >
                            <h2>{skill.text}</h2>
                        </div>
                    )
                })}
            </div>
        )
    }



    render() {
        const isEdit = this.props.isEdit
        return (
            (isEdit) ? this.skillEdit() : this.skillView()
        )
    }
}

export default MySkills