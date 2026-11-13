using LearnFlow.Domain.Entities;
using LearnFlow.Infrastructure.Persistence.Entities;

namespace LearnFlow.Infrastructure.Persistence.Mappings;

public static class RoleMapping
{
    // Persistence Entity -> Domain Entity
    public static Role ToDomain(this role entity)
    {
        return Role.Dehydrate(
            id: entity.id,
            name: entity.name,
            description: entity.description
        );
    }
    // Domain Entity -> Persistence Entity
    public static role ToPersistence(this Role domain)
    {
        return new role
            {
                id = domain.Id, 
                name = domain.Name, 
                description = domain.Description
            }
         ;
    }
}