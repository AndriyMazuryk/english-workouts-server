module.exports = {
  HOST: process.env.MONGODB_HOST || "localhost",
  PORT: process.env.MONGODB_PORT || 27017,
  DB: process.env.MONGODB_DB || "english-workouts",
};
