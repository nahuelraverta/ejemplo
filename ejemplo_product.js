class ProductManager {

    #id //se fija como privado 
    #products //se fija como privado
  
    constructor() { //se genera el contructor para el array de productos y el ID arranca desde 1
      this.#id = 1;
      this.#products = [];
    }
  
    addProduct({ title, description, price, thumbnail, code, stock }) { //se genera la funcion de 'addproduct'
      constructor(); //ejecuta el contructor
      const isExist = this.isExist('code', code); //en una constante aquello que existe
  
      if (isExist) throw new Error(`El codigo ingresado ya existe`); //para lanzar aquellas propiedades que si figuran en el array
  
      if (title.length === 0 || description.length === 0 || price.length === 0 || thumbnail.length === 0 || code.length === 0 || stock.length === 0) throw new Error('Todos los campos son obligatorios');
  
      this.#products.push({ //pushea el producto y genera
        id: this.#id++, //id en creciente
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      });
    }
  
    getProducts() {
      return this.#products; //retorna la lista de productos
    }
  
    getProductById(id) {
      const product = this.#products.find(product => product.id === id);
  
      if (!product) throw new Error("Producto no encontrado");
  
      return product;
    }
  
    isExist(key, value) {
      return this.#products.find(product => product[key] === value)
    };
  }
  
  const item = {
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25
  };
  
  const product = new ProductManager();
  console.log(product.getProducts());
  product.addProduct(item);
  console.log(product.getProducts());
  product.addProduct(item);
  console.log(product.getProductById(1));
  console.log(product.getProductById(2));