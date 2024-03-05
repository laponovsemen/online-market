import React, {useEffect} from 'react';
import AppRoutes from "../routes/routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import {useDispatch} from "react-redux";
import {getCategories} from "../../features/categories/categoriesSlice";
import {getProducts} from "../../features/products/productsSlice";



const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        //console.log(getCategories())
        dispatch(getCategories())
        dispatch(getProducts())
    }, [dispatch])
    return (
        <div className="app">
            <Header/>
            <div className="container">
                <SideBar/>
                <AppRoutes />
            </div>

            <Footer />
        </div>
    );
};

export default App;
