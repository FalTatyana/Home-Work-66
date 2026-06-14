import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import MealCard from './components/MealCard/MealCard'
import NewMeal from './components/NewMeal/NewMeal'
import CaloriesTotal from './components/CaloriesTotal/CaloriesTotal'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={[<CaloriesTotal />, <MealCard />]} />
        <Route path={'/new-meal'} element={<NewMeal />} />
      </Routes>
    </Layout>
  )
}

export default App
