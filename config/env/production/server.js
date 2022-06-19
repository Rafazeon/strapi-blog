module.exports = ({ env }) => ({
  proxy: true,
  url: env("https://strapi-deploy-blog.herokuapp.com/"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
