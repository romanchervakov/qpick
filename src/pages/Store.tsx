import { Shelf } from "../components/Shelf";
import products from "../data/products.json"

export function Store () {
    return <div className="products">
            { products.map(shelf => (
                <Shelf {...shelf}/>
            ))}
           </div>
}