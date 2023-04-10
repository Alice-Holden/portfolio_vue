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
        path: '/schedule',
        component: () => import('@/views/ScheduleView.vue'),
    },
    {
        path: '/form-constructor',
        component: () => import('@/views/FormConstructor.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    }
]