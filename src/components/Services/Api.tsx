import axios from "axios";
const client = axios.create({
    baseURL: "https://homayonazar.com/api/new_api/db.json",
});

export async function getProducts() {
    const { data } = await client (""); 
    return data;    
}


export async function getProduct(id: string | number) {
  const { data } = await client("");
  const product = data.products.find((p: any) => p.id === id.toString());
  return product;
}