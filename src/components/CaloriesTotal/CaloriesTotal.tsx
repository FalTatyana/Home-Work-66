import { Link } from "react-router-dom";

const CaloriesTotal = () => {
    return (
        <div className="container mt-4">
            <div className="card shadow-sm">
                <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                        <small className="text-secondary">Total calories</small>
                        <h2 className="mb-0">500 kcal</h2>
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