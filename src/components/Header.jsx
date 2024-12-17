import React, { useState } from "react";
import { Layout, Menu, Drawer, Button, Badge } from "antd";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom"; // Link'i import et
import "../styles/Style.css";
import logo from "../assets/logo.png";

const { Header } = Layout;

const AppHeader = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0)",
        }}
      >
        <img
          style={{ width: "150px" }}
          src={logo}
          alt="MyLogo"
          className="logo-image"
        />
        <Button
          type="text"
          icon={<MenuOutlined style={{ fontSize: "20px", color: "black" }} />}
          onClick={showDrawer}
          className="mobile-menu-button"
        />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
          className="desktop-menu"
        >
          <Menu.Item key="1">Ana Sayfa</Menu.Item>
          <Menu.Item key="2">Kitaplar</Menu.Item>
          <Menu.Item key="3">Paketler</Menu.Item>
          <Menu.Item key="4">SSS</Menu.Item>
          <Menu.Item key="5">
            <Link to="/login">Giriş</Link> {/* Giriş Yap linki */}
          </Menu.Item>
          <Menu.Item key="6">Kayıt Ol</Menu.Item>
          <Menu.Item key="7">
            <Badge count={3} offset={[10, 0]}>
              <ShoppingCartOutlined style={{ fontSize: "20px", color: "black" }} />
            </Badge>
          </Menu.Item>
        </Menu>
        <Drawer
          title="Menü"
          placement="right"
          onClose={closeDrawer}
          open={visible}
          bodyStyle={{ padding: 15 }}
        >
          <Menu
            mode="vertical"
            defaultSelectedKeys={["1"]}
            onClick={closeDrawer}
            style={{ border: "none" }}
          >
            <Menu.Item key="1">Ana Sayfa</Menu.Item>
            <Menu.Item key="2">Kitaplar</Menu.Item>
            <Menu.Item key="3">Paketler</Menu.Item>
            <Menu.Item key="4">SSS</Menu.Item>
            <Menu.Item key="5">
              <Link to="/login">Giriş</Link> {/* Mobil menüde Giriş Yap linki */}
            </Menu.Item>
            <Menu.Item key="6">Kayıt Ol</Menu.Item>
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default AppHeader;
