import { faker } from '@faker-js/faker';

const fakeNames = Array.from(Array(10000), () => faker.name.fullName());

export default fakeNames;
