namespace LearnFlow.Application.Features.Auth.Commands.Register;

public record RegisterResult(
    long Id,
    string FirstName,
    string LastName,
    string Email
);