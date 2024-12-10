import React from "react";
import { AutoComplete, Button, Flex, Layout } from "antd";

const { Content } = Layout;

const App = () => {
  const [options, setOptions] = React.useState([]);
  const handleSearch = (value) => {
    setOptions(() => {
      if (!value || value.includes("@")) {
        return [];
      }
      return ["gmail.com"].map((domain) => ({
        label: `${value}@${domain}`,
        value: `${value}@${domain}`,
      }));
    });
  };
  return (
    <Layout
      style={{
        height: "100vh",
        background: "linear-gradient(to bottom, #176B87, #E7DFD5 )",
      }}
    >
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "Arial",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            Kayıt Ol
          </h1>
          <p style={{ fontFamily: "Arial", fontSize: "15px"}}>
            E-posta hesabına kod gönderilecek
          </p>
          <AutoComplete
            style={{
              width: 350,
              height: 45,
            }}
            onSearch={handleSearch}
            placeholder="E-postanızı giriniz"
            options={options}
          />
          <Flex
            vertical
            gap="small"
            style={{
              width: "200px",
            }}
            wrap
          >
            <Button
              style={{
                borderRadius: "20px",
                marginTop: "20px",
                marginBottom: "20px",
                background: "#E7DFD5",
              }}
            >
              Devam
            </Button>
          </Flex>
          <p style={{ fontFamily: "Arial", fontSize: "15px"}}>
            Hesabın zaten var mı?
            <a style={{color:"black", margin:"10px"}} href="/">Giriş Yap</a>
          </p>
        </div>
      </Content>
    </Layout>
  );
};
export default App;
