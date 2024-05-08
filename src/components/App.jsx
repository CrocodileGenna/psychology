
import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import { Home } from './home/Home';

export const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

// export const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Footer />
//     </Router>
//   );
// };
