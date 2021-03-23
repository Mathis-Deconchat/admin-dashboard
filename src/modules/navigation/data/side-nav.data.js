"use strict";
exports.__esModule = true;
exports.sideNavItems = exports.sideNavSections = void 0;
exports.sideNavSections = [
    {
        text: 'CORE',
        items: ['dashboard', 'reports']
    },
    {
        text: 'INTERFACE',
        items: ['layouts', 'pages']
    },
    {
        text: 'ADDONS',
        items: ['charts', 'tables']
    }
];
exports.sideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard'
    },
    reports: {
        icon: 'tachometer-alt',
        text: 'Reports',
        link: '/reports'
    },
    layouts: {
        icon: 'columns',
        text: 'Layouts',
        submenu: [
            {
                text: 'Static Navigation',
                link: '/dashboard/static'
            },
            {
                text: 'Light Sidenav',
                link: '/dashboard/light'
            },
        ]
    },
    pages: {
        icon: 'book-open',
        text: 'Pages',
        submenu: [
            {
                text: 'Authentication',
                submenu: [
                    {
                        text: 'Login',
                        link: '/auth/login'
                    },
                    {
                        text: 'Register',
                        link: '/auth/register'
                    },
                    {
                        text: 'Forgot Password',
                        link: '/auth/forgot-password'
                    },
                ]
            },
            {
                text: 'Error',
                submenu: [
                    {
                        text: '401 Page',
                        link: '/error/401'
                    },
                    {
                        text: '404 Page',
                        link: '/error/404'
                    },
                    {
                        text: '500 Page',
                        link: '/error/500'
                    },
                ]
            },
        ]
    },
    charts: {
        icon: 'chart-area',
        text: 'Charts',
        link: '/charts'
    },
    tables: {
        icon: 'table',
        text: 'Tables',
        link: '/tables'
    }
};
