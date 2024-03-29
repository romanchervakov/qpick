import { BagItem } from "../components/BagItem";
import { useBag } from "../context/BagContext";
import products from "../data/products.json"

export function Bag () {
    const { BagItems } = useBag()

    const findObjectById = (id: number): ItemProps | null => {
        for (let i = 0; i < products.length; i++) {
          const obj = products[i];
          const foundItem = obj.items.find(item => item.id === id);
          if (foundItem !== undefined) {
            return foundItem;
          }
        }
        return null;
    };

    return <div className="products">
                <div className="shelf">
                    <span className="category bag-title">Корзина</span>
                    <div className="bag">
                        <div className="bag-items">
                            {BagItems.map(item => (
                                <BagItem key={item.id} {...item}/>
                            ))}
                        </div>
                        <div className="check-out card">
                            <div className="total-group">
                                <span>ИТОГО:</span>
                                <span>₽ 
                                { BagItems.reduce((total, BagItem) => {
                                        const item = findObjectById(BagItem.id)
                                        return total + (item?.price || 0) * BagItem.quantity
                                    }, 0)
                                }
                                </span>
                            </div>
                            <button type="button" className="check-out-button">Перейти к оформлению</button>
                        </div>
                    </div>
                </div>
           </div>
}