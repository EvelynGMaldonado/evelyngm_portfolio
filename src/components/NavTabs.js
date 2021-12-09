// import React from 'react';
// import './NavTabs.css';

// // Here we are using object destructuring assignment to pluck off our variables from the props object
// // We assign them to their own variable names
// function NavTabs({ currentPage, handlePageChange }) {
// return (
//     <div className="display">
//     <header>
//     <h1>Evelyn Maldonado</h1>
    
//     <nav>
//         <ul className="responsive nav nav-tabs">
//             <li className="nav-item">
//                 <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
//                     Home
//                 </a>
//             </li>
//             <li className="nav-item">
//                 <a href="#projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
//                     Projects
//                 </a>
//             </li>
//             <li className="nav-item">
//                 <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}> 
//                     Resume 
//                 </a>
//             </li>
//             <li className="nav-item">
//                 <a href="#contactinfo" onClick={() => handlePageChange('ContactInfo')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}> 
//                     Contact Information
//                 </a>   
//             </li>
//         </ul>
//     </nav>
//     </header>
//     <nav className="photo1">
//         <figure className="photo1" role="img" aria-label="Work space"></figure>
//         <img src={require("../assets/image.jpg").default} alt="pp" width = "15%"/>
//     </nav>
//     </div>

// );
// }

// export default NavTabs;