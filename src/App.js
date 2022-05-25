import { Home } from './pages'
import BeerProvider from "./context";

function App() {
  return (
    <BeerProvider>
      <Home />
    </BeerProvider>
  );
}

export default App;
