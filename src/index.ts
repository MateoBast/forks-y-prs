import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
}

class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  products: Product[] = [];

  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }

  addProducts(newProducts: Product[]) {
    this.products.push(...newProducts); // Agrega varios productos a la vez
  }

  static findProductsBelow(precioBase: number) {
    return products.filter(producto => producto.price < precioBase);
  }
}

// Ejemplo de uso del método findProductsBelow
const productosBaratos = User.findProductsBelow(250);
console.log(productosBaratos);

export { User, Product };
