using System;
using System.Collections.Generic;
using LearnFlow.Infrastructure.Persistence.Entities;
using Microsoft.EntityFrameworkCore;

namespace LearnFlow.Infrastructure.Persistence;

public partial class LearnFlowDbContext : DbContext
{
    public LearnFlowDbContext(DbContextOptions<LearnFlowDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<category> categories { get; set; }

    public virtual DbSet<course> courses { get; set; }

    public virtual DbSet<course_enrollment> course_enrollments { get; set; }

    public virtual DbSet<course_learning_outcome> course_learning_outcomes { get; set; }

    public virtual DbSet<course_schedule> course_schedules { get; set; }

    public virtual DbSet<course_target_audience> course_target_audiences { get; set; }

    public virtual DbSet<instructor_profile> instructor_profiles { get; set; }

    public virtual DbSet<planner_item> planner_items { get; set; }

    public virtual DbSet<role> roles { get; set; }

    public virtual DbSet<task> tasks { get; set; }

    public virtual DbSet<task_column> task_columns { get; set; }

    public virtual DbSet<task_label> task_labels { get; set; }

    public virtual DbSet<task_label_link> task_label_links { get; set; }

    public virtual DbSet<user> users { get; set; }

    public virtual DbSet<user_role> user_roles { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<category>(entity =>
        {
            entity.HasKey(e => e.id).HasName("categories_pkey");

            entity.HasIndex(e => e.name, "categories_name_key").IsUnique();

            entity.Property(e => e.id).UseIdentityAlwaysColumn();
            entity.Property(e => e.name).HasMaxLength(100);
        });

        modelBuilder.Entity<course>(entity =>
        {
            entity.HasKey(e => e.id).HasName("courses_pkey");

            entity.Property(e => e.id).UseIdentityAlwaysColumn();
            entity.Property(e => e.created_at).HasDefaultValueSql("now()");
            entity.Property(e => e.duration_unit).HasMaxLength(10);
            entity.Property(e => e.duration_value).HasPrecision(8, 2);
            entity.Property(e => e.learning_format).HasMaxLength(20);
            entity.Property(e => e.level).HasMaxLength(20);
            entity.Property(e => e.location).HasMaxLength(255);
            entity.Property(e => e.price).HasPrecision(12, 2);
            entity.Property(e => e.rating).HasPrecision(3, 2);
            entity.Property(e => e.status)
                .HasMaxLength(20)
                .HasDefaultValueSql("'draft'::character varying");
            entity.Property(e => e.title).HasMaxLength(200);
            entity.Property(e => e.updated_at).HasDefaultValueSql("now()");

            entity.HasOne(d => d.category).WithMany(p => p.courses)
                .HasForeignKey(d => d.category_id)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("courses_category_id_fkey");

            entity.HasOne(d => d.instructor).WithMany(p => p.courses)
                .HasForeignKey(d => d.instructor_id)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("courses_instructor_id_fkey");
        });

        modelBuilder.Entity<course_enrollment>(entity =>
        {
            entity.HasKey(e => e.id).HasName("course_enrollments_pkey");

            entity.HasIndex(e => new { e.course_id, e.student_id }, "uq_course_student").IsUnique();

            entity.Property(e => e.id).UseIdentityAlwaysColumn();
            entity.Property(e => e.enrolled_at).HasDefaultValueSql("now()");
            entity.Property(e => e.status)
                .HasMaxLength(20)
                .HasDefaultValueSql("'active'::character varying");

            entity.HasOne(d => d.course).WithMany(p => p.course_enrollments)
                .HasForeignKey(d => d.course_id)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("course_enrollments_course_id_fkey");

            entity.HasOne(d => d.student).WithMany(p => p.course_enrollments)
                .HasForeignKey(d => d.student_id)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("course_enrollments_student_id_fkey");
        });

        modelBuilder.Entity<course_learning_outcome>(entity =>
        {
            entity.HasKey(e => e.id).HasName("course_learning_outcomes_pkey");

            entity.Property(e => e.id).UseIdentityAlwaysColumn();

            entity.HasOne(d => d.course).WithMany(p => p.course_learning_outcomes)
                .HasForeignKey(d => d.course_id)
                .HasConstraintName("course_learning_outcomes_course_id_fkey");
        });

        modelBuilder.Entity<course_schedule>(entity =>
        {
            entity.HasKey(e => e.id).HasName("course_schedules_pkey");

            entity.HasIndex(e => new { e.course_id, e.day_of_week }, "idx_course_schedules_course_day");

            entity.Property(e => e.id).UseIdentityAlwaysColumn();

            entity.HasOne(d => d.course).WithMany(p => p.course_schedules)
                .HasForeignKey(d => d.course_id)
                .HasConstraintName("course_schedules_course_id_fkey");
        });

        modelBuilder.Entity<course_target_audience>(entity =>
        {
            entity.HasKey(e => e.id).HasName("course_target_audiences_pkey");

            entity.Property(e => e.id).UseIdentityAlwaysColumn();

            entity.HasOne(d => d.course).WithMany(p => p.course_target_audiences)
                .HasForeignKey(d => d.course_id)
                .HasConstraintName("course_target_audiences_course_id_fkey");
        });

        modelBuilder.Entity<instructor_profile>(entity =>
        {
            entity.HasKey(e => e.user_id).HasName("instructor_profiles_pkey");

            entity.Property(e => e.user_id).ValueGeneratedNever();
            entity.Property(e => e.created_at).HasDefaultValueSql("now()");
            entity.Property(e => e.job_title).HasMaxLength(150);
            entity.Property(e => e.updated_at).HasDefaultValueSql("now()");

            entity.HasOne(d => d.user).WithOne(p => p.instructor_profile)
                .HasForeignKey<instructor_profile>(d => d.user_id)
                .HasConstraintName("instructor_profiles_user_id_fkey");
        });

        modelBuilder.Entity<planner_item>(entity =>
        {
            entity.HasKey(e => e.id).HasName("planner_items_pkey");

            entity.HasIndex(e => new { e.user_id, e.item_date, e.start_time }, "idx_planner_items_user_date_time");

            entity.Property(e => e.id).UseIdentityAlwaysColumn();
            entity.Property(e => e.created_at).HasDefaultValueSql("now()");
            entity.Property(e => e.learning_format).HasMaxLength(20);
            entity.Property(e => e.location).HasMaxLength(255);
            entity.Property(e => e.title).HasMaxLength(200);
            entity.Property(e => e.type).HasMaxLength(20);
            entity.Property(e => e.updated_at).HasDefaultValueSql("now()");

            entity.HasOne(d => d.course).WithMany(p => p.planner_items)
                .HasForeignKey(d => d.course_id)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("planner_items_course_id_fkey");

            entity.HasOne(d => d.user).WithMany(p => p.planner_items)
                .HasForeignKey(d => d.user_id)
                .HasConstraintName("planner_items_user_id_fkey");
        });

        modelBuilder.Entity<role>(entity =>
        {
            entity.HasKey(e => e.id).HasName("roles_pkey");

            entity.HasIndex(e => e.name, "roles_name_key").IsUnique();

            entity.Property(e => e.id).UseIdentityAlwaysColumn();
            entity.Property(e => e.name).HasMaxLength(50);
        });

        modelBuilder.Entity<task>(entity =>
        {
            entity.HasKey(e => e.id).HasName("tasks_pkey");

            entity.HasIndex(e => new { e.id, e.user_id }, "uq_task_id_user").IsUnique();

            entity.Property(e => e.id).UseIdentityAlwaysColumn();
            entity.Property(e => e.created_at).HasDefaultValueSql("now()");
            entity.Property(e => e.title).HasMaxLength(200);
            entity.Property(e => e.updated_at).HasDefaultValueSql("now()");

            entity.HasOne(d => d.user).WithMany(p => p.tasks)
                .HasForeignKey(d => d.user_id)
                .HasConstraintName("tasks_user_id_fkey");

            entity.HasOne(d => d.task_column).WithMany(p => p.tasks)
                .HasPrincipalKey(p => new { p.id, p.user_id })
                .HasForeignKey(d => new { d.column_id, d.user_id })
                .HasConstraintName("fk_task_column_owner");
        });

        modelBuilder.Entity<task_column>(entity =>
        {
            entity.HasKey(e => e.id).HasName("task_columns_pkey");

            entity.HasIndex(e => new { e.id, e.user_id }, "uq_task_column_id_user").IsUnique();

            entity.Property(e => e.id).UseIdentityAlwaysColumn();
            entity.Property(e => e.created_at).HasDefaultValueSql("now()");
            entity.Property(e => e.name).HasMaxLength(100);
            entity.Property(e => e.updated_at).HasDefaultValueSql("now()");

            entity.HasOne(d => d.user).WithMany(p => p.task_columns)
                .HasForeignKey(d => d.user_id)
                .HasConstraintName("task_columns_user_id_fkey");
        });

        modelBuilder.Entity<task_label>(entity =>
        {
            entity.HasKey(e => e.id).HasName("task_labels_pkey");

            entity.HasIndex(e => new { e.id, e.user_id }, "uq_task_label_id_user").IsUnique();

            entity.Property(e => e.id).UseIdentityAlwaysColumn();
            entity.Property(e => e.color)
                .HasMaxLength(20)
                .HasDefaultValueSql("'#9E9E9E'::character varying");
            entity.Property(e => e.created_at).HasDefaultValueSql("now()");
            entity.Property(e => e.name).HasMaxLength(60);

            entity.HasOne(d => d.user).WithMany(p => p.task_labels)
                .HasForeignKey(d => d.user_id)
                .HasConstraintName("task_labels_user_id_fkey");
        });

        modelBuilder.Entity<task_label_link>(entity =>
        {
            entity.HasKey(e => new { e.task_id, e.label_id }).HasName("task_label_links_pkey");

            entity.HasOne(d => d.user).WithMany(p => p.task_label_links)
                .HasForeignKey(d => d.user_id)
                .HasConstraintName("task_label_links_user_id_fkey");

            entity.HasOne(d => d.task_label).WithMany(p => p.task_label_links)
                .HasPrincipalKey(p => new { p.id, p.user_id })
                .HasForeignKey(d => new { d.label_id, d.user_id })
                .HasConstraintName("fk_task_label_link_label");

            entity.HasOne(d => d.task).WithMany(p => p.task_label_links)
                .HasPrincipalKey(p => new { p.id, p.user_id })
                .HasForeignKey(d => new { d.task_id, d.user_id })
                .HasConstraintName("fk_task_label_link_task");
        });

        modelBuilder.Entity<user>(entity =>
        {
            entity.HasKey(e => e.id).HasName("users_pkey");

            entity.Property(e => e.id).UseIdentityAlwaysColumn();
            entity.Property(e => e.city).HasMaxLength(100);
            entity.Property(e => e.created_at).HasDefaultValueSql("now()");
            entity.Property(e => e.email).HasMaxLength(150);
            entity.Property(e => e.first_name).HasMaxLength(100);
            entity.Property(e => e.last_name).HasMaxLength(100);
            entity.Property(e => e.updated_at).HasDefaultValueSql("now()");
        });

        modelBuilder.Entity<user_role>(entity =>
        {
            entity.HasKey(e => new { e.user_id, e.role_id }).HasName("user_roles_pkey");

            entity.Property(e => e.assigned_at).HasDefaultValueSql("now()");

            entity.HasOne(d => d.role).WithMany(p => p.user_roles)
                .HasForeignKey(d => d.role_id)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("user_roles_role_id_fkey");

            entity.HasOne(d => d.user).WithMany(p => p.user_roles)
                .HasForeignKey(d => d.user_id)
                .HasConstraintName("user_roles_user_id_fkey");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
