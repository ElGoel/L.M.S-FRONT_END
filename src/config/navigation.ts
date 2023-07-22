import menuData from './menus/data.menu';

export default {
  menu: [
    {
      text: 'Dashboard',
      key: '',
      items: [
        {
          key: 'menu.dashboard',
          text: 'Dashboard',
          link: '/dashboard',
          icon: 'mdi-view-dashboard-outline',
        },
      ],
    },
    {
      text: 'Data',
      items: menuData,
    },
  ],
};
