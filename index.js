const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const courses=require("./courses")
app.use(express.json());
app.get("/", function(req, res) {
  res.send("Welcome to world");
});
app.get("/courses", function(req, res) {
  res.send(courses); //respond with the array of courses
});
app.get("/courses/:id", function(req, res) {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
      return res
          .status(404)
          .send("The course with the given id was not found");
  res.send(course);
});
app.post("/courses", function(req, res) {
  const course = {
      id: courses.length + 1,
      name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

app.put("/courses/:id", function(req, res) {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
      return res
          .status(404)
          .send("The course with the given id was not found");
  course.name = req.body.name;
  res.send(course);
});

app.put("/courses/:id", function(req, res) {
  const course = courses.find(c => c.id === parseInt(req.params.id));

  if (!course)
      return res
          .status(404)
          .send("The course with the given id was not found");
  course.name = req.body.name;
  res.send(course);
});

app.listen(PORT, function() {
  console.log(`Listening on Port ${PORT}`);
});