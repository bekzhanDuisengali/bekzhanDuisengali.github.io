import React, { useState } from "react";
import "../styles/EditPage.css";
import { useNavigate } from "react-router-dom";

const EditPage = () => {
    const [editingField, setEditingField] = useState(null);
    const [errors, setErrors] = useState({});
    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [confirmEmailInput, setConfirmEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [newPasswordInput, setNewPasswordInput] = useState("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

    const navigate = useNavigate();

    const handleEditClick = (field) => {
        setEditingField(editingField === field ? null : field);
        setErrors({});
    };

    const handleCancel = () => {
        setEditingField(null);
        setErrors({});
    };

    const validateField = (field, value) => {
        if (!value.trim()) return "This field is required";
        return "";
    };

    const handleSaveName = async () => {
        const userId = localStorage.getItem("userId");
        if (!userId) return;

        const error = validateField("name", nameInput);
        if (error) return setErrors({ name: error });

        try {
            const res = await fetch(`http://localhost:5001/api/users/${userId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: nameInput }),
            });

            if (res.ok) {
                alert("Name updated successfully!");
                handleCancel();
            } else {
                alert("Error updating name");
            }
        } catch (error) {
            console.error("Update error:", error);
        }
    };

    const handleSaveEmail = async () => {
        const userId = localStorage.getItem("userId");
        if (!userId) return;

        const emailError = validateField("email", emailInput);
        const confirmError = validateField("confirmEmail", confirmEmailInput);
        const passwordError = validateField("password", passwordInput);

        if (emailInput !== confirmEmailInput) {
            return setErrors({ confirmEmail: "Emails do not match" });
        }

        if (emailError || confirmError || passwordError) {
            return setErrors({
                email: emailError,
                confirmEmail: confirmError,
                password: passwordError,
            });
        }

        try {
            const res = await fetch(`http://localhost:5001/api/users/${userId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: emailInput }),
            });

            if (res.ok) {
                alert("Email updated successfully!");
                setEditingField(null);
            } else {
                const data = await res.json();
                alert("Error updating email");
            }
        } catch (error) {
            console.error("Update error:", error);
            alert("Server error");
        }
    };

    const handleChangePassword = async () => {
        const userId = localStorage.getItem("userId");
        if (!userId) return;

        const currentError = validateField("currentPassword", passwordInput);
        const newError = validateField("newPassword", newPasswordInput);
        const confirmError = validateField("confirmPassword", confirmPasswordInput);

        if (newPasswordInput !== confirmPasswordInput) {
            return setErrors({ confirmPassword: "Passwords do not match" });
        }

        if (currentError || newError || confirmError) {
            return setErrors({
                currentPassword: currentError,
                newPassword: newError,
                confirmPassword: confirmError,
            });
        }

        try {
            const res = await fetch(`http://localhost:5001/api/users/${userId}/password`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    currentPassword: passwordInput,
                    newPassword: newPasswordInput,
                }),
            });

            if (res.ok) {
                alert("Password updated successfully!");
                handleCancel();
            } else {
                alert("Error updating password");
            }
        } catch (error) {
            console.error("Password change error:", error);
        }
    };

    return (
        <div className="edit-container">
            <button onClick={() => navigate('/myprofile')} className="back-button">
                ← Back to Profile
            </button>
            <div className="settings-container">
                <h2 className="section-title">Account</h2>
                <div className="settings-section">
                    <div className="setting-item">
                        <span>Email</span>
                        <span className="change" onClick={() => handleEditClick("email")}>Change</span>
                    </div>
                    {editingField === "email" && (
                        <div className="edit-fields">
                            <input type="text" placeholder="New email address" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} className={errors.email ? "error" : ""} />
                            {errors.email && <p className="error-text">{errors.email}</p>}
                            <input type="text" placeholder="Confirm the new email address" value={confirmEmailInput} onChange={(e) => setConfirmEmailInput(e.target.value)} className={errors.confirmEmail ? "error" : ""} />
                            {errors.confirmEmail && <p className="error-text">{errors.confirmEmail}</p>}
                            <input type="password" placeholder="Confirm the password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} className={errors.password ? "error" : ""} />
                            {errors.password && <p className="error-text">{errors.password}</p>}
                            <div className="button-group">
                                <button className="save-btn" onClick={handleSaveEmail}>Save</button>
                                <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                            </div>
                        </div>
                    )}

                    <div className="setting-item">
                        <span>Name</span>
                        <span className="change" onClick={() => handleEditClick("name")}>Change</span>
                    </div>
                    {editingField === "name" && (
                        <div className="edit-fields">
                            <input type="text" placeholder="Name" value={nameInput} onChange={(e) => setNameInput(e.target.value)} className={errors.name ? "error" : ""} />
                            {errors.name && <p className="error-text">{errors.name}</p>}
                            <div className="button-group">
                                <button className="save-btn" onClick={handleSaveName}>Save</button>
                                <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                            </div>
                        </div>
                    )}
                </div>

                <h2 className="section-title">Account Security</h2>
                <div className="settings-section">
                    <div className="setting-item">
                        <span>Password</span>
                        <span className="change" onClick={() => handleEditClick("password")}>Change</span>
                    </div>
                    {editingField === "password" && (
                        <div className="edit-fields">
                            <input type="password" placeholder="Current password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} className={errors.currentPassword ? "error" : ""} />
                            {errors.currentPassword && <p className="error-text">{errors.currentPassword}</p>}
                            <input type="password" placeholder="New password" value={newPasswordInput} onChange={(e) => setNewPasswordInput(e.target.value)} className={errors.newPassword ? "error" : ""} />
                            {errors.newPassword && <p className="error-text">{errors.newPassword}</p>}
                            <input type="password" placeholder="Confirm the new password" value={confirmPasswordInput} onChange={(e) => setConfirmPasswordInput(e.target.value)} className={errors.confirmPassword ? "error" : ""} />
                            {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
                            <div className="button-group">
                                <button className="save-btn" onClick={handleChangePassword}>Save</button>
                                <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditPage;
