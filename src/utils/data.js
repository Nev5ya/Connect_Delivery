
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
        status: 'work',
        description: 'Осуществляю доставку'
    },
    {
        id: 40,
        name: 'Курьер4',
        coordinates: [55.4, 37.9],
        status: 'offline',
        description: 'offline'
    },

]

export const orders = [
    {
        id: 1,
        name: 'Пицца',
        address: 'Москва, Мясницкая, 22',
        status: 'in transit',
        description: 'Предварительно позвонить',
        deliveryDatetime: '',
        courierID: 30
    },
    {
        typeLabel: 'order',
        id: 2,
        name: 'Канц товары',
        address: 'Москва, Варварка, 8',
        status: 'delivered',
        description: 'Доставить ко времени',
        deliveryDatetime: '',
        courierID: 20
    },
    {
        typeLabel: 'order',
        id: 3,
        name: 'Канц товары',
        address: 'Москва, Варварка, 8',
        status: 'expects',
        description: 'Доставить ко времени',
        deliveryDatetime: '',
        courierID: ''
    }
]
