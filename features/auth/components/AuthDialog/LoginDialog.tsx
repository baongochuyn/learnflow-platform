import { useState } from "react";
import { DialogTitle, DialogContent, TextField, Button, Typography, DialogActions, Link, InputAdornment, IconButton} from "@mui/material";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";

import Dialog from "@mui/material/Dialog";
import { useAuth } from "@/context/AuthContext";

export default function LoginDialog({ 
    open, 
    onClose, 
    onSignUpClick,
    onLoginSuccess
}: { 
    open: boolean;
    onClose: () => void;
    onSignUpClick: () => void;
    onLoginSuccess: () => void;
 }) 
    {
    const { login } = useAuth();
    const [error, setError] = useState<string | null>(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    async function handleLogin(){
        const reponse = await login(username, password); 
        if (reponse.success){
            onLoginSuccess();
            setUsername("");
            setPassword("");
            onClose();
        }else {
            setError(reponse.message);
        }
    };
    

    return (
    <Dialog open={open} onClose={onClose}
    fullWidth
      maxWidth="xs"
      slotProps={{
        paper: {
          sx: {
            bgcolor: "rgba(15, 23, 42, 0.95)",
            backdropFilter: "blur(16px)",
            color: "#f8fafc",
            borderRadius: 1,
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
            p: 1,
          },
        },
      }}>
        <DialogTitle sx={{ m: 0, p: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>Sign in to LearnFlow</DialogTitle>
        <DialogContent sx={{
        width: "100%",
        mb: 2
        }}>
            {error && (
                <Typography color="error" sx={{ mb: 2 }}>
                    {error}
                </Typography>
            )}
            <TextField label="Username" type="text" placeholder="Username" sx={{ width: "100%", marginBottom: "10px", padding: "8px" }} 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            
            <TextField label="Password"  placeholder="Password" sx={{ width: "100%", marginBottom: "10px", padding: "8px" }} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            
            <Button 
                onClick={handleLogin} 
                variant="contained" 
                sx={{ width: "100%" }}
                disabled={!username || !password}
            >
                Login
            </Button>
        </DialogContent>
        <DialogActions sx={{ padding: "20px", textAlign: "center" }}>
            <Typography>
                Don't have an account?
                <Link 
                    component="button"
                    sx={{ ml: 0.5 }}
                    onClick={onSignUpClick}
                >
                    Sign up
                </Link>
            </Typography>
        </DialogActions>
    </Dialog>
    );
}