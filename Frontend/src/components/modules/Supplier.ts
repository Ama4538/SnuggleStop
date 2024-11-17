class Supplier {
    name: string;
    totalProduct: number;
    contact: string;
    email: string;

    constructor(name: string, totalProduct: number, contact: string = "", email: string = "") {
        this.name = name;
        this.totalProduct = totalProduct;
        this.contact = contact;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getTotalProduct() {
        return this.totalProduct;
    }

    getContact() {
        return this.contact;
    }

    getEmail() {
        return this.email
    }
}

export {
    Supplier
}