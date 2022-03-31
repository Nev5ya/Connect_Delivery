export const AdminMenu = (onMenuItemClick, onMenuHref) => [
  {
    name: 'Основная страница',
    option: '0',
    func: () => onMenuItemClick('0'),
    href: '',
  },
  {
    name: 'Чаты',
    option: '1',
    func: () => onMenuItemClick('1'),
    href: 'Chat',
  },
  {
    name: 'Карта',
    option: '2',
    func: () => onMenuItemClick('2'),
    href: 'MyMap',
  },
  {
    name: 'Управление курьерами',
    option: '3',
    func: () => onMenuItemClick('3'),
    href: 'CouriersOperation',
  },
  {
    name: 'Зарегистрировать нового курьера',
    option: '4',
    func: () => onMenuItemClick('4'),
    href: 'CourierRegistration',
  },
]
