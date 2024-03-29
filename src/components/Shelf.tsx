import { ShelfItem } from "./ShelfItem";

export function Shelf ({category, items}: ShelfProps) {
    return <div className="shelf">
                <span className="category">{ category }</span>

                <div className="items">
                { items.map(item => (
                    <ShelfItem key={item.id} {...item} />
                ))}
                </div>

           </div>
}