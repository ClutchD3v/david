import { Header } from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Hero from "./components/Hero/Hero";
function App() {
  return (
    <div className="App">
    <Header />
    <Hero></Hero>
    </div>
  );
}

export default App;
