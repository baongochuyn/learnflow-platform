namespace LearnFlow.Api.Contracts.Users;

public record CurrentUserResponse(
    long Id,
    string FirstName,
    string LastName,
    string Email,
    string? AvatarUrl,
    string? Address,
    string? City,
    IReadOnlyList<string> Roles
);