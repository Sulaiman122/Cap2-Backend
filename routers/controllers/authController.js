let users = [];
const register = (req, res) => {
  if (req.body.name && req.body.email && req.body.password) {
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    console.log(users);
    res
      .status(200)
      .json({ status: true, id: Date.now().toString(), name: req.body.name });
  }
  res.status(200).json({ status: false, resp: "Please enter all fields" });
};

const login = (req, res) => {
    console.log(users);
  if (users.length > 0) {
    users.find((user) => {
      if (user.email == req.body.email && user.password == req.body.password) {
        res.status(200).json({ status: true, usrName: user.name });
      } else {
        res
          .status(200)
          .json({ status: false, respLog: "Incorrect Email or Password" });
        console.log(false);
      }
    });
  } else {
    res.status(200).json({ status: false, respLog: "Incorrect Email or Password" });
    console.log(false);
  }
  console.log(users);
};

module.exports = {
  register,
  login,
};
