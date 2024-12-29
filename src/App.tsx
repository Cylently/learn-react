import "./App.css";
import Content from "./components/content";
import Footer from "./components/footer";
import Header from "./components/header";
import Layout from "./components/layout";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="bg-background text-foreground dark flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <Navbar />
        <main className="flex-grow md:pl-64">
          <Content />
        </main>
      </div>
    </div>
  );
}

export default App;
