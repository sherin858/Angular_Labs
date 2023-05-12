export class Department {
  Id: number;
  DeptName: string;
  Location: string;
  constructor() {
    this.Id = Date.now();
    this.DeptName = 'new department';
    this.Location = 'unknown';
  }
}
