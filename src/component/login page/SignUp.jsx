import React from "react";
// import { Button, Modal } from 'antd';
import { Form, Input, Modal, message } from "antd";
import axios from "axios";

const SignUp = ({ isShow, handleCancel }) => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            // Post data to your API endpoint
            const response = await axios.post(
                "http://192.168.29.14:3000/api/users/user-add",
                values
            );

            handleCancel();
            // alert();
            form.resetFields();
            message.success("sign up sucessfuly");
            console.log("Data sent successfully:", response.data);
        } catch (error) {
            console.error("Error posting data:", error);
        }
    };

    // const handleOk = () => {
    //     console.log("dfghjkl");
    //     // onFinish();
    // };

    return (
        <div>
            <Modal
                title="Sign up "
                // visible={this.state.visible}

                open={isShow}
                onOk={form.submit}
                okText="Submit"
                onCancel={() => {
                    form.resetFields();
                    handleCancel();
                }}
                //   onOk={this.ha  ndleOk}
            >
                {/* from ant start */}
                <Form
                    form={form}
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                        maxHeight: 150,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your password!",
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    {/* costom */}

                    <Form.Item
                         
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                // type: "email",
                                message: "Please enter your email!",
                            },
                            {  
                                 
                                type: "email",
                                 message: " please enter valid email"
                            }
                            
                        ]}
                    >
                        <Input
                        //  type="email"
                         />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    ></Form.Item>
                </Form> 
                
                
                {/* from ant end  */}
            </Modal>
        </div>
    );
};

export default SignUp;
