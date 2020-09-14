import React from 'react'
import axios from 'axios'

class DropDown extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [],
            user: {}
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
               const users = response.data
               this.setState({
                   users
               })
            })
            .catch((err) => {
                alert(err)
            })
    }

    handleChange = (e) => {
        this.setState({
            user: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Drop Down User API</h1>

                    <select value = {this.state.user} onChange = {this.handleChange}>
                        <option value = "">select</option>
                          {
                            this.state.users.map((user) => {
                                return <option key = {user.id}>{user.name}</option>
                                })
                            }
                    </select>

                        <div>{this.state.user.name}</div>
             </div>
        )
    }
}

export default DropDown