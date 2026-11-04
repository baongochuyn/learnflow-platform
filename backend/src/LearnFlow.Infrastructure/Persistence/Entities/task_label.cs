using System;
using System.Collections.Generic;

namespace LearnFlow.Infrastructure.Persistence.Entities;

public partial class task_label
{
    public long id { get; set; }

    public long user_id { get; set; }

    public string name { get; set; } = null!;

    public string color { get; set; } = null!;

    public DateTime created_at { get; set; }

    public virtual ICollection<task_label_link> task_label_links { get; set; } = new List<task_label_link>();

    public virtual user user { get; set; } = null!;
}
