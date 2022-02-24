export const couriers = [
    {
        id: 10,
        name: 'Курьер1',
        coordinates: [55.684758, 37.338521],
        status: 'online',
        description: 'Свободен'
    },
    {
        id: 20,
        name: 'Курьер2',
        coordinates: [55.8, 37.7],
        status: 'offline',
        description: 'offline'
    },
    {
        id: 30,
        name: 'Курьер3',
        coordinates: [55.9, 37.9],
        status: 'busy',
        description: 'Осуществляю доставку'
    },

]

export const orders = [
    {
        id: 1,
        name: 'Пицца',
        address: 'Москва, Мясницкая, 22',
        status: 'expects',
        description: 'Предварительно позвонить',
        deliveryDatetime: '',
        courierID: 30
    },
    {
        typeLabel: 'order',
        id: 2,
        name: 'Канц товары',
        address: 'Москва, Варварка, 8',
        status: 'expects',
        description: 'Доставить ко времени',
        deliveryDatetime: '',
        courierID: null
    }
]
