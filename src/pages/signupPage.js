import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, View, TextInput, Button } from 'react-native';
import {signUp} from '../actions';

class SignUpPage extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            phone:'',
            password:'',
            confirmPassword:'',

            error:'',
        }
    }
    handleSubmit = () => {
        if(this.state.password === this.state.confirmPassword){
            this.props.signUp({
                username:this.state.username,
                password: this.state.password,
                email: this.state.email,
                phone: this.state.phone,
            });
        }else{
            this.setState({error: "Passwords don't match"});
        }
    }
    render() {
        return (
            <View>
                <Text> Sign Up </Text>
                <TextInput
                    onChange={(input) => { this.setState({ username: input }) }}
                    value={this.state.username}
                    placeholder="username"
                />
                <TextInput
                    onChange={(input) => { this.setState({ email: input }) }}
                    value={this.state.email}
                    placeholder="email"
                />
                <TextInput
                    onChange={(input) => { this.setState({ phone: input }) }}
                    value={this.state.phone}
                    placeholder="phone number"
                />
                <TextInput
                    onChange={(input) => { this.setState({ password: input }) }}
                    value={this.state.password}
                    placeholder="password"
                />
                <TextInput
                    onChange={(input) => { this.setState({ confirmPassword: input }) }}
                    value={this.state.confirmPassword}
                    placeholder="confirm password"
                />
                <Button onClick={this.handleSubmit} title="submit"/>
            </View>
        )
    }
}

export default connect(null, {signUp})(SignUpPage);