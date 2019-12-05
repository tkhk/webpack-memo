import { fizzbuzzCreator } from './modules/fizz_buzz';

const fizzbuzz = fizzbuzzCreator(10);

for (let i of fizzbuzz()) console.log(i);
