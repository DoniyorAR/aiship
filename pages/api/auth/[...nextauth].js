import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "user" },
        password: {  label: "Password", type: "password" }
      },
      authorize(credentials) {
        if (credentials.username === "admin" && credentials.password === "admin") {
          return { id: 1, name: "Admin", email: "admin@ship.com" }
        }
        return null
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
})
