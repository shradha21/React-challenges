import React from 'react'
import axios from 'axios'

class AutoFills extends React.Component {
    constructor() {
        super()
        this.state = {
            userName : '',
            name: '',
            email: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const userName = this.state.userName;
        const name = this.state.name;
        const email = this.state.email

        this.setState({ userName, name, email })
    }

    handleBlur = (e) => {
        axios.get("https://jsonplaceholder.typicode.com/users")
         .then((response) => {
             console.log(response.data)
             const wantedData = response.data.find((ele) => {
                 return ele.username === this.state.userName
             })
             if(wantedData) {
                 const name = wantedData.name;
                 const email = wantedData.email;
                 this.setState({ name, email })
             }
         })
         .catch((err) => {
             alert(err.message)
         })
    }

    render() {
        return (
            <div>
            <h2>User Auto Fill</h2>

            <form onSubmit = {this.handleSubmit}>
            <div>
                <label htmlFor = "userName">Username</label>
                    <input 
                        type = "text" 
                        name = "userName" 
                        id = "userName" 
                        value = {this.state.userName} 
                        onChange = {this.handleChange} 
                        onBlur = {this.handleBlur}
                    />
            </div> <br />

            <div>
            <label htmlFor = "name">Name</label>
                <input 
                    type = "text" 
                    name = "name" 
                    id = "name" 
                    value = {this.state.name} 
                    onChange = {this.handleChange} 
                    onBlur = {this.handleBlur}
                />
            </div> <br />

            <div>
            <label htmlFor = "email">Email</label>
                <input 
                    type = "text" 
                    name = "email" 
                    id = "email" 
                    value = {this.state.email} 
                    onChange = {this.handleChange} 
                    onBlur = {this.handleBlur}
                />
            </div> <br />

            <input type = "submit" />
            </form>
        </div>
        
        )
    }
}

export default AutoFills