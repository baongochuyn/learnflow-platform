using LearnFlow.Application.Interfaces.Repositories;
using LearnFlow.Domain.Entities;
using LearnFlow.Infrastructure.Persistence;
using LearnFlow.Infrastructure.Persistence.Entities;
using LearnFlow.Infrastructure.Persistence.Mappings;
using Microsoft.EntityFrameworkCore;

using DomainRole = LearnFlow.Domain.Entities.Role;
using PersistenceUser = LearnFlow.Infrastructure.Persistence.Entities.user;

namespace LearnFlow.Infrastructure.Persistence.Repositories;

public class UserRepository : IUserRepository
{
    private readonly LearnFlowDbContext _dbContext;

    public UserRepository(LearnFlowDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<User?> GetByIdAsync(long id, CancellationToken cancellationToken = default)
    {
        var entity = await _dbContext.users
            .Include(u => u.user_roles)
            .ThenInclude(ur => ur.role)
            .FirstOrDefaultAsync(
                u => u.id == id,
                cancellationToken);

        return entity is null ? null : MapToDomain(entity);
    }

    public async Task<User?> GetByEmailAsync(string email, CancellationToken cancellationToken = default)
    {
        if (string.IsNullOrWhiteSpace(email))
            return null;

        var normalizedEmail = email.Trim().ToLowerInvariant();

        var entity = await _dbContext.users
            .AsNoTracking()
            .Include(u => u.user_roles)
            .ThenInclude(ur => ur.role)
            .FirstOrDefaultAsync(x => x.email == normalizedEmail, cancellationToken);

        return entity is null ? null : MapToDomain(entity);
    }

    public async Task<bool> ExistsByEmailAsync(string email, CancellationToken cancellationToken = default)
    {
        if (string.IsNullOrWhiteSpace(email))
            return false;

        var normalizedEmail = email.Trim().ToLowerInvariant();

        return await _dbContext.users
            .AsNoTracking()
            .AnyAsync(x => x.email == normalizedEmail, cancellationToken);
    }

    public async Task<User> AddAsync(User user, CancellationToken cancellationToken = default)
    {
        var entity = user.ToPersistence();
        foreach (var role in user.Roles)
        {
            var userRole = new user_role()
            {
                role_id = role.Id,
                user = entity,
                assigned_at = DateTime.UtcNow
            };
            await _dbContext.user_roles.AddAsync(userRole, cancellationToken);
        }
        
        await _dbContext.users.AddAsync(
            entity,
            cancellationToken);

        await _dbContext.SaveChangesAsync(cancellationToken);

        return entity.ToDomain();
    }

    public async Task UpdateAsync(User user, CancellationToken cancellationToken = default)
    {
        var entity = await _dbContext.users
            .FirstOrDefaultAsync(
                u => u.id == user.Id,
                cancellationToken);

        if (entity is null)
        {
            throw new KeyNotFoundException(
                $"User with ID {user.Id} was not found.");
        }

        entity.first_name = user.FirstName;
        entity.last_name = user.LastName;
        entity.email = user.Email;
        entity.password_hash = user.PasswordHash;
        entity.avatar_url = user.AvatarUrl;
        entity.address = user.Address;
        entity.city = user.City;
        entity.updated_at = user.UpdatedAt;

        await _dbContext.SaveChangesAsync(cancellationToken);
    }
    private static User MapToDomain(PersistenceUser entity)
    {
        var domainUser = entity.ToDomain();

        foreach (var userRole in entity.user_roles)
        {
            var domainRole = new DomainRole(
                userRole.role.id,
                userRole.role.name,
                userRole.role.description);

            domainUser.AssignRole(domainRole);
        }

        return domainUser;
    }
}