//@ts-check
class ProductManager {
  #precioBaseDeGanancia = 1.15;
  constructor() {
    this.products = [];
  }
  getProduct() {
    console.log(this.products);
    return this.products;
  }
  findProduct(code) {
    const find = this.products.find((prod) => prod.code == code);
    if (find) {
      return find;
    } else {
      return undefined;
    }
  }
  getProductById(id) {
    const product = this.products.find((prod) => prod.code === id);
    if (product) {
      return product;
    } else {
      console.log("Not Found (getProductById)");
    }
  }
  #generarteCode() {
    let maxCode = 0;
    for (let i = 0; i < this.products.length; i++) {
      const prod = this.products[i];
      if (prod.code > maxCode) {
        maxCode = prod.code;
      }
    }
    return ++maxCode;
  }
  addProduct(title, description, price, thumbnail, stock) {
    if (!title || !description || !price || !thumbnail || !stock) {
      throw new Error("Todos los campos son obligatorios.");
    }

    let newProduct = {
      title,
      description,
      price,
      thumbnail,
      stock,
      code: this.#generarteCode(),
    };

    this.products = [...this.products, newProduct];
    return true;
  }
}

const ticketHolder = new ProductManager();
ticketHolder.addProduct(
  "Vodka",
  "Botella de Vodka marca New Style",
  1500,
  "http://res.cloudinary.com/dxf8ebmi7/image/upload/v1679363369/vodkanewstyle_m9ldmn.webp",
  20
);
ticketHolder.addProduct(
  "Queso cremoso",
  "Queso cremoso La Paulina X 1Kg",
  1800,
  "http://res.cloudinary.com/dxf8ebmi7/image/upload/v1679363369/quesocremoso_vwdrco.webp",
  20
);

const find1 = ticketHolder.findProduct(1);
const find2 = ticketHolder.findProduct(2);
console.log(find1, find2);

const product = ticketHolder.getProductById(3);

if (product) {
  console.log("Método getProductById");
  Object.entries(product).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
}
