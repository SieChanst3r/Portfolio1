import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import about from "../views/about.vue";
import contact from "../views/contact.vue";
import portfolio from "../views/portfolio.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/contact",
        name: "contact",
        component: contact
    },
    {
        path: "/about",
        name: "about",
        component: about
    },
    {
        path: "/portfolio",
        name: "Portfolio",
        component: portfolio
    },


];

const router = new VueRouter({
    routes
});

export default router;