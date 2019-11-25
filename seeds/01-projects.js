exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      project_name: "Test",
      project_description: "this is a test project",
      completed: 0
    },
    {
      project_name: "Test 2",
      project_description: "This is another test",
      completed: 0
    }
  ]);
}
