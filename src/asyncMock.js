const products = [

    {
        id: '1',
        name: 'Tarot',
        price: '6500',
        category: 'sesiones',
        img: 'https://d22fxaf9t8d39k.cloudfront.net/6fe858b6f1ac4e3e5cf890c0dd8880c6cd515a344dee082dba50e16f0a4a63ab156461.png',
        stock: '10',
        description: 'El tarot como herramienta para tener un panorama'
    },
    {
        id: '2',
        name: 'Registro Akashicos',
        price: '7000',
        category: 'sesiones',
        img: 'https://d22fxaf9t8d39k.cloudfront.net/394ed90c20aa3e6cebdfa63367eed8c030f0d8196a0748c0754122452aeda777156461.png',
        stock: '10',
        description: 'Conectamos y trabajamos con tus guias para obtener respuestas y consejos de utilidad'
    },
    {
        id: '3',
        name: 'Armonizacion de Chakras',
        price: '7000',
        category: 'sesiones',
        img: 'https://d22fxaf9t8d39k.cloudfront.net/6482215d1fe6e84e47ac8a1816b1a94206fdfc0d6883e5611af9cb25e0dcfffc156461.png',
        stock: '10',
        description: 'busca equilibrar y energizar los centros de energía del cuerpo'
    },

    {
        "id": '4',
        "name": 'Lazos con el Alma',
        "price": '8400',
        "img": 'https://d22fxaf9t8d39k.cloudfront.net/3038612c1d17a85826ec49928e9bcc574f86cad37583e5c4f8aeacc74a9131ba156461.png',
        stock: '10',
        description: ' El objetivo es descubrir y nutrir aspectos internos, sanar heridas emocionales y promover un mayor autoconocimiento y aceptación'
    }

]

export const getProducts = ()=> {
return new Promise ((resolve) => {
    setTimeout (() => {
        resolve (products)
    }, 500)
})
}