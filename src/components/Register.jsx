import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Layout, Typography } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const App = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    console.log("Form Submitted:", values);
    setTimeout(() => {
      setLoading(false);
      alert("Kayıt başarılı! Verileriniz işleniyor...");
    }, 1000);
  };

  return (
    <Layout
      style={{
        minHeight: "100vh", 
        background: "linear-gradient(to bottom, #176B87, #E7DFD5)",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: "200px", 
      }}
    >
      <Content
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Title level={3} style={{ textAlign: "center" }}>
          Kayıt Ol
        </Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          style={{ marginTop: "20px" }}
        >
          <Form.Item
            label="İsim"
            name="firstName"
            rules={[{ required: true, message: "Lütfen adınızı giriniz." }]}
          >
            <Input placeholder="Adınızı giriniz" />
          </Form.Item>

          <Form.Item
            label="Soyisim"
            name="lastName"
            rules={[{ required: true, message: "Lütfen soyadınızı giriniz." }]}
          >
            <Input placeholder="Soyadınızı giriniz" />
          </Form.Item>

          <Form.Item
            label="Doğum Yılı"
            name="birthYear"
            rules={[
              { required: true, message: "Lütfen doğum yılınızı giriniz." },
              { pattern: /^\d{4}$/, message: "Geçerli bir yıl giriniz." },
            ]}
          >
            <Input placeholder="YYYY" maxLength={4} />
          </Form.Item>

          <Form.Item
            label="T.C. Kimlik No"
            name="tcNo"
            rules={[
              { required: true, message: "Lütfen T.C. Kimlik Numaranızı giriniz." },
              { pattern: /^\d{11}$/, message: "11 haneli bir sayı giriniz." },
            ]}
          >11
            <Input placeholder="T.C. Kimlik Numaranızı giriniz" maxLength={11} />
          </Form.Item>

          <Form.Item
            label="Şifre"
            name="password"
            rules={[
              { required: true, message: "Lütfen bir şifre giriniz." },
              { min: 6, message: "Şifre en az 6 karakter olmalıdır." },
            ]}
          >
            <Input.Password placeholder="Şifrenizi giriniz" />
          </Form.Item>

          <Form.Item name="notRobot" valuePropName="checked" rules={[{ required: true, message: "Lütfen robot olmadığınızı doğrulayınız." }]}> 
            <Checkbox>Robot değilim</Checkbox>
          </Form.Item>

          <Form.Item name="kvkk" valuePropName="checked" rules={[{ required: true, message: "Lütfen KVKK metnini kabul ediniz." }]}> 
            <Checkbox>
              <a href="/kvkk" target="_blank" rel="noopener noreferrer">
                KVKK Aydınlatma Metni
              </a>
              'ni okudum ve kabul ediyorum.'
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Kayıt Ol
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default App;
