import { Layout, Modal } from "antd";
import { Select, Space, Button } from "antd";
import { useCrypto } from "../../context/crypto-context.jsx";
import { useEffect, useState } from "react";

const headerStyle = {
  display: "flex",

  width: "100%",
  textAlign: "center",
  color: "#fff",
  height: 60,
  justifyContent: "space-between",
  alignItems: "center",
  // backgroundColor: "white",
};

export default function AppHeader() {
  const [select, setSelect] = useState(false);
  const [modal, setModal] = useState(false);
  const { crypto } = useCrypto();

  useEffect(() => {
    const keypress = (event) => {
      if (event.key === "/") {
        setSelect((prev) => !prev);
      }
    };
    document.addEventListener("keypress", keypress);
    return () => document.removeEventListener("keypress", keypress);
  }, []);

  function handleSelect(value) {
    setModal(true);
  }
  return (
    <Layout.Header style={headerStyle}>
      <Select
        style={{
          width: 250,
        }}
        open={select}
        onSelect={handleSelect}
        onClick={() => setSelect((prev) => !prev)}
        value="press / to open"
        options={crypto.map((coin) => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon,
        }))}
        optionRender={(option) => (
          <Space>
            <img
              src={option.data.icon}
              alt={option.data.label}
              width={20}
              height={20}
            />
            {option.data.label}
          </Space>
        )}
      />
      <Button type="primary">Add asset</Button>

      <Modal
        open={modal}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </Layout.Header>
  );
}
