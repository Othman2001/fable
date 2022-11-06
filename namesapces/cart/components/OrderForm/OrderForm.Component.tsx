import { Form, Input } from 'antd';
import * as Styles from "./OrderForm.Styles";

export default function OrderForm() {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Styles.FormContainer>

            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="City"
                    name="city"
                    rules={[{ required: true, message: 'Enter City' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Address"
                    name="Address"
                    rules={[{ required: true, message: 'Enter Your Address' }]}
                >
                    <Input />
                </Form.Item>
                <Styles.Text> Recipient's Details </Styles.Text>
                <Form.Item
                    label="Name "
                    name="Name"
                    rules={[{ required: true, message: 'Enter name and surename' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[{ required: true, message: 'Enter Your Phone Number' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="Email"
                    rules={[{ required: true, message: 'Enter Your Mail' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Styles.ButtonContainer>
                    <Styles.Button>
                        Place Order
                    </Styles.Button>
                </Styles.ButtonContainer>

            </Form>
        </Styles.FormContainer>
    )
}
