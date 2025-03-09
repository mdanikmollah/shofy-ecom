import Bannar from "./components/Bannar";
import Mainloader from "./components/Mainloader";
import ProductList from "./components/ProductList";
import { getData } from "./helper";



export default async function Home() {
  const endpoint = 'https://dummyjson.com/products';
  const{ products} = await getData(endpoint);
  return (
    <main>
      <Bannar/>
      <ProductList products={products}/>
     
    </main>
  );
}
