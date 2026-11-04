using System;
using System.Collections.Generic;

namespace LearnFlow.Infrastructure.Persistence.Entities;

public partial class course
{
    public long id { get; set; }

    public long instructor_id { get; set; }

    public string title { get; set; } = null!;

    public string description { get; set; } = null!;

    public string level { get; set; } = null!;

    public decimal duration_value { get; set; }

    public string duration_unit { get; set; } = null!;

    public long category_id { get; set; }

    public decimal price { get; set; }

    public string? image_url { get; set; }

    public string learning_format { get; set; } = null!;

    public string? learning_path { get; set; }

    public DateOnly? start_date { get; set; }

    public DateOnly? end_date { get; set; }

    public string? location { get; set; }

    public string status { get; set; } = null!;

    public DateTime created_at { get; set; }

    public DateTime updated_at { get; set; }

    public decimal rating { get; set; }

    public virtual category category { get; set; } = null!;

    public virtual ICollection<course_enrollment> course_enrollments { get; set; } = new List<course_enrollment>();

    public virtual ICollection<course_learning_outcome> course_learning_outcomes { get; set; } = new List<course_learning_outcome>();

    public virtual ICollection<course_schedule> course_schedules { get; set; } = new List<course_schedule>();

    public virtual ICollection<course_target_audience> course_target_audiences { get; set; } = new List<course_target_audience>();

    public virtual instructor_profile instructor { get; set; } = null!;

    public virtual ICollection<planner_item> planner_items { get; set; } = new List<planner_item>();
}
