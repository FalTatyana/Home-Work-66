import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import MealCard from './components/MealCard/MealCard'
import NewMeal from './components/FormMeal/FormMeal'
import CaloriesTotal from './components/CaloriesTotal/CaloriesTotal'
import EditMeal from './components/EditMeal/EditMeal'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path={'/'} element=
          {<>
            <CaloriesTotal />
            <MealCard />
          </>}
        />
        <Route path={'/new-meal'} element={<NewMeal />} />
        <Route path={'/edit-meal/:id'} element={<EditMeal />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={2000} />
    </Layout>
  )
}

export default App
