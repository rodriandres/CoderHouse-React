const products = [
    {id: 1, title: `Cristal Azul`, price: 500, pictureUrl: `hhtp.loquesea`, stock: 5, description: `Para guerreros`},
    {id: 2, title: `Cristal Rojo`, price: 500, pictureUrl: `hhtp.loquesea`, stock: 2, description: `Para siths`},
    {id: 3, title: `Cristal Violeta`, price: 350, pictureUrl: `hhtp.loquesea`, stock: 6, description: `Para Para mitad guerreros mitad sabiondos de la fuerza`},
    {id: 4, title: `Cristal Verde`, price: 450, pictureUrl: `hhtp.loquesea`, stock: 1, description: `Para personas como mayor compresion y sabiduria de la fuerza`},
]

const item = {id: 1, title: `Cristal Azul`, price: 500, pictureUrl: '../../../public/images/cristal_azul.jpg', stock: 5, description: `Para guerreros`};
    

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