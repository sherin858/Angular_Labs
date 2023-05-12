export class Department {
  constructor(
    public id: number = Date.now(),
    public name: string = 'new department',
    public location: string = 'unknown'
  ) {}
}
