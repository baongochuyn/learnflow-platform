using System;
using System.Collections.Generic;

namespace LearnFlow.Infrastructure.Persistence.Entities;

public partial class task_label_link
{
    public long user_id { get; set; }

    public long task_id { get; set; }

    public long label_id { get; set; }

    public virtual task task { get; set; } = null!;

    public virtual task_label task_label { get; set; } = null!;

    public virtual user user { get; set; } = null!;
}
