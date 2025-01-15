import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@utils/database";


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],

    async session({ session }) {

    },
    async signIn({ profile }) {
        try {
            await connectDB()

            // check if a user exists in the database


            // if not create a new user 
            return true
        } catch (error) {
            console.log(error);
            return false

        }
    }
})

export { handler as GET, handler as POST }