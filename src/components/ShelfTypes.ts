type ItemProps = {
    id: number
    image: string
    name: string
    rating: number
    price: number
    discount: number
}

type ShelfProps = {
    category: string,
    items: Array<ItemProps>
}

