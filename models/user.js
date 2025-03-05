import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minLength: 1,
      maxLength: 20,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      index: true,
      lowercase: true,
      unique: true,
      trim: true,
      minLength: 5,
      maxLength: 50, // Emails are usually longer than 20 chars
    },
    password: {
      type: String,
      required: true, // Ensure password is required
      trim: true,
      minLength: 6, // Set a minimum password length for security
    },
    role: {
      type: String,
      default: "user",
    },
    image: String,
    resetCode: {
      data: String,
      expiresAt: {
        type: Date,
        default: () => new Date(Date.now() + 10 * 60 * 1000), // Corrected Date handling
      },
    },
  },
  { timestamps: true }
);

// Only apply the unique validator if using Mongoose <7
if (mongoose.version.startsWith("6")) {
  userSchema.plugin(uniqueValidator);
}

export default mongoose.models.User || mongoose.model("User", userSchema);
