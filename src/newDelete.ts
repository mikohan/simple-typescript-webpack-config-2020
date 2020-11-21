export class MyClass {
  name: string;
  year: number;

  setName(name: string) {
    this.name = name;
  }
  setYear(year: number) {
    this.year = year;
  }
  get getAll() {
    return `Name: ${this.name} Year: ${this.year}`;
  }
}

export const test = 'test working';
