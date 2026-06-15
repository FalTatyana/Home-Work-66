import { MEAL_TYPE } from "../../constants"
import { useState, type ChangeEvent, type SubmitEvent, useEffect } from "react"
import type { AddMeal, Meal } from "../../types"
import axiosApi from "../AxiosApi/AxiosApi"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

interface Props {
    isEdit?: boolean
    meal?: Meal
    onSubmit?: (meal: AddMeal) => Promise<void>;
}


const NewMeal = ({isEdit = false, meal, onSubmit}: Props) => {

    const navigate = useNavigate();

    const [form, setForm] = useState<AddMeal>({
        description: '',
        calories: '',
        type: '',
    })

    useEffect(() => {
        if (meal) {
            setForm({
                description: meal.description,
                calories: meal.calories,
                type: meal.type,
            });
        }
    }, [meal]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: name === 'calories' ? Number(value) : value,
            time: Date.now(),
        }));
    };

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isEdit && onSubmit) {
            await onSubmit(form);
            return;
        }

        if (!form.description.trim()) {
            toast.error("Description cannot be empty");
            return;
        }
    
        if (!form.type) {
            toast.error("Please select meal type");
            return;
        }
    
        if (!form.calories) {
            toast.error("Calories must be greater than 0");
            return;
        }

        await axiosApi.post('/meal.json', {
            ...form,
            time: Date.now(),
        });

        toast.success("Meal added successfully!");
        navigate(`/`);
    }

    return (
        <div className='container mt-5'>
            <form onSubmit={handleSubmit}>
                <h2>{isEdit ? 'Edit meal' : 'Add new meal'}</h2>
                <select
                    className="form-select mb-3 mt-3"
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                >
                    <option>Choose time of meal</option>
                    {MEAL_TYPE.map(m => (
                        <option key={m} value={m}>{m}</option>
                    ))}
                </select>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">What did you eat?</label>
                    <textarea
                        className="form-control"
                        id="description"
                        rows={2}
                        name="description"
                        onChange={handleChange}
                        value={form.description}
                    >
                    </textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">How much calories?</label>
                    <input
                        type="number"
                        min="0"
                        step="1"
                        className="form-control"
                        id="calories"
                        placeholder="Calories"
                        name="calories"
                        onChange={handleChange}
                        value={form.calories}
                    />
                </div>
                <button type="submit" className="btn btn-success">{isEdit ? 'Edit' : 'Add'}</button>
            </form>
        </div>
    )
}

export default NewMeal