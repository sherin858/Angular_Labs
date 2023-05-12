export class Department {
  constructor(
    public id: number = Date.now(),
    public Name: string = 'new department',
    public Location: string = 'unknown'
  ) {}
}
