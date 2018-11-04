export class Contact {

  constructor(
    public name: string,
    public email: string,
    public description?: string,
    public picker?: string,
    public phone?: number,
    public types?: string
  ) {  }

}
