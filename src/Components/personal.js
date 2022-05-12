import React, {useState} from "react";

const personalBase = {
    name: "",
    email: "",
    phoneNum: "",
    address: "",
}

const MyInfo = (props) => {
    const [values, setValues] = useState(personalBase)

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }

    const infoEdit = () => {
        return (
            <div className="personal" >
                <label htmlFor="Name">Name: </label>
                <input value={values.name} onChange={handleChange} name="name" id="name" autoComplete="off" placeholder="Name" />
                <label htmlFor="email">Email: </label>
                <input value={values.email} onChange={handleChange} name="email" id="email" type="email" autoComplete="off" placeholder="Email" />
                <label htmlFor="phone">Contact Number: </label>
                <input value={values.phoneNum} onChange={handleChange} name="phoneNum" id="phone" type="tel" autoComplete="off" placeholder="Contact Number" />
                <label htmlFor="address">Address: </label>
                <input value={values.address} onChange={handleChange} name="address" id="address" autoComplete="off" placeholder="Address" />
            </div>
        )
    }

    const infoView = () => {
        return (
            <div className="personal" >
                <h2>👤 {values.name}</h2>
                <h2>📧 {values.email}</h2>
                <h2>☎ {values.phoneNum}</h2>
                <h2>🏠 {values.address}</h2>
            </div>
        )
    }

    return (
        (props.isEdit) ? infoEdit() : infoView()
    )
}

export default MyInfo