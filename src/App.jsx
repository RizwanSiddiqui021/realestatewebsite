import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header></Header>
      <About></About>
      <Projects></Projects>
    </div>
  );
};

export default App;
