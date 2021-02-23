import AsyncHandler from "express-async-handler";
import User from "../models/userModel.js";

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
      token: null,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

export { authUser };
