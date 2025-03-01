import Link from "next/link";
export default function TopNav() {
    return (
        <nav className="nav shadow p-2 justify-content-between mb-3">
            <Link href='/' className="nav-link">  🛒ecomm</Link>

            <div className='d-flex'> 
                <Link href='/login' classname='nav-link'>
                Login
                </Link>
                <Link href='/register' classname='nav-link'>
                Register
                </Link>
            </div>
        </nav>
    )
}