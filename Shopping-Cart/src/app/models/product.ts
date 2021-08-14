export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id:number, name:string, description='', price=0, imageUrl='https://www.cnet.com/a/img/Fg6bqw0YNV4ocduG5a5IgnnpMoc=/940x0/2019/07/17/058eb14f-ca96-4f36-b024-27c487552f22/gettyimages-469830534.jpg'){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl


    }
}
