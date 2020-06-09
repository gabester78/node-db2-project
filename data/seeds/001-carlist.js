exports.seed = function (knex) {
  return knex("carlist")
    .truncate()
    .then(function () {
      return knex("carlist").insert(generateData());
    });
};

function generateData() {
  return [
    {
      make: "dummydata",
      model: "civic",
      vin: 1234,
      mileage: 5678,
      transmission: "auto",
      title: "salvage",
    },
  ];
}
