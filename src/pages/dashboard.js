import React from 'react';
import { VscSearch } from 'react-icons/vsc';
import { GiHamburgerMenu } from 'react-icons/gi';
import SidebarPage from '../components/sidebar';
import profile from '../assets/image/profile.png';
import { Card } from 'react-bootstrap';

function dashboard() {
    return (
        <>
            <SidebarPage />
            <div className='main-content'>
                <header>
                    <h2>
                        <label for=""><span><GiHamburgerMenu /></span></label>
                        Dashboard
                    </h2>
                    <div className='search-wrapper'>
                        <span><VscSearch /></span>
                        <input type='search' placeholder='Search here' />
                    </div>
                    <div className='user-wrapper'>
                        <img className='profile-pict' src={profile} alt='profile' />
                        <div>
                            <h4>Dimas Agung</h4>
                            <small>Super admin</small>
                        </div>
                    </div>
                </header>
                <main>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>18</Card.Title>
                            <GiHamburgerMenu />
                            <Card.Subtitle>Customer</Card.Subtitle>
                        </Card.Body>
                    </Card>
                    <div className='cards'>
                        <div className='card-single'>
                            <div>
                                <h2>54</h2>
                                <span>Customer</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default dashboard