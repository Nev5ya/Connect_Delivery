export const ChiefAnalyticsMenu = (onMenuItemClick) => [
  {
    name: 'Dashboard',
    option: '0',
    func: () => onMenuItemClick('Dashboard')
  },
  {
    name: 'Statistic',
    option: '1',
    func: () => onMenuItemClick('Statistic')
  },
]
