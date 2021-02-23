import AsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @ desc   Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = AsyncHandler(async (req, res) => {
  /**
   * con req.body entramos a la data que se envia desde el formulario
   * de login/registro, en postman se puede simular con la pestaña
   * body
   */

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @ desc   Get user profile
// @route   POST /api/users/profile
// @access  Private
const getUserProfile = AsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("User not found");
  }
});

export { authUser, getUserProfile };
