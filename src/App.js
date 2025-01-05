import logo from './logo.svg';
import './App.css';
import Body from './components/body';
import Header from './components/header';
import store from './utils/store';
import {Provider} from "react-redux"
import MainContainer from './components/MainContainer';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
