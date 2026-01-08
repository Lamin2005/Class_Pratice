import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
  const _dirname = dirname(fileURLToPath(import.meta.url));

  const filepath = path.join(
    _dirname,
    req.url === "/" ? "index.html" : req.url
  );

  fs.readFile(filepath, (err, content) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 Page Not Found</h1>", "utf-8");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content, "utf-8");
    }
  });
});

server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}...`));

// const filepath = "./todos.json";

// let command = process.argv[2];
// let todo = process.argv[3];
// let index = Number(process.argv[3]);

// const loadToDo = () => {
//   try {
//     if (!fs.existsSync(filepath)) {
//       fs.writeFileSync(filepath, "[]");
//     }
//     const buffer = fs.readFileSync(filepath);
//     const Str = buffer.toString();
//     const data = JSON.parse(Str);

//     return data;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };

// const saveToDo = (todo) => {
//   const todolist = JSON.stringify(todo);
//   fs.writeFileSync(filepath, todolist);
// };

// const addToDo = (todolist) => {
//   const todos = loadToDo();
//   todos.push({ todo: todolist });
//   saveToDo(todos);
//   console.log(todos);
// };

// const readToDo = () => {
//   const todos = loadToDo();
//   for (let i = 0; i < todos.length; i++) {
//     const element = todos[i].todo;
//     console.log(`${i + 1}: ${element}`);
//   }
// };

// const deleteToDo = (index) => {
//   //   saveToDo([]);
//   //   console.log("All todos deleted");

//   const todos = loadToDo();

//   if (index < 0 || index >= todos.length) {
//     console.log("Invalid Index");
//     return;
//   }

//   if (todos.length === 0) {
//     console.log("No todos to delete");
//     return;
//   }

//   const removedTodo = todos.splice(index, 1);
//   saveToDo(todos);
//   console.log(`Todo deleted successfully : ${removedTodo[0].todo}`);
// };

// switch (command) {
//   case "add":
//     addToDo(todo);
//     break;

//   case "read":
//     readToDo();
//     break;

//   case "delete":
//     deleteToDo(index);
//     break;

//   default:
//     console.log("Unknow command...");
//     break;
// }
