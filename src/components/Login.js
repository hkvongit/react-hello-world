import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
export default class Login extends Component {
    constructor(props){
        super(props)
        let loggedIn =false
        
        this.state={
            username:'',
            password:'',
            message:'',
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // invalid_details(){
    //     this.setState({
    //         message:'invalid details'
    //     })
    // }

    submitForm(e){
        e.preventDefault()
        const { username,password }=this.state
        //Login Data
        if(username==='someone@someone.com' && password ==='password'){
            localStorage.setItem("token","hsdfhdshfshd")
            this.setState({
                loggedIn: true
            })
        }
        else{ 
            this.setState({
            message:'invalid details'
        })}
    }
    render() {
        if(this.state.loggedIn){
            return <Redirect to="/admin" />
        }


        return (
            <div>
                LogIn
                <form onSubmit={this.submitForm}>

                    <input type='text' placeholder='username' name='username' value={this.state.username} onChange={this.onChange} />
                    <br/>

                    <input type='text' placeholder='password' name='password' value={this.state.password} onChange={this.onChange} />
                    <br/>

                    <input type='submit'/>

                </form>
                <p>{this.state.message}</p>
            </div>
        )
    }
}
