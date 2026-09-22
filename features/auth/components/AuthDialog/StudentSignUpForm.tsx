
import { useState } from "react";
import { Box, TextField, Button, IconButton, InputAdornment } from "@mui/material";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";

import { validateUsername, validatePassword, validateEmail } from "@/validators/authValidator";
import { StudentSignUpFormData } from "@/types/auth";


export default function StudentSignUpForm({ onStudentSignUp}: { onStudentSignUp: (user: StudentSignUpFormData) => void }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [usernameError, setUsernameError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>(null);

    async function handleSignUp() {
        const student = {
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        };
        onStudentSignUp(student);
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    function handleUsernameChange(e: string) {
        setUsername(e);
        const error = validateUsername(e);
        setUsernameError(error);
    }

    function handleEmailChange(e: string) {
        setEmail(e);
        const error = validateEmail(e);
        setEmailError(error);
    }

    function handlePasswordChange(e: string) {
        setPassword(e);
        const error = validatePassword(e);
        setPasswordError(error);
    }

    function handleConfirmPasswordChange(e: string) {
        setConfirmPassword(e);
        if (e !== password) {
            setConfirmPasswordError("Passwords do not match");
        } else {
            setConfirmPasswordError(null);
        }
    }

    return (
        <Box>
            <TextField
                label="Username" type="text" placeholder="Username" sx={{ width: "100%", marginBottom: "10px",marginTop: "10px", padding: "8px" }} 
                value={username}
                error={!!usernameError}
                helperText={usernameError}
                onChange={(e) => handleUsernameChange(e.target.value)}
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
                                {showPassword ? (
                                <VisibilityOffRoundedIcon />
                                ) : (
                                <VisibilityRoundedIcon />
                                )}
                            </IconButton>
                            </InputAdornment>
                        ),
                    },
                }}
            />
            <TextField
                label="Confirm Password" 
                 placeholder="Confirm Password" sx={{ width: "100%", marginBottom: "10px", padding: "8px" }} 
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
                                {showConfirmPassword ? (
                                <VisibilityOffRoundedIcon />
                                ) : (
                                <VisibilityRoundedIcon />
                                )}
                            </IconButton>
                            </InputAdornment>
                        ),
                        },
                }}
            />

            <Button onClick={handleSignUp} variant="contained" sx={{ width: "100%" }}
            disabled={!!usernameError || !!emailError || !!passwordError || !!confirmPasswordError || !username || !email || !password || !confirmPassword}
            >Sign Up</Button>
        </Box>
    )}