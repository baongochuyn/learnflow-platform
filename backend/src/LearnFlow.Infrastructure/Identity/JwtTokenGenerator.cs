using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using LearnFlow.Application.Interfaces.Services;
using LearnFlow.Domain.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace LearnFlow.Infrastructure.Identity;

public class JwtTokenGenerator : IJwtTokenGenerator
{
    private readonly IConfiguration _configuration;

    public JwtTokenGenerator(IConfiguration configuration)
    {
        _configuration = configuration;
        var expirationMinutes = int.Parse(
            _configuration["Jwt:AccessTokenExpirationMinutes"] ?? "30");

        if (expirationMinutes <= 0)
            throw new InvalidOperationException(
                "JWT expiration must be greater than zero.");

        ExpiresInSeconds = expirationMinutes * 60;
    }
    public string GenerateAccessToken(long userId, string email, IReadOnlyCollection<string> roles)
    {
        var issuer = _configuration["Jwt:Issuer"]
                     ?? throw new InvalidOperationException("JWT Issuer is missing.");

        var audience = _configuration["Jwt:Audience"]
                       ?? throw new InvalidOperationException("JWT Audience is missing.");

        var secretKey = _configuration["Jwt:SecretKey"]
                        ?? throw new InvalidOperationException("JWT SecretKey is missing.");

        var keyBytes = Encoding.UTF8.GetBytes(secretKey);

        if (keyBytes.Length < 32)
            throw new InvalidOperationException(
                "JWT SecretKey must be at least 32 bytes.");

        var now = DateTime.UtcNow;
        var claims = new List<Claim>
        {
            new(JwtRegisteredClaimNames.Sub, userId.ToString()),
            new(ClaimTypes.NameIdentifier, userId.ToString()),
            new(JwtRegisteredClaimNames.Email, email),
            new(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
        };
        
        foreach (var role in roles.Distinct())
        {
            claims.Add(new Claim(ClaimTypes.Role, role));
        }
        var key = new SymmetricSecurityKey(keyBytes);

        var credentials = new SigningCredentials(
            key,
            SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            issuer: issuer,
            audience: audience,
            claims: claims,
            notBefore: now,
            expires: now.AddSeconds(ExpiresInSeconds),
            signingCredentials: credentials);
        
        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    public int ExpiresInSeconds { get; }
}