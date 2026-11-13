using LearnFlow.Api.Contracts.Auth;
using LearnFlow.Application.Features.Auth.Commands.Login;
using LearnFlow.Application.Features.Auth.Commands.Register;
using LearnFlow.Infrastructure.Persistence;
using Microsoft.AspNetCore.Mvc;

namespace LearnFlow.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthController : ControllerBase
{
    private readonly LearnFlowDbContext _dbContext;
    private readonly RegisterCommandHandler _registerCommandHandler;
    private readonly LoginCommandHandler _loginCommandHandler;
    public AuthController(
        LearnFlowDbContext dbContext, 
        RegisterCommandHandler registerHandler,
        LoginCommandHandler loginHandler)
    {
        _dbContext = dbContext;
        _registerCommandHandler = registerHandler;
        _loginCommandHandler = loginHandler;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequest request, CancellationToken cancellationToken)
    {
        var command = new RegisterCommand(
            request.FirstName,
            request.LastName,
            request.Email,
            request.Password
        );

        var result = await _registerCommandHandler.HandleAsync(command, cancellationToken);

        return StatusCode(StatusCodes.Status201Created, result);
    }
    
    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody]LoginRequest request, CancellationToken cancellationToken)
    {
        LoginCommand command = new LoginCommand(request.Email, request.Password);
        var result = await _loginCommandHandler.HandleAsync(command, cancellationToken);

        LoginResponse response = new LoginResponse(
            result.AccessToken,
            result.ExpiresIn,
            result.TokenType,
            new UserInfoResponse(
                result.User.Id,
                result.User.FirstName,
                result.User.LastName,
                result.User.Email,
                result.User.AvatarUrl,
                result.User.Roles
            ));
        return Ok(response);
    }
}