export const calculateTotslItemsCountAtCart = (items) => {
    const totalItemsCount = items.reduce((acc , curr) => acc + curr.quantity , 0)
    return totalItemsCount
}
export const calculateTotalPriceAtCart = (items) => {
    const totalPrice = items.reduce((acc , curr) => acc + (curr.quantity * curr.price) , 0)
    return totalPrice

}
export const BASE_URL = "http://localhost:3000/"