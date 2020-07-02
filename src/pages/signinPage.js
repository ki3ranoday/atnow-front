import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'

class SignInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    render() {
        return (
            <View>
                <Text> Sign in </Text>
                <TextInput
                    onChange={(name) => { this.setState({ username: name }) }}
                    value={this.state.username}
                    placeholder="username"
                />
                <TextInput
                    onChange={(pw) => { this.setState({ password: pw }) }}
                    value={this.state.password}
                    placeholder="password"
                />
                <Button onClick={() => this.props.signIn(name)} title="submit"/>
            </View>
        )
    }
}
export default SignInPage;

