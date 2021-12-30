
const env = process.env

export default {
  github: {
    id: env.GITHUB_CLIENT_ID,
    secret: env.GITHUB_CLIENT_SECRET
  },
  google: {
    id: env.GOOGLE_CLIENT_ID,
    secret: env.GOOGLE_CLIENT_SECRET
  },
  linkedin: {
    id: env.LINKEDIN_CLIENT_ID,
    secret: env.LINKEDIN_CLIENT_SECRET
  },
  nextAuth: {
    secret: env.NEXTAUTH_SECRET
  },
  database: {
    host: env.DB_HOST,
    port: env.DB_PORT,
    name: env.DB_NAME,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    dialect: env.DB_DIALECT,
    logging: env.MODE === "development" || false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    }
  }
}