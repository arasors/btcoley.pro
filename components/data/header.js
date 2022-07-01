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
            'LOGO'
        ],
        center: [
            {
                auth: false,
                text: 'navbar_gelismis_al_sat',
                to: '/pro',
                ico: 'auto',
                dropdown: false
            },
            {
                auth: false,
                text: 'navbar_basit_al_sat',
                to: '/basit',
                ico: 'auto',
                dropdown: false
            }
        ],
        right: [
            {
                auth: true,
                text: 'navbar_yatir',
                to: '/hesabim/yatir',
                ico: 'auto',
                variant: 'text',
                dropdown_type: 'list',
                dropdown: [
                    {
                        auth: true,
                        text: 'navbar_kripto_yatir',
                        to: '/hesabim/kripto-yatir',
                        ico: 'kripto-yatir',
                    },
                    {
                        auth: true,
                        text: 'navbar_tl_yatir',
                        to: '/hesabim/tl-yatir',
                        ico: 'tl-yatir',
                    }
                ]
            },
            {
                auth: true,
                text: 'navbar_cek',
                to: '/hesabim/cek',
                ico: 'auto',
                variant: 'text',
                dropdown_type: 'list',
                dropdown: [
                    {
                        auth: true,
                        text: 'navbar_kripto_cek',
                        to: '/hesabim/kripto-cek',
                        ico: 'kripto-cek',
                    },
                    {
                        auth: true,
                        text: 'navbar_tl_cek',
                        to: '/hesabim/tl-cek',
                        ico: 'tl-cek',
                    }
                ]
            },
            {
                auth: false,
                text: 'navbar_giris_yap',
                to: '/auth/giris-yap',
                ico: 'auto',
                dropdown: false
            },
            {
                auth: false,
                text: 'navbar_yeni_uyelik',
                to: '/auth/yeni-uyelik',
                ico: 'auto',
                dropdown: false
            }
        ]
    }
}