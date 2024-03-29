import { ReactNode, createContext, useContext } from "react";
import { useSessionStorage } from "../hooks/useSessionStorage";

type BagProviderProps = {
    children: ReactNode
}

type BagItem = {
    id: number
    quantity: number
}

type BagContext = {
    getItemQuantity: (id: number) => number
    increaseItemQuantity: (id: number) => void
    decreaseItemQuantity: (id: number) => void
    removeFromBag: (id: number) => void
    BagQuantity: number
    BagItems: BagItem[]
}

const BagContext = createContext({} as BagContext)

export function useBag() {
    return useContext(BagContext)

}

export function BagProvider( { children } :BagProviderProps ) {
    const [BagItems, setBagItems] = useSessionStorage<BagItem[]>(
      "Bag",
      []
    )

    const BagQuantity = BagItems.reduce((quantity, item) => item.quantity + quantity, 0)

    function getItemQuantity(id: number) {
        return BagItems.find(item => item.id === id)?.quantity || 0
    }

      function increaseItemQuantity(id: number) {
        setBagItems(currItems => {
          if (currItems.find(item => item.id === id) == null) {
            return [...currItems, { id, quantity: 1 }]
          } else {
            return currItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
              } else {
                return item;
              }
            });
          }
        })
      }

      function decreaseItemQuantity(id: number) {
        setBagItems(currItems => {
          if (currItems.find(item => item.id === id)?.quantity === 1) {
            return currItems.filter(item => item.id !== id)
          } else {
            return currItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 }
              } else {
                return item
              }
            })
          }
        })
      }

      function removeFromBag(id: number) {
        setBagItems(currItems => {
          return currItems.filter(item => item.id !== id)
        })
      }


    return <BagContext.Provider value={{ getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromBag, BagItems, BagQuantity }}>
             {children}
           </BagContext.Provider>
}