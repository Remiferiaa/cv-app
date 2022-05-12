import React, {useState} from "react";
import uniqid from "uniqid"

const baseHistory = {
    info: "",
    start: "",
    end: "",
    major: "",
    gpa: "",
    id: uniqid()
}

const MyHistory = (props) => {
    const [values, setValues] = useState(baseHistory)
    const [eduList, setEdu] = useState([])

    const handleChange = (e, index) => {
        const { name, value } = e.target
        const newList = [...eduList]
        newList[index][name] = value
        setEdu(newList)
    }

    const eduRender = () => {
        setEdu(oldArray => [...oldArray, values])
        setValues({
            ...values,
            id: uniqid()
        })
    }

    const eduRemove = (id) => {
        setEdu(eduList.filter(edu => edu.id !== id))
    }

    const eduEdit = () => {
        return (
            <div className="eduExp">
                <h1 >Education</h1>
                <button className="new" onClick={eduRender}>+</button>
                {eduList.map((slot, index) => {
                    return (
                        <div key={slot.id} className="newEdu" >
                            <label htmlFor="info">Institution Name: </label>
                            <input value={slot.info} onChange={(e) => handleChange(e, index)} name="info" id="info" autoComplete="off" placeholder="Institution Name" />
                            <label htmlFor="start">Start Date: </label>
                            <input value={slot.start} onChange={(e) => handleChange(e, index)} name="start" id="start" autoComplete="off" placeholder="Start Date" />
                            <label htmlFor="end">End Date: </label>
                            <input value={slot.end} onChange={(e) => handleChange(e, index)} name="end" id="end" autoComplete="off" placeholder="End Date" />
                            <label htmlFor="major">Major: </label>
                            <input value={slot.major} onChange={(e) => handleChange(e, index)} name="major" id="major" autoComplete="off" placeholder="Major" />
                            <label htmlFor="gpa">CGPA: </label>
                            <input value={slot.gpa} onChange={(e) => handleChange(e, index)} name="gpa" id="gpa" autoComplete="off" placeholder="CGPA" />
                            <button type="button" className="del" onClick={() => eduRemove(slot.id)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        )
    }

    const eduView = () => {
        return (
            <div className="eduExp">
                <h1>Education</h1>
                {eduList.map((slot) => {
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
    return (
        (props.isEdit) ? eduEdit() : eduView()
    )
}

export default MyHistory