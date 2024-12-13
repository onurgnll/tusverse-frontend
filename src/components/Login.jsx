import React, { useEffect, useState } from "react";
import { AutoComplete, Button, Flex, Input, Layout } from "antd";

const { Content } = Layout;

const Login = ({ onVerificationSuccess }) => {
  const [options, setOptions] = React.useState([]);
  const [email, setEmail] = React.useState("");
  const [isCodeSent, setIsCodeSent] = React.useState(false);
  const [verificationCode, setVerificationCode] = React.useState("");
  const [timer, setTimer] = useState(120);

  useEffect(() => {
    let interval;
    if (isCodeSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsCodeSent(false);
      setTimer(120);
    }
    return () => clearInterval(interval);
  }, [isCodeSent, timer]);

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

  const handleContinue = () => {
    if (email) {
      setIsCodeSent(true);
      setTimer(120);
      console.log(`Doğrulama kodu gönderildi: ${email}`);
    }
  };

  const handleVerify = () => {
    if (verificationCode === "1234") { // Örnek doğrulama kodu
      alert("Kod doğrulandı!");
      onVerificationSuccess(); 
    } else {
      alert("Kod hatalı!");
    }
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
            Giriş Yap
          </h1>
          {isCodeSent ? (
            <p style={{ fontFamily: "Arial", fontSize: "15px" }}>
              Kod yeniden gönderilebilir: {timer} saniye
            </p>
          ) : (
            <p style={{ fontFamily: "Arial", fontSize: "15px" }}>
              E-posta hesabına kod gönderilecek
            </p>
          )}
          <AutoComplete
            style={{
              width: 350,
              height: 45,
            }}
            onSearch={handleSearch}
            placeholder="E-postanızı giriniz"
            options={options}
            onSelect={(value) => setEmail(value)}
          />
          {isCodeSent && timer > 0 && (
            <Input
              style={{
                width: 350,
                height: 45,
                textAlign: "center",
                marginTop: "15px",
              }}
              placeholder="Doğrulama kodunu giriniz"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
          )}
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
              onClick={isCodeSent ? handleVerify : handleContinue}
            >
              {isCodeSent ? "Doğrula" : "Devam"}
            </Button>
          </Flex>
        </div>
      </Content>
    </Layout>
  );
};

export default Login;


