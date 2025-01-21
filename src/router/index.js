import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import TaskListView from "../views/TaskListView.vue";
import RegisterUserView from "@/views/RegisterUserView.vue";
import LoginView from "@/views/LoginView.vue";
import CerrarSesion from "@/components/CerrarSesion.vue";

const routes  = [
    { path: "/login", name: 'Login', component: LoginView },
    { path: "/home", name: 'Home', component: HomeView, meta: { requiresAuth: true } },
    { path: "/about", name: 'About', component: AboutView, meta: { requiresAuth: true } },
    { path: "/tasks", name:'Tasks', component: TaskListView, meta: { requiresAuth: true } },
    { path: "/register", name:'Register', component: RegisterUserView },
    { path: "/close", name:'Close', component: CerrarSesion },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Guard global para proteger las rutas
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token'); // Obtén el token del almacenamiento local
  
    if (to.meta.requiresAuth && !token) {
      // Si la ruta requiere autenticación y no hay token, redirige a login
      next({ name: 'Login' });
    } else {
      // Si hay token o la ruta no requiere autenticación, permite el acceso
      next();
    }
});

export default router;

