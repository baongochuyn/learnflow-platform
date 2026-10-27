using System;
using System.Collections.Generic;

namespace LearnFlow.Infrastructure.Persistence.Entities;

public partial class planner_item
{
    public long id { get; set; }

    public long user_id { get; set; }

    public long? course_id { get; set; }

    public string type { get; set; } = null!;

    public string title { get; set; } = null!;

    public DateOnly item_date { get; set; }

    public TimeOnly? start_time { get; set; }

    public TimeOnly? end_time { get; set; }

    public string? location { get; set; }

    public string? learning_format { get; set; }

    public DateTime created_at { get; set; }

    public DateTime updated_at { get; set; }

    public virtual course? course { get; set; }

    public virtual user user { get; set; } = null!;
}
