import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { popularProducts } from "../data";

const stockItem = {
  name:"disney",
  description:"princess",
  img:null
}

const ProductDetails = () => {
  let { id } = useParams();
  const [item,setItem]=useState(stockItem)

  useEffect(()=>{
    const data = popularProducts.find(i=>`${i.id}` === id);
    setItem(data);
  },[id])

  return (
    <>
      <h1>{item.name}</h1>
      <h1>{item.description}</h1>
      <img src={item.img} alt="ishq tera tarpave"/>
    </>
  );
};

export default ProductDetails;
