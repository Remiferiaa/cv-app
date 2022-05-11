import React from "react";


class MyInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            details: {
                name: "",
                email: "",
                phoneNum: "",
                address: "",
            },
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            details: {
                ...this.state.details,
                [name]: value
            }
        })
    }

    infoEdit = () => {
        const {details} = this.state
        return (
            <div className="personal" >
                <label htmlFor="Name">Name: </label>
                <input value={details.name} onChange={this.handleChange} name="name" id="name" autoComplete="off" placeholder="Name" />
                <label htmlFor="email">Email: </label>
                <input value={details.email} onChange={this.handleChange} name="email" id="email" type="email" autoComplete="off" placeholder="Email" />
                <label htmlFor="phone">Contact Number: </label>
                <input value={details.phoneNum} onChange={this.handleChange} name="phoneNum" id="phone" type="tel" autoComplete="off" placeholder="Contact Number" />
                <label htmlFor="address">Address: </label>
                <input value={details.address} onChange={this.handleChange} name="address" id="address" autoComplete="off" placeholder="Address" />
            </div>
        )
    }

    infoView = () => {
        const {details} = this.state
        return (
            <div className="personal" >
                <h2>👤 {details.name}</h2>
                <h2>📧 {details.email}</h2>
                <h2>☎ {details.phoneNum}</h2>
                <h2>🏠 {details.address}</h2>
            </div>
        )
    }

    render() {
        const isEdit = this.props.isEdit
        return (
            (isEdit) ? this.infoEdit() : this.infoView()
        )
    }
}

export default MyInfo