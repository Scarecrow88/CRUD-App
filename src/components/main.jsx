import React, { useState } from "react";
import EmployeeForm from "./form.jsx";
import EmployeeTable from "./table.jsx";
export default function Main ({setError}) {
    const [employees, setEmployees] = useState ([]);
    const [selectedIndex, setSelectedIndex] = useState (null);
    const handleSubmit = (data) => {
        if (selectedIndex === null) {
            setEmployees ([...employees, data]);
        } 
        else {
            const updated = [...employees];
            updated [selectedIndex] = data;
            setEmployees (updated);
            setSelectedIndex (null);
        }
    };
    const handleDelete = (index) => {
        if (window.confirm ("Are you sure to delete this record?")) {
            setEmployees (employees.filter ((_, i) => i !== index));
        }
    };
    const handleEdit = (index) => {
        setSelectedIndex (index);
    };
    return (
        <main>
            <EmployeeForm
                onSubmit={handleSubmit}
                selectedEmployee={selectedIndex !== null ? employees [selectedIndex] : null}
                resetSelection={() => setSelectedIndex (null)}
                setError={setError}
            />
            <EmployeeTable
                employees={employees}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </main>
    );
}