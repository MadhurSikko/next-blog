import Link from "next/link"
export default function NavElement({href, name}:{href:string, name: string}) {
    return (
        <div className="hover:underline mx-3  ">
            <Link className="align-middle text-base font-normal	" href={href}>{name}</Link>
        </div>
    )
}