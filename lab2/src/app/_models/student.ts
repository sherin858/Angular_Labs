export class Student {
  Id: number;
  Name: string;
  Age: number;
  constructor() {
    this.Id = Date.now();
    this.Name = 'std';
    this.Age = 0;
  }
}
