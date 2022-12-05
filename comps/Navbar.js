import  Link from 'next/link'
import Image from 'next/image';
const Navbar= () => {
    return ( <nav>
        <div className="logo">
            <Image src="/logoo.jpeg" width={130} height={80} alt="logo"/>
            <h1>Ninja List</h1>
        </div>
       <Link href="/"> Home </Link>
       <Link href="/about"> About </Link>
       <Link href="/ninjas"> Ninja Listing </Link>
    </nav> 
    );
}
 
export default Navbar;