using LearnFlow.Application.Interfaces.Repositories;
using LearnFlow.Domain.Entities;

namespace LearnFlow.Application.Features.Auth.Queries.GetCurrentUser;

public class GetCurrentUserQueryHandler
{
    private readonly IUserRepository _userRepository;

    public GetCurrentUserQueryHandler(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<GetCurrentUserResult?> HandleAsync(GetCurrentUserQuery query, CancellationToken cancellationToken)
    {
        User? user = await _userRepository.GetByIdAsync(query.UserId, cancellationToken);
        
        if (user is null)
            return null;

        var roles = user.Roles.Select(role => role.Name).Distinct().ToList();
        
        
        return new GetCurrentUserResult(
            user.Id,
            user.FirstName,
            user.LastName,
            user.Email,
            user.AvatarUrl,
            user.Address,
            user.City,
            roles
            );
    }
}