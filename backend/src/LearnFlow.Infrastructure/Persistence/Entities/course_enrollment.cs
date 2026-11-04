using System;
using System.Collections.Generic;

namespace LearnFlow.Infrastructure.Persistence.Entities;

public partial class course_enrollment
{
    public long id { get; set; }

    public long course_id { get; set; }

    public long student_id { get; set; }

    public string status { get; set; } = null!;

    public DateTime enrolled_at { get; set; }

    public virtual course course { get; set; } = null!;

    public virtual user student { get; set; } = null!;
}
