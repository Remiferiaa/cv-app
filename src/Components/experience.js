import React from "react";
import uniqid from "uniqid"

class MyExp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            exp: {
                info: "",
                fromDate: "",
                toDate: "",
                descrip: "",
                id: uniqid()
            },
            expList: []
        }
    }

    handleChange = (e, index) => {
        const { name, value } = e.target
        let expList = [...this.state.expList]
        let item = { ...expList[index] }
        item[name] = value
        expList[index] = item
        this.setState({ expList })
    }

    expRender = () => {
        this.setState({
            expList: this.state.expList.concat(this.state.exp),
            exp: {
                info: "",
                fromDate: "",
                toDate: "",
                descrip: "",
                id: uniqid()
            },
        })
    }

    expRemove = (index) => {
        let expList = [...this.state.expList]
        expList.splice(index, 1)
        this.setState({ expList })
    }

    expEdit = () => {
        const { expList } = this.state
        return (
            <div className="workExp">
                <h1 >Work Experience</h1>
                <button className="new" onClick={this.expRender}>+</button>
                {expList.map((exp, index) => {
                    return (
                        <div key={exp.id} className="newExp"  >
                            <label htmlFor="info">Company Name: </label>
                            <input value={exp.info} onChange={e => this.handleChange(e, index)} name="info" id="info" autoComplete="off" placeholder="Company Name" />
                            <label htmlFor="fromDate">From: </label>
                            <input value={exp.fromDate} onChange={e => this.handleChange(e, index)} name="fromDate" id="fromDate" autoComplete="off" placeholder="From" />
                            <label htmlFor="toDate">To: </label>
                            <input value={exp.toDate} onChange={e => this.handleChange(e, index)} name="toDate" id="toDate" autoComplete="off" placeholder="To" />
                            <label htmlFor="descrip">Job Description: </label>
                            <textarea value={exp.descrip} onChange={e => this.handleChange(e, index)} name="descrip" id="descrip" rows={4} cols={50} placeholder="Job Descrption" />
                            <button type="button" className="del" onClick={e => this.expRemove(e, index)}>Delete</button>
                        </div>
                    )
                })}
            </div>)
    }

    expView = () => {
        const { expList } = this.state
        return (
            <div className="workExp">
                <h1>Work Experience</h1>
                {expList.map((exp) => {
                    return (
                        <div key={exp.id} className="cvPreview"  >
                            <h2>{exp.info}</h2>
                            <p>{exp.fromDate} - {exp.toDate}</p>
                            <p className="workDescrip">{exp.descrip}</p>
                        </div>
                    )
                })}
            </div>)
    }

    render() {
        const isEdit = this.props.isEdit
        return (
            (isEdit) ? this.expEdit() : this.expView()
        )
    }
}

export default MyExp