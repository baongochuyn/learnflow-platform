using LearnFlow.Application.Interfaces.Repositories;
using LearnFlow.Domain.Entities;
using LearnFlow.Infrastructure.Persistence.Mappings;
using Microsoft.EntityFrameworkCore;

namespace LearnFlow.Infrastructure.Persistence.Repositories;

public class RoleRepository : IRoleRepository
{
    private readonly LearnFlowDbContext _dbContext;

    public RoleRepository(LearnFlowDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    public async Task<Role?> GetRoleByIdAsync(long id, CancellationToken cancellationToken = default)
    {
        var role = await _dbContext.roles.AsNoTracking().FirstOrDefaultAsync(r => r.id == id);
        return role?.ToDomain();
    }
}