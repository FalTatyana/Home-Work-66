import { useEffect, useState } from "react"
import axiosApi from "../AxiosApi/AxiosApi"
import type { Meal } from "../../types"
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const MealCard = () => {

    const [meal, setMeal] = useState<Meal[]>([]);

    useEffect(() => {
        const getMeal = async () => {
            const { data } = await axiosApi.get<Meal[] | null>('/meal.json')

            if (!data) {
                return
            }

            const mealList: Meal[] = Object.keys(data).map(key => {
                return {
                    id: key,
                    description: data[key].description,
                    calories: data[key].calories,
                    time: data[key].time,
                    type: data[key].type,
                }
            });
            setMeal(mealList);
        };
        void getMeal();
    }, []);

    const deleteMeal = async (id: string) => {
        await axiosApi.delete(`/meal/${id}.json`)
        setMeal(prev => prev.filter(m => m.id !== id));
        toast.info("Meal deleted");
    }

    return meal && (
        <div className='container mt-5 d-flex flex-column-reverse'>
            {meal.map(m => (
                <div key={m.id} className="card shadow-sm border-0 mb-3">
                    <div className="card-body d-flex justify-content-between align-items-center">

                        <div>
                            <h6 className="text-secondary mb-1">{m.type}</h6>
                            <h5 className="card-title mb-3 ">{m.description}</h5>
                            <small className="text-secondary">
                                {new Date(m.time).toLocaleString()}
                            </small>
                        </div>

                        <div className="d-flex align-items-center gap-3">
                            <span className="fw-bold fs-5">{m.calories} kcal</span>

                            <div className="d-flex flex-column gap-2">
                                <NavLink to={`/edit-meal/${m.id}`} className="btn btn-outline-secondary btn-sm">
                                    <i className="bi bi-pencil"></i>
                                </NavLink>

                                <button onClick={() => deleteMeal(m.id)} className="btn btn-outline-danger btn-sm">
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default MealCard