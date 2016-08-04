/**
 * Created by ArmyKing on 16/8/2.
 */
var t = require('tcomb-form-native');
import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import allActions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
var options = {fields:{
    username: {
        label: '用户名',
        // maxLength: 12,
        error: '用户名不能未空'
    },
    password: {
        label: '密码',
        secureTextEntry:true,
        maxLength: 12,
        minLength:4,
        error: '密码必须4-12位'
    },
    verifyCode:{
        label:'验证码',
        maxLength: 4,
        minLength:4,
        error: '验证码不正确'
    }
}};
var Form = t.form.Form;
let LoginInfo;
class Login extends Component {
    constructor(props) {
        super(props);
        this.state={value: {
            username:'15202108909',
            password:'123456',
            verifyCode:'',
        }
        }
    }

    componentDidMount() {
    }


    onChange(value) {
        this.setState({value});
    }

    onPress() {
       if(this.refs.form.validate().errors.length==0&&!this.props.login.loading) {
           var value = this.refs.form.getValue();
           if (value) {
               console.log(value);
           }
           this.props.actions.Login(value.username, value.password, value.verifyCode || '');
           this.props.actions.SetLoginLoading(true);

       }
     }

    render() {

        if(this.props.login.error_description==null||this.props.login.error_description==""){
             LoginInfo = t.struct({
                username: t.String,              // a required string
                password: t.String,
            });
        }else if(this.props.login.error_description=="validcode"){
              LoginInfo = t.struct({
                username: t.String,              // a required string
                password: t.String,
                  verifyCode:t.String,
            });
        }else{
            LoginInfo = t.struct({
                username: t.String,              // a required string
                password: t.String,
                verifyCode:t.String,
            });
        }
        let cp="登录"

        if(this.props.login.loading){
            cp="登录中";
        }
        return (
            <View style={styles.container} >
                <Form
                    ref="form"
                    type={LoginInfo}
                    value={this.state.value}
                    options={options}
                    onChange={this.onChange.bind(this)}
                />
                <TouchableHighlight style={styles.button}  onPress={
                    this.onPress.bind(this)
                } underlayColor='#99d9f4'>
                    <Text style={styles.buttonText} >{cp}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});
function mapStateToProps(state) {

    return {
        ...state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(allActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)