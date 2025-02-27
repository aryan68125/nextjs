"use client"
import { usePathname } from "next/navigation"
export default function NotFound(){
    const pathname = usePathname();
    //access pathname constant and extract the path paraeters from it
    const productId = pathname.split("/")[2]
    const reviewId = pathname.split("/")[4]
    return (
        <div className="flex flex-col items-center jutify-around">
            <h1>Review not found!</h1>
            <p>reviewId {reviewId} for productId {productId} not found!</p>
        </div>
    )
}