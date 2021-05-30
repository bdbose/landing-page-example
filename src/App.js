import './App.css';
import Blog from './components/blog';
import Footer from './components/footer';
import Hero from './components/hero';
import Nature from './components/nature';
import Navbar from './components/navbar';
import Presented from './components/presented';
import Quote from './components/quote';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Nature />
      <Presented />
      <Quote />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
