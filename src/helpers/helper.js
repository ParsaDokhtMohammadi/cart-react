export const shortenText = (text)=>{
    return text.split(" ").slice(0,3).join(" ")
}

export const searchProducts = (products,search)=>{
    if(!search) return products
    return products.filter(product=>(
        product.title.toLowerCase().includes(search)
    ))
}