import { useEffect, useState } from "react"
import axiosApi from "../AxiosApi/AxiosApi"
import type { Meal } from "../../types"

const MealCard = () => {

    const [meal, setMeal] = useState<Meal[]>([]);

    useEffect(() => {
        const getMeal = async () => {
            const { data } = await axiosApi.get<Meal[] | null>('/meal.json')

            const mealList: Meal[] = Object.keys(data).map(key => {
                return {
                    id: key,
                    food: data[key].food,
                    calories: data[key].calories,
                    time: data[key].time,
                }
            });
            setMeal(mealList);
        };
        void getMeal();
    }, []);

    return meal && (
        <>
            {meal.map(m => (
                <div key={m.id} className="card shadow-sm border-0 mb-3">
                    <div className="card-body d-flex justify-content-between align-items-center">

                        <div>
                            <h6 className="text-secondary mb-1">{m.id}</h6>
                            <h5 className="card-title mb-3 ">{m.food}</h5>
                            <small className="text-secondary">
                                {new Date(m.time).toLocaleString()}
                            </small>
                        </div>

                        <div className="d-flex align-items-center gap-3">
                            <span className="fw-bold fs-5">{m.calories}</span>

                            <div className="d-flex flex-column gap-2">
                                <button className="btn btn-outline-secondary btn-sm">
                                    <i className="bi bi-pencil"></i>
                                </button>

                                <button className="btn btn-outline-danger btn-sm">
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </>
    );
};

export default MealCard