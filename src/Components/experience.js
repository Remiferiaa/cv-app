import React, { useState } from "react";
import uniqid from "uniqid"

const baseExp = {
    info: "",
    fromDate: "",
    toDate: "",
    descrip: "",
    id: uniqid()
}

const MyExp = (props) => {

    const [values, setValues] = useState(baseExp)
    const [expList, setExp] = useState([])

    const handleChange = (e, index) => {
        const { name, value } = e.target
        const newList = [...expList]
        newList[index][name] = value
        setExp(newList)
    }       
    const expRender = () => {
        setExp(oldArray => [...oldArray, values])
        setValues({
            ...values,
            id: uniqid()
        })
    }

    const expRemove = (id) => {
        setExp(expList.filter(exp => exp.id !== id))
    }

    const expEdit = () => {
        return (
            <div className="workExp">
                <h1 >Work Experience</h1>
                <button className="new" onClick={expRender}>+</button>
                {expList.map((exp, index) => {
                    return <div key={exp.id} className="newExp">
                        <label htmlFor="info">Company Name: </label>
                        <input value={exp.info} onChange={(e) => handleChange(e, index)} name="info" id="info" autoComplete="off" placeholder="Company Name" />
                        <label htmlFor="fromDate">From: </label>
                        <input value={exp.fromDate} onChange={(e) => handleChange(e, index)} name="fromDate" id="fromDate" autoComplete="off" placeholder="From" />
                        <label htmlFor="toDate">To: </label>
                        <input value={exp.toDate} onChange={(e) => handleChange(e, index)} name="toDate" id="toDate" autoComplete="off" placeholder="To" />
                        <label htmlFor="descrip">Job Description: </label>
                        <textarea value={exp.descrip} onChange={(e) => handleChange(e, index)} name="descrip" id="descrip" rows={4} cols={50} placeholder="Job Descrption" />
                        <button type="button" className="del" onClick={() => expRemove(exp.id)}>Delete</button>
                    </div>
                })}
            </div>)
    }
    const expView = () => {
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
    return (
        (props.isEdit) ? expEdit() : expView()
    )
}

export default MyExp



