import React from "react";
import "../css/tableContent.css";

export default function EmployeeTable ({employees, onEdit, onDelete}) {
    return (
        <div className="boxtab">
            <table id="employeelist">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Description</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp, index) => (
                        <tr key={index}>
                            <td>{emp.empname}</td>
                            <td>{emp.empcode}</td>
                            <td>{emp.descname}</td>
                            <td>
                                <div className="initcell" id="init">
                                    <a className="butbox" onClick={() => onDelete (index)}>
                                        Delete
                                    </a>
                                    <a className="butbox" onClick={() => onEdit (index)}>
                                        Edit
                                    </a>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
