using System;
using System.Collections.Generic;

namespace LearnFlow.Infrastructure.Persistence.Entities;

public partial class user
{
    public long id { get; set; }

    public string first_name { get; set; } = null!;

    public string last_name { get; set; } = null!;

    public string email { get; set; } = null!;

    public string? password_hash { get; set; }

    public string? avatar_url { get; set; }

    public string? address { get; set; }

    public string? city { get; set; }

    public DateTime created_at { get; set; }

    public DateTime updated_at { get; set; }

    public virtual ICollection<course_enrollment> course_enrollments { get; set; } = new List<course_enrollment>();

    public virtual instructor_profile? instructor_profile { get; set; }

    public virtual ICollection<planner_item> planner_items { get; set; } = new List<planner_item>();

    public virtual ICollection<task_column> task_columns { get; set; } = new List<task_column>();

    public virtual ICollection<task_label_link> task_label_links { get; set; } = new List<task_label_link>();

    public virtual ICollection<task_label> task_labels { get; set; } = new List<task_label>();

    public virtual ICollection<task> tasks { get; set; } = new List<task>();

    public virtual ICollection<user_role> user_roles { get; set; } = new List<user_role>();
}
