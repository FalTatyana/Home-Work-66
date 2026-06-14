import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Meal } from "../../types";
import axiosApi from "../AxiosApi/AxiosApi";

const CaloriesTotal = () => {

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const getMeal = async () => {
            const { data } = await axiosApi.get<Meal[] | null>('/meal.json')

            if (!data) {
                return
            }

            const totalCalories = Object.keys(data).reduce(
                (sum, key) => sum + data[key].calories,
                0
            );
            setTotal(totalCalories)
        };
        void getMeal();
    }, []);

    return (
        <div className="container mt-4">
            <div className="card shadow-sm">
                <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                        <small className="text-secondary">Total calories</small>
                        <h2 className="mb-0">{total} kcal</h2>
                    </div>

                    <Link to="/new-meal" className="btn btn-success">
                        Add new meal
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CaloriesTotal;