import {promises as fs} from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc";
import SignIn from "@/Components/sign-in";


export default async function Home({ params }: { params: {slug: string}}) {
    const content = await fs.readFile(path.join(process.cwd(), 'Content/blogs', params.slug+".mdx"), 'utf8')
    
    const data = await compileMDX<{title: string, date: string}>({
        source: content,
        options: {
            parseFrontmatter: true,
        },
        components: {
            SignIn,
        }
    })
    const title = data.frontmatter.title;
    return (
        
        
        <main className="flex flex-col place-self-center w-6/12 border mt-3 p-5 border-black border-2 bg-pallet_1 rounded">
            
            <div className="title font-semibold text-2xl tracking-tighter">
                {title.charAt(0).toUpperCase() + title.slice(1)}
            </div>
            <div className="flex justify-between items-center mt-2 mb-8 text-sm">
                <p className="text-sm ">
                    Published on, {data.frontmatter.date}
                </p>
            </div>
        
            <article className="prose">
                {data.content}
            </article>
        </main>
        
    )
}