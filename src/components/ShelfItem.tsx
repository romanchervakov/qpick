import { useBag } from "../context/BagContext"

export function ShelfItem ({ id, image, name, rating, price, discount }: ItemProps) {

    const {
        getItemQuantity,
        increaseItemQuantity,
      } = useBag()
      const quantity = getItemQuantity(id)

    return <div className="item card">
                <div className="image">
                    <img src={ image } />
                </div>
                <div className="info">
                        <span className="name">{ name }</span>
                        <div className="rating-group">
                            <svg width="24" height="22" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6268 18.0143L5.41618 22.3656L7.37647 14.2449L0.960754 8.81491L9.38215 8.14829L12.6268 0.439671L15.8715 8.14829L24.2941 8.81491L17.8771 14.2449L19.8374 22.3656L12.6268 18.0143Z" fill="#FFCE7F"/>
                            </svg>
                            <span className="rating">{ rating }</span>
                        </div>
                        <div className="price-group">
                            <span className="price">{ price } ₽</span>
                            {discount ? (<span className="discount">{ discount } ₽</span>) : (<></>)}
                        </div>
                        {quantity === 0 ? (<button className="buy" onClick={() => increaseItemQuantity(id)}>Купить</button>) 
                        : (<button className="buy">Купить</button>)}
                        
                </div>
           </div>
}