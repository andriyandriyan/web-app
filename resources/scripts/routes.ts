import { lazy, LazyExoticComponent, NamedExoticComponent } from 'react';

const Dashboard = lazy(() => import('@/pages/Dashboard'));

interface Route {
  title: string;
  path: string;
  component: LazyExoticComponent<NamedExoticComponent>;
}

const routes: Route[] = [
  {
    title: 'Dashboard',
    path: '/',
    component: Dashboard,
  },
];

export default routes;
