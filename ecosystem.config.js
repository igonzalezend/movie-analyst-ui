module.exports = {
    apps : [{
      name: "app",
      script: "./app.js",
      env: {
        BACKEND_URL: "10.0.6.189:3000",
        PORT: "3030", 
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }