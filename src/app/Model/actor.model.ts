export class Actor 
{
    id:number;
    first_name:string;
    last_name:string;
    constructor(data:any)
    {
        this.id=data.id;
        this.first_name=data.first_name;
        this.last_name=data.last_name;
    }
}