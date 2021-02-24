import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// compara la contra ingresada con el de la base de datos
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

/**
 * Vamos a hacer segura la contraseña con bcrypt al momento
 * De guardar un nuevo usuario
 */

userSchema.pre("save", async function (next) {
  /**
   * Si el campo no ha sido modificado! entonces next.
   * Salimos del middleware
   */
  if (!this.isModified("password")) {
    next();
  }

  // Redefinimos la contraseña con ayuda de bcrypt
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
