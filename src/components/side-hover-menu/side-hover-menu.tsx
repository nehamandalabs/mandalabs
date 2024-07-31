import React from 'react'



const sideMenuContents = [
    {
        name: 'Technology',
    },
    {
        name: 'Strategy',
    },
    {
        name: 'Partnership',
    }
]
export default function SideHoverMenu() {
    return (
        <div className='z-10 flex flex-col text-[18px] gap-7 absolute top-40 text-white right-20'>
            {
                sideMenuContents?.map(eachSideMenu => (
                    <p key={eachSideMenu.name}>{eachSideMenu.name}</p>
                ))
            }
        </div>
    )
}
