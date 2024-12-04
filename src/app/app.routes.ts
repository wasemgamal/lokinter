import { Routes } from '@angular/router';
import { ERoutes } from './core/enums/routes.enum';

const authLayoutRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent),
        children: [
            {
                path: '',
                redirectTo: `/${ERoutes.login}`,
                pathMatch: 'full'
            },
            {
                path: ERoutes.login,
                loadComponent: () => import('./views/auth/login/login.component').then(m => m.LoginComponent),
            },
            {
                path: ERoutes.register,
                loadComponent: () => import('./views/auth/register/register.component').then(m => m.RegisterComponent),
            },
            {
                path: ERoutes.plans,
                loadComponent: () => import('./views/plans/plans.component').then(m => m.PlansComponent),
            },
            {
                path: ERoutes.welcome,
                loadComponent: () => import('./views/welcome/welcome.component').then(m => m.WelcomeComponent),
            },
        ]
    }
]

const mainLayoutRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
        children: [
            {
                path: ERoutes.home,
                loadComponent: () => import('./views/home/home.component').then(m => m.HomeComponent),
            },
            
        ]
    }
]




export const routes: Routes = [
    ...authLayoutRoutes,
    ...mainLayoutRoutes,
];
