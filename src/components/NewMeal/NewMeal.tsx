import { useNavigate } from "react-router-dom"
import { MEAL_TYPE } from "../../constants"
import { useState, type ChangeEvent, type SubmitEvent } from "react"
import type { AddMeal } from "../../types"
import axiosApi from "../AxiosApi/AxiosApi"

const NewMeal = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState<AddMeal>({
        description: '',
        calories: 0,
        type: '',
    })

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

        await axiosApi.post(`/meal.json`, form);
        navigate(`/`);
    }

    return (
        <div className='container mt-5'>
            <form onSubmit={handleSubmit}>
                <h2>Add new meal</h2>
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
                        id="food"
                        rows={2}
                        name="food"
                        onChange={handleChange}
                    >
                    </textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">How much calories?</label>
                    <input
                        type="text"
                        className="form-control"
                        id="calories"
                        placeholder="Calories"
                        name="calories"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </div>
    )
}

export default NewMeal