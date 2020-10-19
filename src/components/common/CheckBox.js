import React from "react";
import PropTypes from "prop-types";
// import { Checkbox } from "react-bootstrap";

const CheckBox = ({ name, label, onClick, placeholder, value, isChecked, error }) => {
    return (
        <div >

            <div>
                <label htmlFor={name}>{label}</label>
                <input
                    type="checkbox"
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onClick={onClick}
                    checked={isChecked}
                    style={{ 'width': '20% !important' }}
                />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

CheckBox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default CheckBox;
