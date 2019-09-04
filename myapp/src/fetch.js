import React from 'react';
import './App.css';

class Fetch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: []
        }
    }
    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({
                user: json
            }))
    }
    delte = (index) => {
        let arr = this.state.user;
        arr.splice(index, 1)
        this.setState({
            user: arr
        })
    }
    render() {
        return (
            <div>
                {/* <div>
          <h1>usename</h1>
          <ul>
            {this.state.user.length ?
            this.state.user.map((value,index)=>{
              return(
                <li key= {index}>{value.name}</li>
              )
            })
            :null}
          </ul>
          <h1>email</h1>
          <ul>
            {this.state.user.length ?
            this.state.user.map((value,index)=>{
              return(
                <li key= {index}>{value.email}</li>
              )
            })
            :null}
          </ul>
        </div> */}
                <table>
                    <thead>
                        <tr>

                            <th>S.no</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.user.length ?
                            this.state.user.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td><button onClick={() => this.delte(index)}>delte</button></td>
                                    </tr>
                                )
                            })
                            : null}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Fetch;