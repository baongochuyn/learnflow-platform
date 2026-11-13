using LearnFlow.Application.Features.Auth.Commands.Login;
using LearnFlow.Application.Features.Auth.Commands.Register;
using LearnFlow.Application.Interfaces.Repositories;
using LearnFlow.Application.Interfaces.Services;
using LearnFlow.Infrastructure.Identity;
using LearnFlow.Infrastructure.Persistence;
using LearnFlow.Infrastructure.Persistence.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddOpenApi();
builder.Services.AddSwaggerGen();

// Database
builder.Services.AddDbContext<LearnFlowDbContext>(options =>
    options.UseNpgsql(
        builder.Configuration.GetConnectionString("LearnFlowDb")));

// Repositories
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IRoleRepository, RoleRepository>();

// Services
builder.Services.AddScoped<IPasswordHasher, PasswordHasher>();
builder.Services.AddScoped<IJwtTokenGenerator, JwtTokenGenerator>();

// Command Handlers
builder.Services.AddScoped<RegisterCommandHandler>();
builder.Services.AddScoped<LoginCommandHandler>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
