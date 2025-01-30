export class User {

  constructor(
    public id: number,
    public email: string,
    public password: string,
    public name: string,
    public age?: number,
  ) { }
}