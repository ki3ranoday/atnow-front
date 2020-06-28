import {connect} from 'react-redux';
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {signIn} from '../actions';

class landingPage extends Component {
    render() {
        return (
            <View>
                <Text> Landing Page </Text>
                <Text> Sign in </Text>
                <Text> Sign up </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        uid: state.user.uid
    }
}
export default connect(mapStateToProps, {signIn})(landingPage);