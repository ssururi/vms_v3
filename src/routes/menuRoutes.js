import { lazy } from 'react';

import Loadable from 'components/Loadable';
import Layout from 'layout';

const VisitorsPage = Loadable(lazy(() => import('pages/visitors/CreateVisitor')));

const MenuRoutes = {
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '/',
            element: <VisitorsPage />
        },
    ]
};

export default MenuRoutes;