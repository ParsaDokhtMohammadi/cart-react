export const shortenText = (text)=>{
    return text.split(" ").slice(0,3).join(" ")
}

export const searchProducts = (products,search)=>{
    if(!search) return products
    return products.filter(product=>(
        product.title.toLowerCase().includes(search)
    ))
}

export const filterProducts = (products,category) => {

    if(!category)return products
    return products.filter(product=>product.category.toLowerCase()===category)
}

export const createQueryObject = (currentQuery,newQuery) => {
    if(newQuery.category ==="all"){
        const {category, ...rest} = currentQuery
        return rest
    }
    if(newQuery.search===""){
        const {search,...rest} = currentQuery
        return rest
    }
    return {
        ...currentQuery,...newQuery
    }
}