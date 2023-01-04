import AppRouter from "./components/AppRouter";
import {BrowserRouter} from 'react-router-dom';
import Navbar from "./components/Navbar";
import {observer} from "mobx-react-lite";

const App = observer(() => {
  return (
    <BrowserRouter>
        <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  );
})

export default App;
