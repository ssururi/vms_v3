import { useRoutes } from 'react-router-dom';

import MenuRoutes from './menuRoutes';

export default function ThemeRoutes() {
    return useRoutes([MenuRoutes]);
}