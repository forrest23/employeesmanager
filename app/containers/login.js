/**
 * Created by ArmyKing on 16/8/2.
 */
var t = require('tcomb-form-native');
import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Dimensions,
} from 'react-native';
import * as UserInfo from '../services/token';
import allActions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
var _ = require('lodash');
const maxWidth = Dimensions.get('window').width;
const FontAwesome = require('react-native-vector-icons/FontAwesome');

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        height: 48,
        backgroundColor: '#48BBEC',
        borderRadius: 4,
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'center',
    },
    UserICon: {
        position: 'absolute',
        right: 40,
        top: 18,
        height: 30,
        width: 30,
    },
    hidden: {
        width: 0,
        overflow: 'hidden',
    },
    ImageTop: {
        height: 294,
        width: maxWidth,
        resizeMode: 'cover'
    },
    ImageIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    textBox: {
        backgroundColor: '#FFFFFF',
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 1,
        marginTop: 0,
        paddingLeft: 10,
        color: '#000000',
        flex: 1,
        fontSize: 17,
        height: 52,
    }
});
const help = <Image
    source={require('../assets/user.png') }
    style={styles.ImageIcon}/>;

const help2 = <Image
    source={require('../assets/clock.png') }
    style={styles.ImageIcon}/>;
var Form = t.form.Form;
let LoginInfo;
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);
stylesheet.formGroup.normal.flexDirection = 'row';
stylesheet.formGroup.normal.marginBottom = 1;
stylesheet.formGroup.error.marginBottom = 1;

stylesheet.formGroup.error.flexDirection = 'row';
stylesheet.textbox.normal = styles.textBox;
stylesheet.textbox.error = styles.textBox;
stylesheet.helpBlock.normal = styles.UserICon;
stylesheet.helpBlock.error = styles.UserICon;
stylesheet.controlLabel.normal = styles.hidden;
stylesheet.controlLabel.error = styles.hidden;
stylesheet.errorBlock = styles.hidden;
stylesheet.errorBlock = styles.hidden;
var options = {
    fields: {
        username: {
            label: '用户名',
            placeholder: '请输入您的账户名',
            error: '用户名不能未空',
            help: help,
            stylesheet: stylesheet
        },
        password: {
            label: '密码',
            secureTextEntry: true,
            placeholder: '请输入密码',
            maxLength: 12,
            minLength: 4,
            error: '密码必须4-12位',
            stylesheet: stylesheet,
            help: help2,
        },
        verifyCode: {
            label: ' ',
            maxLength: 4,
            minLength: 4,
            error: '验证码不正确',
            stylesheet: stylesheet
        },

    }
};
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {
                username: UserInfo.getUserName(),
                password: '',
                verifyCode: '',
            }
        }
    }

    componentDidMount() {
    }


    onChange(value) {
        this.setState({ value });
    }

    onPress() {
        if (this.refs.form.validate().errors.length == 0 && !this.props.login.loading) {
            var value = this.refs.form.getValue();
            if (value) {
                console.log(value);
            }
            this.props.actions.Login(value.username, value.password, value.verifyCode || '');
            this.props.actions.SetLoginLoading(true);

        }
    }

    render() {

        if (this.props.login.error_description == null || this.props.login.error_description == "") {
            LoginInfo = t.struct({
                username: t.String,              // a required string
                password: t.String,
            });
        } else if (this.props.login.error_description == "validcode") {
            LoginInfo = t.struct({
                username: t.String,              // a required string
                password: t.String,
                verifyCode: t.String,
            });
        } else {
            LoginInfo = t.struct({
                username: t.String,              // a required string
                password: t.String,
                verifyCode: t.String,
            });
        }
        let cp = "登录"

        if (this.props.login.loading) {
            cp = "登录中";
        }
        return (
            <View style={styles.container} >
                <View style={{ height: 294}}>
                    <Image
                        source={require('../assets/LoginImage.png') }
                        style={styles.ImageTop}>
                        <View style={{ marginTop: 150 }}>
                            <Form
                                ref="form"
                                type={LoginInfo}
                                value={this.state.value}
                                options={options}
                                onChange={this.onChange.bind(this) }
                                />
                        </View>

                    </Image>
                </View>
                <TouchableHighlight style={styles.button}  onPress={
                    this.onPress.bind(this)
                } underlayColor='#99d9f4'>
                    <Text style={styles.buttonText} >{cp}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

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