import HomeView from "@/views/HomeView.vue";

export default [
    {
        path: '/',
        component: HomeView,
    },
    {
        path: '/about',
        component: () => import('@/views/AboutView.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    }
]