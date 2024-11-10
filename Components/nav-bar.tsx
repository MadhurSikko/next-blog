import Link from "next/link";
import SignIn from "./sign-in"
import SignOut from "./sign-out"
import { auth } from "@/auth";
import NavElement from "@/Components/nav-elements"

export default async function NavBar() {
    const session = await auth(); 
    return (
        <nav className="flex flex-row justify-between m-1 p-5 border-black border-2 bg-pallet_1 rounded ">
            <div>
               <Link className="font-semibold align-middle antialiased text-black capitalize text-xl" href="/">madhur dagar</Link>
            </div>

            <div className="flex flex-row justify-between ">
                
                <ul className="flex flex-row justify-between">
                    <li><NavElement href="/blogs" name="Blogs" /></li>
                    <li><NavElement href="/" name="Projects" /></li>
                    <li><NavElement href="/dsa" name="DSA" /></li>
                    <li><NavElement href="/trains" name="Trains" /></li>
                    <li><NavElement href="/about" name="About" /></li>
                </ul>

            </div>
            
            
            <div className="">
                <div>

                </div>
                <div>
                    {session === null? <SignIn />: <SignOut />}
                </div>
            </div>
        </nav>

    )
}