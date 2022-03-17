export const CourierMenu = (onMenuItemClick) => [
  {
    name: 'Основная страница',
    option: '0',
    func: () => onMenuItemClick('0')
  },
  {
    name: 'Чат с администратором',
    option: '1',
    func: () => onMenuItemClick('1')
  },
  {
    name: 'История доставок',
    option: '2',
    func: () => onMenuItemClick('2')
  },
]
