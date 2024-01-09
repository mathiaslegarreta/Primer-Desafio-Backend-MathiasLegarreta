class ProductManager {
    static lastId = 0;

    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, img, code, stock) {

        if (!title || !description || !price || !img || !code || !stock) {
            console.log("All fields are required.");
            return;
        }

        if (this.products.some(item => item.code === code)) {
            console.log("Code must be unique");
            return;
        }

        const newProduct = {
            id: ++ProductManager.lastId,
            title,
            description,
            price,
            img,
            code,
            stock

        }

        this.products.push(newProduct);

    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(item => item.id === id);

        if (!product) {
            console.log("Not Found");
        } else {
            console.log(product);

        }


    }



}
