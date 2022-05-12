import React, {useState} from "react";
import uniqid from "uniqid"

const baseSkill = {
    text: "",
    id: uniqid()
}

const MySkills = (props) => {
    const [values, setValues] = useState(baseSkill)
    const [skillList, setSkill] = useState([])

    const handleChange = (e, index) => {
        const { name, value } = e.target
        const newList = [...skillList]
        newList[index][name] = value
        setSkill(newList)
    }

    const skillRender = () => {
        setSkill(oldArray => [...oldArray, values])
        setValues({
            text: "",
            id: uniqid()
        })
    }

    const skillRemove = (id) => {
        setSkill(skillList.filter(skill => skill.id !== id))
    }

    const skillEdit = () => {
        return (
            <div className="skills">
                <h1>Skills</h1>
                <button className="new" onClick={skillRender}>+</button>
                {skillList.map((skill, index) => {
                    return (
                        <div key={skill.id} className="talent" >
                            <label htmlFor="text">Skill Name: </label>
                            <input value={skill.text} onChange={(e) => handleChange(e, index)} name="text" id="text" autoComplete="off" placeholder="Skills" />
                            <button className="delSkill" onClick={() => skillRemove(skill.id)}>❌</button>
                        </div>
                    )
                })}
            </div>
        )
    }

    const skillView = () => {
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
    
    return (
        (props.isEdit) ? skillEdit() : skillView()
    )
}

export default MySkills