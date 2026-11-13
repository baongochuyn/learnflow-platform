using LearnFlow.Application.Interfaces.Repositories;
using LearnFlow.Application.Interfaces.Services;
using LearnFlow.Domain.Entities;

namespace LearnFlow.Application.Features.Auth.Commands.Login;

public class LoginCommandHandler
{
    private readonly IUserRepository _userRepository;
    private readonly IPasswordHasher _passwordHasher;
    private readonly IJwtTokenGenerator _jwtTokenGenerator;
    
    public LoginCommandHandler(
        IUserRepository userRepository, 
        IPasswordHasher passwordHasher,
        IJwtTokenGenerator jwtTokenGenerator
        )
    {
        _userRepository = userRepository;
        _passwordHasher = passwordHasher;
        _jwtTokenGenerator = jwtTokenGenerator;
    }

    public async Task<LoginResult> HandleAsync(LoginCommand command, CancellationToken cancellationToken = default)
    {
        var email = command.Email.Trim().ToLowerInvariant();
        
        User? user = await _userRepository.GetByEmailAsync(email, cancellationToken);
        if (user is null || string.IsNullOrWhiteSpace(user.PasswordHash))
        {
            throw new UnauthorizedAccessException("Invalid email or password.");
        }

        bool isPasswordValid = _passwordHasher.VerifyPassword(command.Password, user.PasswordHash);

        if (!isPasswordValid)
        {
            throw new UnauthorizedAccessException("Invalid email or password.");
        }
        var roles = user.Roles
            .Select(role => role.Name)
            .Distinct()
            .ToList();
        
        var accessToken = _jwtTokenGenerator.GenerateAccessToken(
            user.Id,
            user.Email,
            roles);

        var userInfo = new UserInfo(
            user.Id,
            user.FirstName,
            user.LastName,
            user.Email,
            user.AvatarUrl,
            roles);

        return new LoginResult(
            accessToken,
            _jwtTokenGenerator.ExpiresInSeconds,
            "Bearer",
            userInfo);
    }
}