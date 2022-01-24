const env = process.env.REACT_APP_ENV;

let config = {
    baseURL: "http://localhost/"
}

switch(env.toUpperCase()){
    
    case "STAGE":
        console.log(env.toUpperCase());
        config.baseURL = "https://stage.skillsunion.com";
        break;
    case "PRODUCTION":
        console.log(env.toUpperCase());
        config.baseURL = "https://skillsunion.com";
        break;
    default:
        console.log(env.toUpperCase());
        config.baseURL = "http://localhost/";
        break;
}

export default config;