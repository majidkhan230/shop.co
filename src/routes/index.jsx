import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import RatingAndReviews from "../pages/RatingAndReviews";
import FAQs from "../pages/FAQs";
import Cart from "../pages/Cart";
import Products from "../pages/Products";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children: [
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"products",
                element:<Products/>,
            },
            {
                path:"cart",
                element:<Cart/>,
            },
            {
                path:"detail",
                element:<Detail/>,
                children:[
                    {
                        path:"product-details",
                        element:<ProductDetails/>
                    },
                    {
                        path:"reviews",
                        element:<RatingAndReviews/>
                    },
                    {
                        path:"faqs",
                        element:<FAQs/>
                    },
                    
                ]
            }
        ]
    }
])

