using LearnFlow.Application.Interfaces.Repositories;
using LearnFlow.Application.Interfaces.Services;
using LearnFlow.Domain.Entities;

namespace LearnFlow.Application.Features.Auth.Commands.Register;

public class RegisterCommandHandler
{
    private readonly IUserRepository _userRepository;
    private readonly IPasswordHasher _passwordHasher;

    public RegisterCommandHandler(IUserRepository userRepository, IPasswordHasher passwordHasher)
    {
        _passwordHasher = passwordHasher;
        _userRepository = userRepository;
    }

    public async Task<RegisterResult> HandleAsync(RegisterCommand command, CancellationToken cancellationToken = default)
    {
        var email = command.Email.Trim().ToLowerInvariant();
        
        // 1. Check email đã tồn tại chưa
        var emailExists = await _userRepository.ExistsByEmailAsync(
            email,
            cancellationToken);

        if (emailExists)
        {
            throw new InvalidOperationException(
                "Email is already registered.");
        }
        // 2. Hash password
        var passwordHash = _passwordHasher.HashPassword(
            command.Password);

        // 3. Tạo Domain User
        var user = new User(
            command.FirstName,
            command.LastName,
            email,
            passwordHash);

        // 4. Lưu User xuống database
        var createdUser = await _userRepository.AddAsync(
            user,
            cancellationToken);

        // 5. Trả kết quả
        return new RegisterResult(
            createdUser.Id,
            createdUser.FirstName,
            createdUser.LastName,
            createdUser.Email);
    }
}