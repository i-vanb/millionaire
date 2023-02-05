import React from 'react';
import styles from './App.module.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Home} from "./components/Home/Home";
import {Menu} from "./components/Menu/Menu";
import {GameContextProvider} from "./context/Game.context";
import {Game} from "./components/Game/Game";
import {HttpError} from "./components/HttpError/HttpError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
   {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: '/start',
    element: <Game />,
  }
]);

function App() {
    return (
    <div className={styles.App}>
        <GameContextProvider>
            <RouterProvider router={router} />
            <HttpError />
        </GameContextProvider>
    </div>
    )
}

export default App;
