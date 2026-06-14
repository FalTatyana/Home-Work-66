import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import MealCard from './components/MealCard/MealCard'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={
          <div className='container mt-5'>
            <MealCard />
          </div>
        } />
      </Routes>
    </Layout>
  )
}

export default App
