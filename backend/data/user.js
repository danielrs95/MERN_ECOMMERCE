const users = [
  {
    name: "Admin user",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Daniel",
    email: "daniel@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Albita",
    email: "albita@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
