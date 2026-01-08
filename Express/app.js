import express from "express";

const app = express();

app.use(express.json());

let memoryDB = [];
let id = 1;

app.post("/add-menu", (req, res) => {
  const { name, price } = req.body;

  memoryDB.push({ id: id++, name, price });

  res.status(200).json({
    message: "Successfully New Menu add...",
    result: { name, price },
  });
});

app.get("/menu", (req, res) => {
  res.status(200).json({ message: "Menu List is here...", result: memoryDB });
});

app.get("/menu/:id", (req, res) => {
  const { id } = req.params;

  const data = memoryDB.find((menu) => menu.id === Number(id));

  if (!data) {
    res.status(500).json({ message: "Menu not Found", result: [] });
  }

  res
    .status(200)
    .json({ message: `Menu id : ${id} data is here...`, result: { data } });
});

app.put("/menu-update/:id", (req, res) => {
  let { id } = req.params;

  let menu = memoryDB.find((m) => m.id === parseInt(id));

  if (!menu) {
    return res
      .status(500)
      .json({ message: `Menu Not Found with this ID : ${id}`, result: [] });
  }

  let { name, price } = req.body;

  menu.name = name;
  menu.price = price;

  res
    .status(200)
    .json({ message: "Successfully Update Menu...", result: { name, price } });
});

app.delete("/menu-delete/:id", (req, res) => {
  let { id } = req.params;

  let menu = memoryDB.findIndex((m) => m.id === parseInt(id));

  console.log(menu);
  

  if (menu === -1) {
    return res
      .status(500)
      .json({ message: `Menu Not Found with this ID : ${id}`, result: menu });
  }

  memoryDB.splice(menu,1);

  res
    .status(200)
    .json({ message: "Successfully Delete Menu", result: memoryDB });
});

app.listen(3000, () => {
  console.log("Server is runngin on PORT 3000...");
});
