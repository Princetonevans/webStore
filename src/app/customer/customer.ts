export class Customer {

  constructor(
    public name: string,
    public email: string,
    public phone?: number,
    public types?: string,
    public picker?: string,
    public total?: number,
    public notes?: string
  ) {  }

}
