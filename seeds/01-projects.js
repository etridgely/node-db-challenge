exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      project_name: "Test",
      project_description: "this is a test project",
      complete: 0
    },
    {
      project_name: "Test 2",
      project_description: "This is another test",
      complete: 0
    }
  ]);
}
