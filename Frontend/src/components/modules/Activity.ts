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
        super(date ,name)
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

export {
    Activity,
    AdoptionActivity,
    PetArrivalActivity
};

