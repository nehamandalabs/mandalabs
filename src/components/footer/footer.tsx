'use client';
import NextLink from 'next/link';
import sanitizeHtml from 'sanitize-html';
import { useDrawerStore } from '@/store/use-drawer-store';
import { useRouter, usePathname } from 'next/navigation'

type SingleFooterListItem = { title: string; href?: string; path?: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
    {
        title: 'Company',
        items: [
            { title: 'Services', href: '#' },
            { title: 'Who we are', href: '/who-we-are' },
            { title: 'Case Study', href: '/case-study' },
            { title: 'Get in touch', href: '/get-in-touch' },
        ],
    },
    {
        title: 'Services',
        items: [
            { title: 'What We Do', path: 'what we do' },
            { title: 'Technologies We Use', path: 'technologies we use' },
            { title: 'Engagement Models', path: 'engagement models' },
        ],
    },

];
const currentYear = new Date().getFullYear();

export default function Footer() {

    return (
        <footer className='xl:p-20 p-9 xl:px-40 bg-black text-white relative z-50 w-full'>
            <div className='flex flex-col md:flex md:flex-row'>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-5xl lg:text-8xl 2xl:text-9xl font-bold mb-8 md:mb-0'>Mandalabs</h1>
                    <p className='text-base md:text-base hidden md:flex'>&copy; {currentYear} Mandalabs ,&nbsp; All Rights Reserved. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Terms of Use &nbsp;&nbsp; &nbsp;&nbsp;Privacy Policy</p>
                </div>
                <div className='flex flex-col md:flex-row gap-10 w-full justify-around'>
                    {footerItems.map((singleItem) => (
                        <FooterList key={singleItem.title} {...singleItem} />
                    ))}
                </div>
                <p className='text-base md:text-base md:hidden flex mt-8'>&copy; {currentYear} Mandalabs ,&nbsp; All Rights Reserved. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Terms of Use &nbsp;&nbsp; &nbsp;&nbsp;Privacy Policy</p>
            </div>
        </footer>
    );
}

function FooterList({ title, items }: SingleFooterList) {
    return (
        <div>
            <h1 className='font-bold text-2xl mb-5'>{title}</h1>
            {items.map((singleItem) => (
                <ListItem key={singleItem.href} {...singleItem} />
            ))}
        </div>
    );
}

function ListItem({ title, href, path }: SingleFooterListItem) {
    const { setIsPageDrawerOpen } = useDrawerStore();
    const pathname = usePathname();
    const router = useRouter();
    return (
        <div className='text-base'>
            {
                href ?
                    <NextLink href={href} passHref className='no-underline text-white-500 '>
                        <p style={{ lineHeight: '40px' }}>{title}</p>
                    </NextLink>
                    :
                    <div className='no-underline text-white-500 cursor-pointer'
                        onClick={() => {
                            setIsPageDrawerOpen(true);
                            const query = `?current_path=${path}`;
                            router.push(`${pathname}${query}`);
                        }}>
                        <p style={{ lineHeight: '40px' }}>{title}</p>
                    </div>
                    

            }
        </div>
    );
}

