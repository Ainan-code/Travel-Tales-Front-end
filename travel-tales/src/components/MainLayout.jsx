import React from 'react';
import Header from './Header';
import Footer from './footer';
import "../components/styles/homepage.css"
const MainLayout = ({ children }) => {
 return (
 <div className='mainlayout-container'>
<Header/>
 <main>
 {children}
 </main>
<Footer/>
 </div>
 );
};
export default MainLayout;