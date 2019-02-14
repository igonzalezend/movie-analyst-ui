module.exports = {
    apps : [{
      name: "Movies_UI",
      script: "./RampUp_movie-analyst-ui/server.js",
      env: {
        NODE_ENV: "development",
        BACKEND_URL: "10.0.6.189:3000",
        PORT: "3030", 
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }