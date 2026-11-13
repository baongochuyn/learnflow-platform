namespace LearnFlow.Api.Contracts.Auth;

public record LoginResponse(
    string AccessToken,
    int ExpiresIn,
    string TokenType,
    UserInfoResponse User
);

public record UserInfoResponse(
    long Id,
    string FirstName,
    string LastName,
    string Email,
    string? AvatarUrl,
    IReadOnlyList<string> Roles
);