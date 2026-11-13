namespace LearnFlow.Domain.Entities;

public class Role
{
    public long Id { get; private set; }

    public string Name { get; private set; } = string.Empty;

    public string? Description { get; private set; }

    private Role()
    {
    }

    public Role(long id, string name, string? description)
    {
        if (string.IsNullOrWhiteSpace(name))
            throw new ArgumentException("Role name is required.");

        Id = id;
        Name = name.Trim();
        Description = description;
    }
}