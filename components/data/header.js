export const header = {
    settings: {
      left: {
          visible: true,
          align: 'start', // start | center | end
      },
      center: {
          visible: true,
          align: 'start',
      },
      right: {
          visible: true,
          align: 'end',
      }
    },
    grids: {
        left: [
            'LOGO',
            {
                auth: false,
                text: 'navbar_gelismis_al_sat',
                to: {
                    query: {
                        name: '/market/pro',
                    },
                    pathname: '/market/pro'
                },
                ico: 'auto',
                dropdown: false
            },
            {
                auth: false,
                text: 'navbar_kolay_al_sat',
                to: {
                    query: {
                        name: '/market/kolay',
                    },
                    pathname: '/market/easy'
                },
                ico: 'auto',
                dropdown: false
            }
        ],
        center: [
        ],
        right: [
            {
                auth: true,
                text: 'navbar_yatir',
                to: {
                    query: {
                        name: '/hesabim/yatir',
                    },
                    pathname: '/account/deposit'
                },
                ico: 'auto',
                variant: 'text',
                dropdown_type: 'list',
                dropdown: [
                    {
                        auth: true,
                        text: 'navbar_kripto_yatir',
                        to: {
                            query: {
                                name: '/hesabim/kripto-yatir',
                            },
                            pathname: '/account/deposit/cyrpto'
                        },
                        ico: 'kripto-yatir',
                    },
                    {
                        auth: true,
                        text: 'navbar_tl_yatir',
                        to: {
                            query: {
                                name: '/hesabim/tl-yatir',
                            },
                            pathname: '/account/deposit/money/try'
                        },
                        ico: 'tl-yatir',
                    }
                ]
            },
            {
                auth: true,
                text: 'navbar_cek',
                to: {
                    query: {
                        name: '/hesabim/cek',
                    },
                    pathname: '/account/withdraw'
                },
                ico: 'auto',
                variant: 'text',
                dropdown_type: 'list',
                dropdown: [
                    {
                        auth: true,
                        text: 'navbar_kripto_cek',
                        to: {
                            query: {
                                name: '/hesabim/kripto-cek',
                            },
                            pathname: '/account/withdraw/cyrpto'
                        },
                        ico: 'kripto-cek',
                    },
                    {
                        auth: true,
                        text: 'navbar_tl_cek',
                        to: {
                            query: {
                                name: '/hesabim/tl-cek',
                            },
                            pathname: '/account/withdraw/money/try'
                        },
                        ico: 'tl-cek',
                    }
                ]
            },
            {
                auth: false,
                forLogin: true,
                text: 'navbar_giris_yap',
                to: {
                    query: {
                        name: '/auth/giris-yap',
                    },
                    pathname: '/auth/login'
                },
                ico: 'auto',
                dropdown: false
            },
            {
                auth: false,
                forLogin: true,
                text: 'navbar_yeni_uyelik',
                to: {
                        query: {
                            name: '/auth/yeni-uyelik'
                        },
                        pathname: '/auth/register'
                    },
                ico: 'auto',
                dropdown: false
            },
            'USER_PROFILE',
            'LOGOUT',
            'DIVIDE',
            'THEME_TOGGLE',
        ]
    }
}