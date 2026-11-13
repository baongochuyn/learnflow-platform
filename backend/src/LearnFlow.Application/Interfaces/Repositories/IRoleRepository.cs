using LearnFlow.Domain.Entities;

namespace LearnFlow.Application.Interfaces.Repositories;

public interface IRoleRepository
{
    Task<Role?> GetRoleByIdAsync(long id, CancellationToken cancellationToken);
}