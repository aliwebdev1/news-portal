import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const navItems = [
    {
        route: 'Home',
        path: '/'
    },
    {
        route: 'Categories',
        path: '/categories'
        // path: '/categories/news?category=technology'
    },
    {
        route: 'About',
        path: '/about'
    },
    {
        route: 'Contact',
        path: '/contact'
    },
    {
        route: 'Pages',
        path: '/pages'
    },
]


const Footer = () => {
    return (
        <div className='bg-black p-4 md:p-10 text-center'>
            <div className='flex justify-center'>
                <Link href='/' target="_blank" > <FontAwesomeIcon className='text-white w-6' icon={faFacebook} /> </Link>
                <Link href='/' target="_blank" > <FontAwesomeIcon className='ms-3 text-white w-6' icon={faYoutube} /> </Link>
                <Link href='/' target="_blank" > <FontAwesomeIcon className='ms-3 text-white w-6' icon={faTwitter} /> </Link>
                <Link href='/' target="_blank" > <FontAwesomeIcon className='ms-3 text-white w-6' icon={faWhatsapp} /> </Link>
                <Link href='/' target="_blank" > <FontAwesomeIcon className='ms-3 text-white w-6' icon={faLinkedin} /> </Link>
            </div>

            <div>
                <ul className="menu menu-horizontal px-1">
                    {navItems.map((item, i) => <li className='text-white font-semibold' key={i}><Link href={item.path}>{item.route}</Link></li>)}
                </ul>

                <p className='text-neutral-400'>@2025 The News Portal. Design by Developer Shoriful Islaml</p>

            </div>
        </div>
    );
};

export default Footer;