export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/survey-api',
  port: process.env.PORT || 3001
}