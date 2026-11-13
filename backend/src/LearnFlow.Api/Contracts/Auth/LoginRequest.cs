using System.ComponentModel.DataAnnotations;

namespace LearnFlow.Api.Contracts.Auth;

public class LoginRequest
{
    [Required(ErrorMessage = "Email is required.")]
    [EmailAddress(ErrorMessage = "Invalid email address.")]
    [StringLength(255)]
    public string Email { get; set; } = string.Empty;
    
    [Required(ErrorMessage = "Password is required.")]
    [StringLength(128, MinimumLength = 8)]
    public string Password { get; set; } = string.Empty;
}