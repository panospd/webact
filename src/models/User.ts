interface UserPros {
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserPros) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserPros): void {
    this.data = { ...this.data, ...update };
  }
}
