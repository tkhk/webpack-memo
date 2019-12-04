import { fizzbuzzCreator } from './modules/fizz_buzz';

const fizzbuzz = fizzbuzzCreator(30);
for (let i of fizzbuzz()) console.log(i);
