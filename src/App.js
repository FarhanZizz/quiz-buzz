import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import Header from './Components/Header/Header';
import QuizMenu from './Components/QuizMenu/QuizMenu';
import Blog from './Components/Blog/Blog';
import Statistics from './Components/Statistics/Statistics';
import QuizQuestions from './Components/QuizQuestions/QuizQuestions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorRoute from './Components/ErrorRoute/ErrorRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <div><Header></Header><QuizMenu></QuizMenu></div>,
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: 'statistics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>
        },
        {
          path: 'quiz/:quizid',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizid}`)
          },
          element: <QuizQuestions></QuizQuestions>
        },
        {
          path: '*',
          element: <ErrorRoute></ErrorRoute>
        }
      ]
    }

  ])
  return (
    <div className="App">
      < ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
