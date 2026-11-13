namespace LearnFlow.Domain.Entities;

public class User
{
    private readonly List<Role> _roles = [];

    public long Id { get; private set; }

    public string FirstName { get; private set; } = string.Empty;

    public string LastName { get; private set; } = string.Empty;

    public string Email { get; private set; } = string.Empty;

    public string PasswordHash { get; private set; } = string.Empty;

    public string? AvatarUrl { get; private set; }

    public string? Address { get; private set; }

    public string? City { get; private set; }

    public DateTime CreatedAt { get; private set; }

    public DateTime UpdatedAt { get; private set; }

    public IReadOnlyCollection<Role> Roles => _roles.AsReadOnly();

    private User()
    {
    }

    public User(
        string firstName,
        string lastName,
        string email,
        string passwordHash)
    {
        if (string.IsNullOrWhiteSpace(firstName))
            throw new ArgumentException("First name is required.");

        if (string.IsNullOrWhiteSpace(lastName))
            throw new ArgumentException("Last name is required.");

        if (string.IsNullOrWhiteSpace(email))
            throw new ArgumentException("Email is required.");

        if (string.IsNullOrWhiteSpace(passwordHash))
            throw new ArgumentException("Password hash is required.");

        FirstName = firstName.Trim();
        LastName = lastName.Trim();
        Email = email.Trim().ToLowerInvariant();
        PasswordHash = passwordHash;

        CreatedAt = DateTime.UtcNow;
        UpdatedAt = DateTime.UtcNow;
    }

    public void UpdateProfile(
        string firstName,
        string lastName,
        string? avatarUrl,
        string? address,
        string? city)
    {
        FirstName = firstName.Trim();
        LastName = lastName.Trim();
        AvatarUrl = avatarUrl;
        Address = address;
        City = city;

        UpdatedAt = DateTime.UtcNow;
    }

    public void ChangePassword(string passwordHash)
    {
        if (string.IsNullOrWhiteSpace(passwordHash))
            throw new ArgumentException("Password hash is required.");

        PasswordHash = passwordHash;
        UpdatedAt = DateTime.UtcNow;
    }

    public void AssignRole(Role role)
    {
        if (_roles.Any(x => x.Id == role.Id))
            return;

        _roles.Add(role);
    }
    
    /*
     * Sdung khi đọc User từ database
     */
    public static User Rehydrate(
        long id,
        string firstName,
        string lastName,
        string email,
        string? passwordHash,
        string? avatarUrl,
        string? address,
        string? city,
        DateTime createdAt,
        DateTime updatedAt)
    {
        return new User
        {
            Id = id,
            FirstName = firstName,
            LastName = lastName,
            Email = email,
            PasswordHash = passwordHash,
            AvatarUrl = avatarUrl,
            Address = address,
            City = city,
            CreatedAt = createdAt,
            UpdatedAt = updatedAt
        };
    }
}