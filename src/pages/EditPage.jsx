import React, { useState } from "react";
import "../styles/EditPage.css";

const EditPage = () => {
    const [editingField, setEditingField] = useState(null);
    const [errors, setErrors] = useState({});

    const handleEditClick = (field) => {
        setEditingField(editingField === field ? null : field);
    };

    const handleCancel = () => {
        setEditingField(null);
        setErrors({});
    };

    const handleBlur = (field, value) => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            [field]: value.trim() === "" ? "This field is required to fill in" : "",
        }));
    };

    return (
        <div className="edit-container">
            <div className="settings-container">
                <h2 className="section-title">Account</h2>
                <div className="settings-section">
                    {/* EMAIL CHANGE */}
                    <div className="setting-item">
                        <span>Email</span>
                        <span className="change" onClick={() => handleEditClick("email")}>
                            Change
                        </span>
                    </div>
                    {editingField === "email" && (
                        <div className="edit-fields">
                            <input
                                type="text"
                                placeholder="New email address"
                                className={errors.email ? "error" : ""}
                                onBlur={(e) => handleBlur("email", e.target.value)}
                            />
                            {errors.email && <p className="error-text">{errors.email}</p>}

                            <input
                                type="text"
                                placeholder="Confirm the new email address"
                                className={errors.confirmEmail ? "error" : ""}
                                onBlur={(e) => handleBlur("confirmEmail", e.target.value)}
                            />
                            {errors.confirmEmail && <p className="error-text">{errors.confirmEmail}</p>}

                            <input
                                type="password"
                                placeholder="Confirm the password"
                                className={errors.password ? "error" : ""}
                                onBlur={(e) => handleBlur("password", e.target.value)}
                            />
                            {errors.password && <p className="error-text">{errors.password}</p>}

                            <div className="button-group">
                                <button>Update Email</button>
                                <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                            </div>
                        </div>
                    )}

                    <div className="setting-item">
                        <span>Language</span>
                        <span className="value">English</span>
                        <span className="change" onClick={() => handleEditClick("language")}>
                            Change
                        </span>
                    </div>
                    {editingField === "language" && (
                        <div className="edit-fields">
                            <select className="date-field">
                                <option>English</option>
                                <option>Russian</option>
                                <option>Kazakh</option>
                            </select>
                            <div className="button-group">
                                <button>Save</button>
                                <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                            </div>
                        </div>
                    )}
                </div>

                <h2 className="section-title">Account Security</h2>
                <div className="settings-section">
                    <div className="setting-item">
                        <span>Password</span>
                        <span className="change" onClick={() => handleEditClick("password")}>
                            Change
                        </span>
                    </div>
                    {editingField === "password" && (
                        <div className="edit-fields">
                            <input
                                type="password"
                                placeholder="Current password"
                                className={errors.currentPassword ? "error" : ""}
                                onBlur={(e) => handleBlur("currentPassword", e.target.value)}
                            />
                            {errors.currentPassword && <p className="error-text">{errors.currentPassword}</p>}

                            <input
                                type="password"
                                placeholder="New password"
                                className={errors.newPassword ? "error" : ""}
                                onBlur={(e) => handleBlur("newPassword", e.target.value)}
                            />
                            {errors.newPassword && <p className="error-text">{errors.newPassword}</p>}

                            <input
                                type="password"
                                placeholder="Confirm the new password"
                                className={errors.confirmPassword ? "error" : ""}
                                onBlur={(e) => handleBlur("confirmPassword", e.target.value)}
                            />
                            {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}

                            <button>Save</button>
                        </div>
                    )}

                    <h2 className="section-title">Personal Information</h2>
                    <div className="settings-section">
                        <div className="setting-item">
                            <span>Name</span>
                            <span className="change" onClick={() => handleEditClick("name")}>
                            Change
                        </span>
                        </div>
                        {editingField === "name" && (
                            <div className="edit-fields">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className={errors.name ? "error" : ""}
                                    onBlur={(e) => handleBlur("name", e.target.value)}
                                />
                                {errors.name && <p className="error-text">{errors.name}</p>}
                                <div className="button-group">
                                    <button>Save</button>
                                    <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                                </div>
                            </div>
                        )}

                        <div className="setting-item">
                            <span>Gender</span>
                            <span className="change" onClick={() => handleEditClick("gender")}>
                            Change
                        </span>
                        </div>
                        {editingField === "gender" && (
                            <div className="edit-fields">
                                <select className="date-field">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                                <div className="button-group">
                                    <button>Save</button>
                                    <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                                </div>
                            </div>
                        )}

                        <div className="setting-item">
                            <span>Date of Birth</span>
                            <span className="change" onClick={() => handleEditClick("dob")}>
                            Change
                        </span>
                        </div>
                        {editingField === "dob" && (
                            <div className="edit-fields">
                                <select className="date-field">
                                    <option>15</option>
                                </select>
                                <select className="date-field">
                                    <option>September</option>
                                </select>
                                <select className="date-field">
                                    <option>2004</option>
                                </select>
                                <div className="button-group">
                                    <button>Save</button>
                                    <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditPage;
