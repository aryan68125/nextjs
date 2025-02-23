export default async function product_details({ params }: { params: Promise<{ productid: bigint }>}){
    const productid = (await params).productid
    return (
        <>
        <h1>Details about product {productid}</h1>
        </>
    )
}