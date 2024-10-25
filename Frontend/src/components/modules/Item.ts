class Item {
    name: string;
    avgPrice: number;
    price: number;
    amount: number;

    constructor(name: string, avgPrice: number = 0, price: number = 0, amount: number = 0) {
        this.name = name;
        this.avgPrice = avgPrice;
        this.price = price;
        this.amount = amount
    }

    getName() {
        return this.name
    }

    getAvgPrice() {
        return this.avgPrice;
    }

    getPrice() {
        return this.price;
    }

    getAmount() {
        return this.amount;
    }
}

export {
    Item,
};
