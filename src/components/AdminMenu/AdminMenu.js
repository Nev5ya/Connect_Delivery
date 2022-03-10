export const AdminMenu = (onMenuItemClick) => [
  {
    name: 'Основная страница',
    option: '0',
    func: () => onMenuItemClick('0')
  },
  {
    name: 'Чаты',
    option: '1',
    func: () => onMenuItemClick('1')
  },
  {
    name: 'Карта',
    option: '2',
    func: () => onMenuItemClick('2')
  },
  {
    name: 'Управление курьерами',
    option: '3',
    func: () => onMenuItemClick('3')
  },
  {
    name: 'Зарегистрировать нового курьера',
    option: '4',
    func: () => onMenuItemClick('4')
  },
]
