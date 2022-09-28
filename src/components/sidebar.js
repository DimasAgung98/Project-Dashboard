import React from 'react';
import { RiDashboardFill } from 'react-icons/ri';
import { BsFillPeopleFill } from 'react-icons/bs';
import { VscTasklist } from 'react-icons/vsc';
import { IoIosPeople } from 'react-icons/io';
import { MdAccountBox } from 'react-icons/md';
import { GoRocket } from 'react-icons/go';


function sidebar() {
    return (
        <>
            <div className='sidebar'>
                <div className='sidebar-brand'>
                    <div className='d-flex '>
                        <div>
                            <GoRocket className='icon-dashboard' />
                        </div>
                        <h2>Chronosoft</h2>
                    </div>
                </div>
                <div className='sidebar-menu'>
                    <ul className='list'>
                        <li><a href='/' className='active'><span><RiDashboardFill /></span><span>Dashboard</span></a></li>
                        <li><a href='/'><span><BsFillPeopleFill /></span><span>Employee</span></a></li>
                        <li><a href='/'><span><IoIosPeople /></span><span>Customers</span></a></li>
                        <li><a href='/'><span><MdAccountBox /></span><span>Accounts</span></a></li>
                        <li><a href='/'><span><VscTasklist /></span><span>Tasks</span></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default sidebar