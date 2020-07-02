import {connect} from 'react-redux';
import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import {signIn} from '../actions';

class LandingPage extends Component {
    render() {
        return (
            <View>
                <Text> Landing Page </Text>
                <Text onPress={() => this.props.navigation.navigate('signIn')}> Sign in </Text>
                <Text onPress={() => this.props.navigation.navigate('signUp')}> Sign up </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        uid: state.user.uid
    }
}
export default connect(mapStateToProps, {signIn})(LandingPage);