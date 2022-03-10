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
]
