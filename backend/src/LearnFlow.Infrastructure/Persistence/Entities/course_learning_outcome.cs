using System;
using System.Collections.Generic;

namespace LearnFlow.Infrastructure.Persistence.Entities;

public partial class course_learning_outcome
{
    public long id { get; set; }

    public long course_id { get; set; }

    public string outcome { get; set; } = null!;

    public int position { get; set; }

    public virtual course course { get; set; } = null!;
}
