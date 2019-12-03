exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      task_description: "Task 1",
      task_notes: "MVP",
      completed: 0,
      project_id: 1
    },
    {
      task_description: "Task 2",
      task_notes: "MVP",
      completed: 0,
      project_id: 1
    },
    {
      task_description: "Task 3",
      task_notes: "MVP",
      completed: 0,
      project_id: 2
    }
  ]);
}