const products = [
    {id: 1, name: `Cristal Azul`, category: 'Cristales', price: 500, pictureUrl: `https://ih1.redbubble.net/image.1096874013.0256/st,small,507x507-pad,600x600,f8f8f8.jpg`, stock: 5, description: `Para guerreros`},
    {id: 2, name: `Cristal Rojo`, category: 'Cristales', price: 500, pictureUrl: `https://ih1.redbubble.net/image.1124674099.1525/st,small,507x507-pad,600x600,f8f8f8.jpg`, stock: 2, description: `Para siths`},
    {id: 3, name: `Cristal Violeta`, category: 'Cristales', price: 350, pictureUrl: `https://ih1.redbubble.net/image.1124704617.2237/st,small,507x507-pad,600x600,f8f8f8.jpg`, stock: 6, description: `Para Para mitad guerreros mitad sabiondos de la fuerza`},
    {id: 4, name: `Cristal Verde`, category: 'Cristales', price: 450, pictureUrl: `https://ih1.redbubble.net/image.1124693945.1983/st,small,507x507-pad,600x600,f8f8f8.jpg`, stock: 1, description: `Para personas como mayor compresion y sabiduria de la fuerza`},
    {id: 5, name: `Sable Skywalker`, category: 'Monturas', price: 2000, pictureUrl: `https://pm1.narvii.com/6331/2e930519bb37b471adf6e9f5e8d20aa8cd9b0be3_hq.jpg`, stock: 1, description: `Montura de sable perteneciente a la familia skywalker por generaciones`},
    {id: 6, name: `Sable de obi wan`, category: 'Monturas', price: 1999, pictureUrl: `https://m.media-amazon.com/images/I/31O9fCj05yL.jpg`, stock: 1, description: `Montura de sable perteneciente al mismisimo obiwan kenobi o ben para los cuates`},
]

const categories = [
    {id: 1, name: "Cristals"},
    {id: 2, name: "Hilt"},
    {id: 3, name: "Accesorios"},
]
    

export const getProducts = (categoryId) => {
    var items = products;
    if (categoryId) {
        items = products.filter(p => p.category === categoryId);
    }
    return new Promise((res) =>{
        setTimeout(() => {
            res(items);
        }, 2000);
    })
};

export const getProduct = (id) => {
    return new Promise((res) =>{
        const item = products.find(p => p.id === parseInt(id));
        setTimeout(() => {
            res(item);
        }, 2000);
    })
};

export const getCategories = () => {
    return new Promise((res) =>{
        setTimeout(() => {
            res(categories);
        }, 2000);
    })
};