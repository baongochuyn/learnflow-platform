using System;
using System.Collections.Generic;

namespace LearnFlow.Infrastructure.Persistence.Entities;

public partial class course_schedule
{
    public long id { get; set; }

    public long course_id { get; set; }

    public short day_of_week { get; set; }

    public TimeOnly start_time { get; set; }

    public TimeOnly end_time { get; set; }

    public virtual course course { get; set; } = null!;
}
