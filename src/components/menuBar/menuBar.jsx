import { Link } from "react-router-dom";
import "./menuBar.css";
import { MenuData } from "../../constants/menuData";

const MenuBar = () => {
    return (
        <>
            <div className='menubar'>
                {MenuData.map((route, index) => (
                    <Link className='link' key={index} to={route.path}>
                        {route.name}
                    </Link>
                ))}
            </div>
        </>
    );
};
export default MenuBar;
