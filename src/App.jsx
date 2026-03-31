import { Route, Routes } from "react-router-dom";
import Aside from "./components/aside/aside";
import { routes } from "./constants/routes";
import MenuBar from "./components/menuBar/menuBar";

const App = () => {
    return (
        <>
            <div className='wrap container  '>
                <Aside />
                <main className='main'>
                    <header>
                        <MenuBar />
                    </header>
                    <div className="mainContainer">
                        <Routes>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={route.element}
                            />
                        ))}
                    </Routes>
                    </div>
                </main>

            </div>
        </>
    );
};
export default App;
