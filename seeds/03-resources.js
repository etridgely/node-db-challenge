exports.seed = function(knex) {
  return knex("resources").insert([
    {
      resource_name: "resources 1",
      resource_description: "test"
    }
  ]);
}
