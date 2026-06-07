export const shortenText = (text) => {
    return text.split(" ").slice(0, 3).join(" ")
}

export const searchProducts = (products, search) => {
    if (!search) return products
    return products.filter(product => (
        product.title.toLowerCase().includes(search)
    ))
}

export const filterProducts = (products, category) => {

    if (!category) return products
    return products.filter(product => product.category.toLowerCase() === category)
}

export const createQueryObject = (currentQuery, newQuery) => {
    if (newQuery.category === "all") {
        const { category, ...rest } = currentQuery
        return rest
    }
    if (newQuery.search === "") {
        const { search, ...rest } = currentQuery
        return rest
    }
    return {
        ...currentQuery, ...newQuery
    }
}

export const getInitialQuery = (searchParams) => {
    const query = {}
    const category = searchParams.get("category")
    const search = searchParams.get("search")
    if (category) query.category = category
    if (search) query.search = search
    return query
}

export const sumProducts = (products) => {
    const itemsCounter = products.reduce((total,p)=>total+p.quantity,0)
    const total = products.reduce((total,p)=>total+p.quantity*p.price,0).toFixed(2)
    return {itemsCounter,total}
}

export const productQuantity = (state,id) => {
    const index = state.selectedItems.findIndex(i=>i.id === id)
    if(index===-1) return 0
    return state.selectedItems[index].quantity
}