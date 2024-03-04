import { faker } from '@faker-js/faker';

interface usersInterface {
  id: string | number;
  name: string;
}

export const users: usersInterface[] = [
  {
    id: faker.string.uuid(),
    name: faker.person.fullName()
  },
  {
    id: faker.string.uuid(),
    name: faker.person.fullName()
  },
  {
    id: faker.string.uuid(),
    name: faker.person.fullName()
  },
  {
    id: faker.string.uuid(),
    name: faker.person.fullName()
  },
  {
    id: faker.string.uuid(),
    name: faker.person.fullName()
  },
  {
    id: faker.string.uuid(),
    name: faker.person.fullName()
  }
];
