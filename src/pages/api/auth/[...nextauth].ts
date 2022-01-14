import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import LinkedInProvider from "next-auth/providers/linkedin"

import config from "../../../../configs"

const { github, google, linkedin, nextAuth, database, mode } = config

export default NextAuth({
  secret: nextAuth.secret,
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: google.id,
      clientSecret: google.secret,
      authorizationUrl: "https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=consent&response_type=code",
    }),
    GithubProvider({
      clientId: github.id,
      clientSecret: github.secret
    }),
    LinkedInProvider({
      clientId: linkedin.id,
      clientSecret: linkedin.secret
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    }
  },
  // pages: {
  //   signIn: '/auth/signin',
  //   signOut: '/auth/signout',
  //   error: '/auth/error', // Error code passed in query string as ?error=
  //   verifyRequest: '/auth/verify-request', // (used for check email message)
  //   newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
  session: {
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days
    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    encryption: true,
  },
  database: database.url,
  debug: mode === "development",
  logger: {
    error(code, metadata) {
      console.error(code, metadata)
    },
    warn(code) {
      console.warn(code)
    },
    debug(code, metadata) {
      console.debug('[debug] code =====================', code)
      console.debug('[debug] metadata =================', metadata)
    }
  }
})