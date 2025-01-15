import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@utils/database";
import { User } from "@model/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  async session({ session }) {
    const sessionUser = await User.findOne({
      email: session.user.email,
    });

    session.user.id = sessionUser._id.toString();


    return sessionUser;
  },

  async signIn({ profile }) {
    try {
      await connectDB();

      // check if a user exists in the database
      const userExists = await User.findOne({
        email: profile.email,
      });
      // if not create a new user
      if (!userExists) {
        await User.create({
          email: profile.email,
          username: profile.username.trim().toLowerCase(),
          image: profile.picture,
        });
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
});

export { handler as GET, handler as POST };
