using System;
using System.Collections.Generic;

namespace LearnFlow.Infrastructure.Persistence.Entities;

public partial class instructor_profile
{
    public long user_id { get; set; }

    public string? job_title { get; set; }

    public string? bio { get; set; }

    public string? expertise { get; set; }

    public string? website_url { get; set; }

    public DateTime created_at { get; set; }

    public DateTime updated_at { get; set; }

    public virtual ICollection<course> courses { get; set; } = new List<course>();

    public virtual user user { get; set; } = null!;
}
