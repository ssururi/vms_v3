import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const visitors = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'visitor',
            title: 'Visitors',
            type: 'item',
            url: '/',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        }
    ]
};

export default visitors;
