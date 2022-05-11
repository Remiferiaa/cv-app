import React from "react";
import uniqid from "uniqid"

class MyHistory extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            chapter: {
                info: "",
                start: "",
                end: "",
                major: "",
                gpa: "",
                id: uniqid()
            },
            history: []
        }
    }

    handleChange = (e, index) => {
        const { name, value } = e.target
        let history = [...this.state.history]
        let item = { ...history[index] }
        item[name] = value
        history[index] = item
        this.setState({ history })
    }


    eduRender = () => {
        this.setState({
            history: this.state.history.concat(this.state.chapter),
            chapter: {
                info: "",
                start: "",
                end: "",
                major: "",
                gpa: "",
                id: uniqid()
            },
        })
    }

    eduRemove = (index) => {
        let history = [...this.state.history]
        history.splice(index, 1)
        this.setState({ history })
    }

    eduEdit = () => {
        const { history } = this.state
        return (
            <div className="eduExp">
            <h1 >Education</h1>
            <button className="new" onClick={this.eduRender}>+</button>
            {history.map((slot, index) => {
                return (
                    <div key={slot.id} className="newEdu" >
                        <label htmlFor="info">Institution Name: </label>
                        <input value={slot.info} onChange={e => this.handleChange(e, index)} name="info" id="info" autoComplete="off" placeholder="Institution Name" />
                        <label htmlFor="start">Start Date: </label>
                        <input value={slot.start} onChange={e => this.handleChange(e, index)} name="start" id="start" autoComplete="off" placeholder="Start Date" />
                        <label htmlFor="end">End Date: </label>
                        <input value={slot.end} onChange={e => this.handleChange(e, index)} name="end" id="end" autoComplete="off" placeholder="End Date" />
                        <label htmlFor="major">Major: </label>
                        <input value={slot.major} onChange={e => this.handleChange(e, index)} name="major" id="major" autoComplete="off" placeholder="Major" />
                        <label htmlFor="gpa">CGPA: </label>
                        <input value={slot.gpa} onChange={e => this.handleChange(e, index)} name="gpa" id="gpa" autoComplete="off" placeholder="CGPA" />
                        <button type="button" className="del" onClick={e => this.eduRemove(e, index)}>Delete</button>
                    </div>
                )
            })}
        </div>
        )
    }
    
    eduView =() => {
        const { history } = this.state
        return (
            <div className="eduExp">
            <h1>Education</h1>
            {history.map((slot) => {
                return (
                    <div key={slot.id} className="cvPreview" >
                        <h2>{slot.info}</h2>
                        <p>{slot.start} - {slot.end}</p>
                        <p>{slot.major}</p>
                        <p>{slot.gpa}</p>
                    </div>
                )
            })}
        </div>
        )
    }
    render() {
        const isEdit = this.props.isEdit
        return (
            (isEdit) ? this.eduEdit() : this.eduView()
        )
    }
}

export default MyHistory