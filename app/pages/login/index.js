import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { Form, Input, Checkbox } from '@alifd/next';
import './index.scss';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: { fixedSpan: 3 },
    wrapperCol: { span: 20 }
};

class Login extends Component {
    static propTypes = {
        history: PropTypes.func
    };

    handleSubmit = (values, errors) => {
        if (errors) {
            return;
        }
        this.props.history.push('');
    };

    render() {
        return (
            <div className='login'>
                <div className='login__bg' />
                <div className='login__form'>
                    <h2>登录 ADMIN 系统</h2>
                    <Form
                        style={{ width: 450 }}
                        {...formItemLayout}
                        labelTextAlign='left'
                        size='large'
                        labelAlign='inset'
                    >
                        <FormItem style={{ width: '100%' }} label='用户名' required asterisk={false}>
                            <Input name='username' trim defaultValue='samcao' />
                        </FormItem>

                        <FormItem style={{ width: '100%' }} label='密码' format='tel' required asterisk={false}>
                            <Input htmlType='password' defaultValue='123456' aria-label='Please input password' />
                        </FormItem>

                        <FormItem style={{ width: '100%' }} label=''>
                            <Checkbox>记住我七天</Checkbox>
                            <a style={{ float: 'right', textDecoration: 'none', lineHeight: '39px' }} href='javascript:;'>忘记密码?</a>
                        </FormItem>

                        <FormItem style={{ width: '100%' }} label=' '>
                            <Form.Submit
                                style={{ width: '100%' }}
                                type='primary'
                                validate
                                onClick={this.handleSubmit}
                            >登录</Form.Submit>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;
