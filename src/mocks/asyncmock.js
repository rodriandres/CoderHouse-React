const products = [
    {id: 1, title: `Cristal Azul`, price: 500, pictureUrl: `https://ih1.redbubble.net/image.1096874013.0256/st,small,507x507-pad,600x600,f8f8f8.jpg`, stock: 5, description: `Para guerreros`},
    {id: 2, title: `Cristal Rojo`, price: 500, pictureUrl: `https://ih1.redbubble.net/image.1124674099.1525/st,small,507x507-pad,600x600,f8f8f8.jpg`, stock: 2, description: `Para siths`},
    {id: 3, title: `Cristal Violeta`, price: 350, pictureUrl: `https://ih1.redbubble.net/image.1124704617.2237/st,small,507x507-pad,600x600,f8f8f8.jpg`, stock: 6, description: `Para Para mitad guerreros mitad sabiondos de la fuerza`},
    {id: 4, title: `Cristal Verde`, price: 450, pictureUrl: `https://ih1.redbubble.net/image.1124693945.1983/st,small,507x507-pad,600x600,f8f8f8.jpg`, stock: 1, description: `Para personas como mayor compresion y sabiduria de la fuerza`},
]

const item = {id: 1, title: `Cristal Azul`, price: 500, pictureUrl: 'https://ih1.redbubble.net/image.1096874013.0256/st,small,507x507-pad,600x600,f8f8f8.jpg', stock: 5, description: `Para guerreros`};
    

export const getProducts = () => {
    return new Promise((res) =>{
        setTimeout(() => {
            res(products);
        }, 2000);
    })
};

export const getItem = () => {
    return new Promise((res) =>{
        setTimeout(() => {
            res(item);
        }, 2000);
    })
};