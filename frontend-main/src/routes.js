import DocumentSpecificationView from "./views/DocumentSpecificationView";
import CopyShopSpecificationView from "./views/CopyShopSpecificationView";
import SearchResultView from "./views/SearchResultView";
import UserLoginView from "./views/UserLoginView";
import SignUpView from "./views/SignUpView";
import CopyShopPageView from "./views/CopyShopPageView";

// routes within the movie database example app
// used for routing

const routes = [
    {
        path: "/",
        component: DocumentSpecificationView,
        exact: true,
    },

    {
        path: "/copyshop_specification",
        component: CopyShopSpecificationView,
    },
    {
        path: "/search_result",
        component: SearchResultView,
    },
    {
        path: "/login",
        component: UserLoginView,
    },
    {
        path: "/register",
        component: SignUpView,
    },
    {
        path: "/copyshop/:id",
        component: CopyShopPageView,
        exact: true,
    },
    // {
    //     path: "/movie/:id",
    //     component: MovieDetailsView,
    // },
];

export default routes;
