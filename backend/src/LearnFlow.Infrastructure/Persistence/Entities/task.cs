using System;
using System.Collections.Generic;

namespace LearnFlow.Infrastructure.Persistence.Entities;

public partial class task
{
    public long id { get; set; }

    public long user_id { get; set; }

    public long column_id { get; set; }

    public string title { get; set; } = null!;

    public string? description { get; set; }

    public bool completed { get; set; }

    public int position { get; set; }

    public DateOnly? due_date { get; set; }

    public TimeOnly? due_time { get; set; }

    public DateTime created_at { get; set; }

    public DateTime updated_at { get; set; }

    public virtual task_column task_column { get; set; } = null!;

    public virtual ICollection<task_label_link> task_label_links { get; set; } = new List<task_label_link>();

    public virtual user user { get; set; } = null!;
}
