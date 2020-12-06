module.exports = ({ env }) => ({
  host: env("HOST", "localhost"),
  port: env.int("PORT", 1337),
  admin: {
    url: "/dashboard",
    auth: {
      secret: env("ADMIN_JWT_SECRET", "test"),
    },
  },
});
