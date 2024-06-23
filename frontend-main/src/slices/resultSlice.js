import { createSlice } from "@reduxjs/toolkit";

async function getJSON() {
    let url = 'http://localhost:4000/copyShop';
    try {
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log('Request Failed', error);
    }
  }
let p = getJSON()
let shops
p.then(result => {console.log(result);shops=result;console.log(shops)}) // "hello world!"


const resultSlice = createSlice({
  name: "copyshopSearchSpecification",
  initialState: shops,

});
export default resultSlice;



