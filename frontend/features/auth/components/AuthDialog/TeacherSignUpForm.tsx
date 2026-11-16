import { useState } from "react";
import { Box, TextField, Button, IconButton, InputAdornment } from "@mui/material";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";

import { validateName, validatePassword, validateEmail } from "@/validators/authValidator";
import type { TeacherSignUpFormData } from "@/types/auth";

export default function TeacherSignUpForm({ onTeacherSignUp }: { onTeacherSignUp: (teacher: TeacherSignUpFormData) => Promise<boolean | void> | void }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [firstNameError, setFirstNameError] = useState<string | null>(null);
    const [lastNameError, setLastNameError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>(null);

    async function handleSignUp() {
        const teacher: TeacherSignUpFormData = {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim(),
            password: password,
            confirmPassword: confirmPassword,
        };
        const isSuccess = await onTeacherSignUp(teacher);
        if (isSuccess !== false) {
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        }
    }

    function handleFirstNameChange(value: string) {
        setFirstName(value);
        setFirstNameError(validateName(value, "First name"));
    }

    function handleLastNameChange(value: string) {
        setLastName(value);
        setLastNameError(validateName(value, "Last name"));
    }

    function handleEmailChange(value: string) {
        setEmail(value);
        setEmailError(validateEmail(value));
    }

    function handlePasswordChange(value: string) {
        setPassword(value);
        setPasswordError(validatePassword(value));
    }

    function handleConfirmPasswordChange(value: string) {
        setConfirmPassword(value);
        if (value !== password) {
            setConfirmPasswordError("Passwords do not match");
        } else {
            setConfirmPasswordError(null);
        }
    }

    return (
        <Box>
            <TextField
                label="First Name" type="text" placeholder="First Name" sx={{ width: "100%", marginBottom: "10px", marginTop: "10px", padding: "8px" }}
                value={firstName}
                error={!!firstNameError}
                helperText={firstNameError}
                onChange={(e) => handleFirstNameChange(e.target.value)}
            />

            <TextField
                label="Last Name" type="text" placeholder="Last Name" sx={{ width: "100%", marginBottom: "10px", padding: "8px" }}
                value={lastName}
                error={!!lastNameError}
                helperText={lastNameError}
                onChange={(e) => handleLastNameChange(e.target.value)}
            />

            <TextField
                label="Email" type="email" placeholder="Email" sx={{ width: "100%", marginBottom: "10px", padding: "8px" }}
                value={email}
                error={!!emailError}
                helperText={emailError}
                onChange={(e) => handleEmailChange(e.target.value)}
            />

            <TextField
                label="Password" placeholder="Password" sx={{ width: "100%", marginBottom: "10px", padding: "8px" }}
                value={password}
                error={!!passwordError}
                helperText={passwordError}
                onChange={(e) => handlePasswordChange(e.target.value)}
                type={showPassword ? "text" : "password"}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    edge="end"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    },
                }}
            />

            <TextField
                label="Confirm Password" placeholder="Confirm Password" sx={{ width: "100%", marginBottom: "10px", padding: "8px" }}
                value={confirmPassword}
                error={!!confirmPasswordError}
                helperText={confirmPasswordError}
                onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                type={showConfirmPassword ? "text" : "password"}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                                    edge="end"
                                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                >
                                    {showConfirmPassword ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    },
                }}
            />

            <Button
                onClick={handleSignUp}
                variant="contained"
                sx={{ width: "100%" }}
                disabled={!!firstNameError || !!lastNameError || !!emailError || !!passwordError || !!confirmPasswordError || !firstName || !lastName || !email || !password || !confirmPassword}
            >
                Sign Up as Teacher
            </Button>
        </Box>
    );
}