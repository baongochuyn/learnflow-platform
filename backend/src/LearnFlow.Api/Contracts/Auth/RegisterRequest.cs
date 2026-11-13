using System.ComponentModel.DataAnnotations;

namespace LearnFlow.Api.Contracts.Auth;

public class RegisterRequest
{
    [Required(ErrorMessage = "First name is required.")]
    [StringLength(100, MinimumLength = 1)]
    public string FirstName { get; set; } = string.Empty;

    [Required(ErrorMessage = "Last name is required.")]
    [StringLength(100, MinimumLength = 1)]
    public string LastName { get; set; } = string.Empty;

    [Required(ErrorMessage = "Email is required.")]
    [EmailAddress(ErrorMessage = "Invalid email address.")]
    [StringLength(255)]
    public string Email { get; set; } = string.Empty;

    [Required(ErrorMessage = "Password is required.")]
    [MinLength(8, ErrorMessage = "Password must contain at least 8 characters.")]
    [MaxLength(128, ErrorMessage = "Password cannot exceed 128 characters.")]
    public string Password { get; set; } = string.Empty;
    
    [Required]
    [Range(1, long.MaxValue)]
    public long RoleId { get; set; }
}