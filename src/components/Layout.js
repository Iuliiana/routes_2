import {NavLink, Outlet} from 'react-router-dom';

const Layout = () => {
    //fixme разнести на компонент с меню и на главную
    return (
        <>
            <ul className="nav justify-content-center">
                <li><NavLink className="nav-item" to='/'>home</NavLink></li>
                <li><NavLink className="nav-item" to='/posts/new'>new post</NavLink></li>
            </ul>
            <div className="wrapper">
                <Outlet/>
            </div>
        </>
    );
}
export {Layout}