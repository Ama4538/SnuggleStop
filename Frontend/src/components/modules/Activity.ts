class Activity {
    date: string;
    name: string;

    constructor(date: string, name: string) {
        this.date = date;
        this.name = name;
    }

    getDate() {
        return this.date
    }

    getName() {
        return this.name;
    }
}

class AdoptionActivity extends Activity {
    adopterName: string;
    status: string;

    constructor(date: string, name: string, adopterName: string, status: string) {
        super(date, name)
        this.adopterName = adopterName;
        this.status = status;
    }

    getAdopterName() {
        return this.adopterName
    }

    getStatus() {
        return this.status;
    }
}

class PetArrivalActivity extends Activity {
    species: string;
    breed: string;

    constructor(date: string, name: string, species: string, breed: string) {
        super(date, name)
        this.species = species;
        this.breed = breed;
    }

    getSpecies() {
        return this.species
    }

    getBreed() {
        return this.breed;
    }
}

class SupplyArrivalActivity extends Activity {
    supplier: string;
    amount: number;

    constructor(date: string, name: string, supplier: string, amount: number) {
        super(date, name)
        this.supplier = supplier;
        this.amount = amount;
    }

    getSupplier() {
        return this.supplier;
    }

    getAmount() {
        return this.amount
    }
}

export {
    Activity,
    AdoptionActivity,
    PetArrivalActivity,
    SupplyArrivalActivity
};

