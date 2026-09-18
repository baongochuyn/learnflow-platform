import { useState } from "react";
import { DialogTitle, DialogContent, TextField, Button, Typography, DialogActions, Link } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useAuth } from "@/context/AuthContext";

export default function SignUpDialog({ 
  open, 
  onClose,
  onLoginClick ,
  onSignUpSuccess
}: { 
  open: boolean; 
  onClose: () => void; 
  onLoginClick: () => void;
  onSignUpSuccess: () => void;}
) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const { signUp } = useAuth();

    async function handleSignUp() {
        const reponse = await signUp(username, email, password, confirmPassword);
        if (reponse.success) {
          //TODO : Handle successful sign-up (e.g., show a success message, close the dialog, etc.)
          onSignUpSuccess();
          return;
        } else {
            setError(reponse.message);
        }
    }

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
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        Sign Up
      </DialogTitle>
      <DialogContent sx={{
        width: "100%",
        mb: 2}}
        >
        <TextField
            label="Username" type="text" placeholder="Username" sx={{ width: "100%", marginBottom: "10px",marginTop: "10px", padding: "8px" }} 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
            label="Email" type="email" placeholder="Email" sx={{ width: "100%", marginBottom: "10px", padding: "8px" }} 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        <TextField
            label="Password" type="password" placeholder="Password" sx={{ width: "100%", marginBottom: "10px", padding: "8px" }} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirm Password" type="password" placeholder="Confirm Password" sx={{ width: "100%", marginBottom: "10px", padding: "8px" }} 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error && (
          <Typography color="error">{error}</Typography>
        )}

        <Button onClick={handleSignUp} variant="contained" sx={{ width: "100%" }}>Sign Up</Button>
      </DialogContent>
      <DialogActions>
         <DialogActions sx={{ padding: "20px", textAlign: "center" }}>
            <Typography>
                Do you have an account?
                <Link 
                    component="button"
                    sx={{ ml: 0.5 }}
                    onClick={onLoginClick}
                >
                    Log in
                </Link>
            </Typography>
        </DialogActions>
        <Button onClick={onClose}>Cancel</Button>

      </DialogActions>
    </Dialog>
  );
}