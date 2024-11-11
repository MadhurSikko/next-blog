import Link from "next/link";
import { getBlogPosts } from "@/utils/getBlogs";

export default async function Home() {
    const blogs = getBlogPosts("blogs");

    return (
        <div>
            {blogs.map((blog) => {
                return (
                        <Link key={blog.slug} href={"/blog/"+blog.slug}>
                            <div>{blog.metadata.date}</div>
                            <div>{blog.metadata.title}</div>
                            <div>{blog.metadata.description}</div>
                        </Link>
                )
            })}
        </div>
    )
}

/*
[{
    metadata: {
        title: string
        topic: string
        description: string
        date: string
    },   
    slug: string, // Used for the <Link /> tag
    content: mdx
},
{
    metadata: {
        title: string
        topic: string
        description: string
        date: string
    },   
    slug: string, // Used for the <Link /> tag
    content: mdx
},
]



*/