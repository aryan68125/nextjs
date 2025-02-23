export default async function review_list({params} : {params : Promise<{productid:bigint}>}){
    const productid = (await params).productid
    return (
        <>
        <h1>Review list for product {productid}</h1>
        <ul>
            <li>Review 1</li>
            <li>Review 2</li>
            <li>Review 3</li>
            <li>Review 4</li>
        </ul>
        </>
    )
}