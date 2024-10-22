class Activity {
    status: string;
    date: string;

    constructor(status: string, date: string) {
        this.status = status;
        this.date = date;
    }

    getDetail() {
        return [this.status, this.date];
    }
}

class AdoptionActivity extends Activity {
    petName: string;
    adopterName: string;

    constructor(petName: string, adopterName: string, status: string, date: string) {
        super(status, date)
        this.petName = petName;
        this.adopterName = adopterName;
    }

    getDetail() {
        return [this.petName, this.adopterName, this.status, this.date];
    }
}

export {
    Activity,
    AdoptionActivity
};

