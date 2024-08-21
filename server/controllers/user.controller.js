const UserModel = require("../models/user.model");

module.exports.signup = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Validate if required fields are provided
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Check if the user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    // Create a new user
    const user = new UserModel({ email, password, role });
    await user.save();

    res.status(201).json({
      message: "User created successfully",
      token: await user.generateToken(),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate if required fields are provided
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Find the user by email
    const user = await UserModel.findByCredentials(email, password);

    // Perform any additional actions after successful signin, e.g., generate a token

    res.json({
      message: "User signed in successfully",
      user,
      token: await user.generateToken(),
    });
  } catch (error) {
    res.status(401).json({ error: "Invalid credentials" });
  }
};
