import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import Header from './Components/Header/Header';
import QuizMenu from './Components/QuizMenu/QuizMenu';
import Blog from './Components/Blog/Blog';
import Statistics from './Components/Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <div><Header></Header><QuizMenu></QuizMenu></div>,
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
