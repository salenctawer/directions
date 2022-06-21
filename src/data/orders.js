const orders = [
    {
        id: '1', 
        pick: {
            id: '2',
            name: 'Moscow',
            position: { x: 55.7522, y: 37.6156 }
        },
        deliver: {
            id: '1',
            name: 'Perm',
            position: { x: 58.0105, y: 56.2502 }
        },
        vehicle:'autobus',
        price: 300,
    },
    {
        id: '2',
        pick: {
            id: '4',
            name: 'Saint-P',
            position: { x: 59.9386, y: 30.3141 }
        },
        deliver: {
            id: '1',
            name: 'Perm',
            position: { x: 58.0105, y: 56.2502 }
        },
        vehicle:'car', 
        price: 300,
    },
    {
        id: '3', 
        pick: {
            id: '3',
            name: 'Samara',
            position: { x: 53.2022, y :50.1596 }
        },
        deliver: {
            id: '7',
            name: 'Sochi',
            position: { x: 43.5992, y: 39.7257 }
        },
        vehicle:'airplane', 
        price: 300,
    },
    {
        id: '4', 
        pick: {
            id: '5',
            name: 'Kazan',
            position: { x: 55.7887, y: 49.1221 }
        },
        deliver: {
            id: '2',
            name: 'Moscow',
            position: { x: 55.7522, y: 37.6156 }
        }, 
        vehicle:'autobus',
        price: 300,
    },
    {
        id: '5', 
        pick: {
            id: '1',
            name: 'Perm',
            position: { x: 58.0105, y: 56.2502 }
        },
        deliver: {
            id: '6',
            name: 'Omsk',
            position: { x: 54.9924, y: 73.3686 }
        },
        vehicle:'autobus', 
        price: 300,
    },
    {
        id: '6', 
        pick: {
            id: '4',
            name: 'Saint-P',
            position: { x: 59.9386, y: 30.3141 }
        }, 
        deliver: {
            id: '1',
            name: 'Perm',
            position: { x: 58.0105, y: 56.2502 }
        },
        vehicle:'car', 
        price: 300,
    },
]

export default orders