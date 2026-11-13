using LearnFlow.Domain.Entities;

namespace LearnFlow.Application.Interfaces.Services;

public interface IJwtTokenGenerator
{
    string GenerateAccessToken(
        long userId,
        string email,
        IReadOnlyCollection<string> roles);

    int ExpiresInSeconds { get; }
}