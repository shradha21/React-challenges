import React from 'react'
import axios from 'axios'

class FetchUserId extends React.Component {
    constructor() {
        super()
        this.state = {
            id: '',
            user: {}
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({ id: ''})

        axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
         .then((response) => {
             const user = response.data
             this.setState({
                 user
             })
         })
    }



    render() {
        return (
            <div>
                <h1>Get User Info</h1>

                <form onSubmit = {this.handleSubmit}>
                    <input 
                        type = "text"  
                        name = "id"
                        value = {this.state.id} 
                        onChange = {this.handleChange}
                        placeholder = "enter the id"
                    /> 
                    <input type = "submit" />
                </form>

                <h2>User Details</h2>
                <ul>
                    <div>
                        {
                            Object.keys(this.state.user).length !== 0 && (
                                <div>
                                    <li>Id - {this.state.user.id} </li>
                                    <li>Name - {this.state.user.name} </li>
                                    <li>Email - {this.state.user.email} </li>
                                    <li>City - {this.state.user.address.city}</li>
                                </div>
                            )
                        }
                    </div>
                </ul>
            </div>
        )
    }
}

export default FetchUserId