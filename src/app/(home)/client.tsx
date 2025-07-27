"use client"
import { trpc } from "@/trpc/client";


export const Page = () =>{
    const [data] = trpc.hello.useSuspenseQuery({text:"Software Engineer Anshal Ali"})
    return (
        <div>
            <p>Client component {data.greeting} </p>
        </div>
    )
}