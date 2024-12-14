import React, { ChangeEvent } from "react";
interface DropdownProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ value, onChange }) => {
    return (
        <>
            <div className="dropdown-container">
                <select id="dropdown" value={value} onChange={onChange}>
                    <option value="teacher">Teacher</option>
                    <option value="admin">Admin</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                </select>
            </div>
        </>
    );
};


export default Dropdown;
