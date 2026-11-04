using System;
using System.Collections.Generic;

namespace LearnFlow.Infrastructure.Persistence.Entities;

public partial class task_column
{
    public long id { get; set; }

    public long user_id { get; set; }

    public string name { get; set; } = null!;

    public int position { get; set; }

    public DateTime created_at { get; set; }

    public DateTime updated_at { get; set; }

    public virtual ICollection<task> tasks { get; set; } = new List<task>();

    public virtual user user { get; set; } = null!;
}
