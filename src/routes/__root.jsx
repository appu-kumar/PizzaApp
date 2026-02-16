import { createRootRoute, Outlet } from "@tanstack/react-router";
import {cartContext} from "../contexts";
import {useState} from "react";
import Header from "../Header";
import PizzaOfTheDay from "../PizzaOfTheDay";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import Example from "../TestComponent";
export const Route = createRootRoute({
    component: () => {
        const cartHook = useState([]);

     return (
     <>
        {/* <Example /> */}
        <cartContext.Provider value={cartHook}>
            <Header />
            <Outlet />
            <PizzaOfTheDay />
        </cartContext.Provider>
        <TanStackRouterDevtools />
        <ReactQueryDevtools />
    </>)

    }
})