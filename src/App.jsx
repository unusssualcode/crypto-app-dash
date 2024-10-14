import { Layout } from "antd";
import AppHeader from "./components/layout/AppHeader.jsx";
import AppSider from "./components/layout/AppSider.jsx";
import AppContent from "./components/layout/AppContent.jsx";

const contentStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 60px",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#001529",
};

export default function App() {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  );
}
