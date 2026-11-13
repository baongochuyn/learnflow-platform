using LearnFlow.Domain.Entities;
using LearnFlow.Infrastructure.Persistence.Entities;

namespace LearnFlow.Infrastructure.Persistence.Mappings;

public static class UserMapping
{
    // Persistence Entity -> Domain Entity
    public static User ToDomain(this user entity)
    {
        return User.Rehydrate(
            id: entity.id,
            firstName: entity.first_name,
            lastName: entity.last_name,
            email: entity.email,
            passwordHash: entity.password_hash,
            avatarUrl: entity.avatar_url,
            address: entity.address,
            city: entity.city,
            createdAt: entity.created_at,
            updatedAt: entity.updated_at
        );
    }

    // Domain Entity -> Persistence Entity
    public static user ToPersistence(this User domain)
    {
        return new user
        {
            id = domain.Id,
            first_name = domain.FirstName,
            last_name = domain.LastName,
            email = domain.Email,
            password_hash = domain.PasswordHash,
            avatar_url = domain.AvatarUrl,
            address = domain.Address,
            city = domain.City,
            created_at = domain.CreatedAt,
            updated_at = domain.UpdatedAt
        };
    }
}