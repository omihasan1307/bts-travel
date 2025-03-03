const isDevelopment: boolean = process.env.NODE_ENV === "development";

const productionUrl: string =
  "https://restaurant-management-sass-server.restaurant360.online/api/v1";

const localUrl: string = "https://ems-passport.onrender.com"; // A
// const localUrl: string = "http://192.168.0.193:9004/api/v1"; // A

export const baseUrl: string = isDevelopment ? localUrl : productionUrl;

export const TOKEN_NAME: string = "BTS Travel Express";
