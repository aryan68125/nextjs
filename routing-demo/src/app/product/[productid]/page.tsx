export default function product_details({ params }: { params: { productid: BigInteger } }){
    return (
        <>
        <h1>Details about product {params.productid}</h1>
        </>
    )
}