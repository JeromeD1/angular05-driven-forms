export class Order {


        constructor(
            public title: string,
            public quantity: number,
            public date: Date,
            public contact: string
        ) {}


        //revient exectement au même qu'écrire :

        //---------------------------------------

    // title: string;
    // quantity: number;
    // date: Date;
    // contact: string;

    // constructor(title: string, quantity: number, date: Date, contact: string) {
    //         this.title=title;
    //         this.quantity=quantity;
    //         this.date=date;
    //         this.contact=contact;
    //     }
}