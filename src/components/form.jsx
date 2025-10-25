import React, { useState, useEffect } from "react";
import "../css/formContent.css";
export default function EmployeeForm ({onSubmit, selectedEmployee, resetSelection, setError}) {
    const [formData, setFormData] = useState ({
        empname: "",
        empcode: "",
        descname: "",
    });
    useEffect (() => {
        if (selectedEmployee) {
            setFormData (selectedEmployee);
        }
    }, [selectedEmployee]);
    const handleChange = (e) => {
        setFormData ({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault ();
        if (!formData.empname || !formData.empcode || !formData.descname) {
            setError ("The fields are required");
            return;
        }
        onSubmit (formData);
        setFormData ({ 
            empname: "", 
            empcode: "", 
            descname: "" 
        });
        resetSelection ();
    };
    return (
        <div className="databox">
            <form id="formbox" onSubmit={handleSubmit}>
                <h2>Add Employee</h2>
                <div>
                    <input
                        id="name"
                        className="textfield"
                        name="empname"
                        autoComplete="off"
                        type="text"
                        placeholder="Enter employee name"
                        value={formData.empname}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        id="code"
                        className="textfield"
                        name="empcode"
                        autoComplete="off"
                        type="text"
                        placeholder="Enter employee code"
                        value={formData.empcode}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <textarea
                        id="description"
                        className="textdesc"
                        name="descname"
                        rows="2"
                        placeholder="Enter description"
                        value={formData.descname}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button className="formbutton" type="submit">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
