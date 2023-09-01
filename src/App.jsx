import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './webPage/component/header';
import { HomePage } from './webPage/pages/homePage';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <HomePage/>
    </>
  )
}

export default App
