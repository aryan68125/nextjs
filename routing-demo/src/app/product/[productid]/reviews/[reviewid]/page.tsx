export default async function product_review({params} : {params : Promise<{productid : bigint,reviewid : bigint}>}){
    const {productid, reviewid} = (await params) 
    return (
        <>
        <h1>The review for product with a productid {productid} is as shown below</h1>
        <h4>The current review is {reviewid}</h4>
        </>
    )
}