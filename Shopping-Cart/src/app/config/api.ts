import { environment } from "src/environments/environment";

export const baseUrl = environment.production ? 'https://api.shoppingcart.com': 'https://localhost:3000'
export const productsUrl = baseUrl  + '/products'
export const cartUrl = baseUrl + '/cart'