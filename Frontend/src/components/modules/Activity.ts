class Activity {
    date: string;
    status: string;
    
    constructor(date: string, status: string) {
        this.date = date;
        this.status = status;
    }

    getDetail() {
        return [this.date, this.status];
    }
}

class AdoptionActivity extends Activity {
    petName: string;
    adopterName: string;

    constructor(date: string, petName: string, adopterName: string, status: string) {
        super(date, status)
        this.petName = petName;
        this.adopterName = adopterName;
    }

    getDetail() {
        return [this.date, this.petName, this.adopterName, this.status];
    }
}

export {
    Activity,
    AdoptionActivity
};

