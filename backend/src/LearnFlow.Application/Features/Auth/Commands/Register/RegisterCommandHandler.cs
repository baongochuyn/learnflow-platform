using LearnFlow.Application.Interfaces.Repositories;
using LearnFlow.Application.Interfaces.Services;
using LearnFlow.Domain.Entities;

namespace LearnFlow.Application.Features.Auth.Commands.Register;

public class RegisterCommandHandler
{
    private readonly IRoleRepository _roleRepository;
    private readonly IUserRepository _userRepository;
    private readonly IPasswordHasher _passwordHasher;

    public RegisterCommandHandler(
        IUserRepository userRepository,
        IPasswordHasher passwordHasher,
        IRoleRepository roleRepository
        )
    {
        _passwordHasher = passwordHasher;
        _userRepository = userRepository;
        _roleRepository = roleRepository;
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

        // check valid role
        var role = await _roleRepository.GetRoleByIdAsync(command.Role, cancellationToken);
        if (role is null || role.Id == 1)
        {
            throw new InvalidOperationException("Invalid role.");
        }
        
        // Hash password
        var passwordHash = _passwordHasher.HashPassword(
            command.Password);
        
        // Create Domain User
        var user = new User(
            command.FirstName,
            command.LastName,
            email,
            passwordHash);
        
        // Assign Role to User
        user.AssignRole(role);
        
        // save User and role
        var createdUser = await _userRepository.AddAsync(
            user,
            cancellationToken);

        return new RegisterResult(
            createdUser.Id,
            createdUser.FirstName,
            createdUser.LastName,
            createdUser.Email);
    }
}