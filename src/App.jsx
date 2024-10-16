import AppLayout from "./components/layout/AppLayout.jsx";
import { CryptoContextProvider } from "./context/crypto-context.jsx";

const contentStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 60px",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#001529",
};

export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  );
}
