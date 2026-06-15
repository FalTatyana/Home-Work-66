import { useParams } from "react-router-dom";
import FormMeal from "../FormMeal/FormMeal"
import { useState, useEffect } from "react";
import axiosApi from "../AxiosApi/AxiosApi";
import type { Meal } from "../../types";
import { toast } from "react-toastify";

const EditMeal = () => {

    const { id } = useParams();
    const [meal, setMeal] = useState<Meal | null>(null);

    useEffect(() => {

        const fetchPost = async () => {
            const { data } = await axiosApi.get<Meal>(`/meal/${id}.json`);
            setMeal(data);
        };
        void fetchPost()
    }, [id]);

    const editMeal = async (post: Meal) => {
        await axiosApi.put(`/meal/${id}.json`, post);
        toast.success("Meal updated successfully!");
    }

  return (
    <div className="container mt-5">
        {meal && <FormMeal meal={meal} isEdit onSubmit={editMeal}/>}
    </div>
  )
}

export default EditMeal