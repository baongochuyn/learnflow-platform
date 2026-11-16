namespace LearnFlow.Application.Features.Auth.Queries.GetCurrentUser;

public record GetCurrentUserResult(
    long Id,
    string FirstName,
    string LastName,
    string Email,
    string? AvatarUrl,
    string? Address,
    string? City,
    IReadOnlyList<string> Roles
);