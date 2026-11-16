using System.Security.Claims;
using LearnFlow.Api.Contracts.Users;
using LearnFlow.Application.Features.Auth.Queries.GetCurrentUser;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LearnFlow.Api.Controllers;

[ApiController]
[Route("api/users")]
[Authorize]
public class UserController: ControllerBase
{
    private readonly GetCurrentUserQueryHandler _currentUserHandler;

    public UserController(GetCurrentUserQueryHandler handler)
    {
        _currentUserHandler = handler;
    }

    [HttpGet("me")]
    public async Task<IActionResult> GetCurrentUser(CancellationToken cancellationToken)
    {
        // Get UserId from JWT Claims
        var userIdClaim = User.FindFirstValue(
            ClaimTypes.NameIdentifier);

        if (!long.TryParse(userIdClaim, out var userId))
            return Unauthorized();
        
        GetCurrentUserResult? result = await _currentUserHandler.HandleAsync(new GetCurrentUserQuery(userId), cancellationToken) ;
        if (result is null)
            return NotFound();

        CurrentUserResponse reponse = new CurrentUserResponse(
            result.Id,
            result.FirstName,
            result.LastName,
            result.Email,
            result.AvatarUrl,
            result.Address,
            result.City,
            result.Roles
        );
        return Ok(reponse);
    }
}