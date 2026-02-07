import "./aside.css";
import { useState } from "react";
import DownloadImage from "./button";

const Aside = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <aside className='aside'>
           <div className="pre">
             <div className='aside__img'>
                <img src="/photo.jpg" alt='' />
            </div>
            <div className='aside__info'>
                <h3>Sancho Dev</h3>
                <p>Frontend Devoloper</p>
            </div>
        </div>
            <div className="burger">
                <button type="button" onClick={() => setIsOpen(!isOpen)}></button>
            </div>
            <div className={`aside__social ${isOpen ? 'show' : ''}`}>
                <div className='social__imgs'>
                    <div>
                        <div className='img1'>
                        <img src="/email.png" alt='' />
                        <div className="dos">
                            <p>EMAIL</p>
                            <a href="sanjarkomilov999@gmail.com">sanjarkomi...</a>
                        </div>
                
                    </div>
                    <div className='img2'>
                        <img src="/smartphone.png" alt='' />
                        <div className="doss">
                            <p>PHONE</p>
                            <a href="+998 95 737 10 24">+998 ..</a>
                        </div>
                    </div>
                    </div>
                   <div>
                     <div className='img3'>
                        <img src="/calendar.png" alt='' />
                        <div className="dos">
                            <p>BIRHTDAY</p>
                            <p>24.04.2010</p>
                        </div>
                    </div>
                    <div className='img4'>
                        <img src="/location.png" alt='' />
                        <div className="dos">
                            <p>LOCATION</p>
                            <p>Urgench, Khorezm,  UZB</p>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
                <div className={`cv ${isOpen ? 'show' : ''}`}>
                    <DownloadImage />   
                </div>
                <div className={`soc ${isOpen ? 'show' : ''}`}>
                    <a href="https://www.instagram.com/sancho.dev/">
                        <img src="/instagram.png" alt="" />
                    </a>
                    <a href="https://t.me/SanchoDev_17">
                        <img src="/telegram1.png" alt="" />
                    </a>
                    <a href="https://github.com/sanchodevv">
                        <img src="/github.png" alt="" />
                    </a>
                </div>
        </aside>
    );
};
export default Aside;
