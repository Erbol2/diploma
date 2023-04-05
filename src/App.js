import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

export default function App() {
  return (
    <div className="App">

      <Layout>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contacts" element={<h1>Contacts</h1>} />
          <Route path="/delivery" element={<h1>Delivery</h1>} />


        </Routes>
      </Layout>
    </div>
  );
}