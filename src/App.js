import Features from './components/Features';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Realtors from './components/Realtors';
import Sidebar from './components/Sidebar';
import Story from './components/Story';
import Homes from './components/Homes';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
