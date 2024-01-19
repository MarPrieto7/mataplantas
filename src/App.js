import RoutesProject from './routes/routes';
import { CartContextProvider } from './context/CartContext'; 

function App() {
  return (
    <CartContextProvider>
    <RoutesProject />
    </CartContextProvider>
  );
}

export default App;