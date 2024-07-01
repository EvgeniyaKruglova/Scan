
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
/*import MainPage from './components/MainPage/MainPage';*/
import AuthProvider from "./provider/authProvider";
import RoutesApp from './routes/Routes';

function App() {
  return (
      <>
          <Header />
          <AuthProvider>
              <RoutesApp />
          </AuthProvider>
          <Footer />
      </>
  );
}

export default App;
