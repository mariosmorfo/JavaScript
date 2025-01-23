const appConfig= {
  appName: "JavaApp",
  version: "2.0.0",
  apiEndPoints:{
    login: "/api/Login",
    register: "/api/register"
  },
  isProduction: false
}

console.log(appConfig.apiEndPoints.login)