require("dotenv").config();
const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");

const saltRounds = 10;

//Login
router.post("/login", async (req, res) => {
  console.log(req.body);
  //Check if user is already registered
  const user = await User.findOne({
    email: req.body.email,
  });
  if (!user) return res.send({ message: "Email is wrong", success: false });

  //Check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.send({ message: "Password is wrong", success: false });

  res.send({ user, success: true, message: "Successfuly logged in!" });
});

router.post("/register", async (req, res) => {
  //Check if user is already registered
  console.log(req.body);

  const alreadyUser = await User.findOne({
    email: req.body.email,
  });

  const alreadyUsername = await User.findOne({
    username: req.body.username,
  });

  if (alreadyUser)
    return res.send({ message: "User is already registered", success: false });

  if (alreadyUsername)
    return res.send({ message: "Username is already used", success: false });

  bcrypt.hash(
    req.body.password,
    saltRounds,
    async function (err, hashedPassword) {
      const user = new User({
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
      });

      try {
        await user.save();
        res.send({ message: "Registered", success: true });
      } catch (err) {
        res.send({ message: "Please check your inputs", success: false });
      }
    }
  );
});

module.exports = router;
