import { Item } from "../Item/Item";

export const ItemList = ({ products }) => products.map((product) => <Item key={product.id} product={product}/>);
