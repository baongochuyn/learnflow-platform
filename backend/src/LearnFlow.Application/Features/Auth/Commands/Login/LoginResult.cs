namespace LearnFlow.Application.Features.Auth.Commands.Login;

public record LoginResult(
    string AccessToken,
    int ExpiresIn,
    string TokenType,
    UserInfo User
);

public record UserInfo(
    long Id,
    string FirstName,
    string LastName,
    string Email,
    string? AvatarUrl,
    IReadOnlyList<string> Roles
);