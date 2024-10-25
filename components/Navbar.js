// "use client"
import Image from "next/image"
import MainLogo from '../app/utils/images/MainLogo.png'
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="flex justify-between py-12 bg-indigo-600">
            <div>
                <Link href="/" className="pl-12 font-bold text-4xl text-white">LIST-NOTES</Link>
            </div>
            <div>
                <ul className="flex pr-24">
                    <Link href="/" className="px-4 font-semibold text-white">Home</Link>
                    <Link href="/" className="px-4 font-semibold text-white">About Us</Link>
                    <Link href="/" className="px-4 font-semibold text-white">Contact Us</Link>
                    <Link href="/login" className="px-4 font-semibold text-white">Login</Link>
                </ul>
            </div>
        </div>
    )
}