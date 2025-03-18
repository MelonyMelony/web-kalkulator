import { fizzBuzz } from './fizzbuzz.js';

describe('FizzBuzz funksjonen', () => {
    test('Skal returnere "Fizz" for tall delelig på 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
        expect(fizzBuzz(6)).toBe('Fizz');
        expect(fizzBuzz(9)).toBe('Fizz');
    });

    test('Skal returnere "Buzz" for tall delelig på 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
        expect(fizzBuzz(10)).toBe('Buzz');
        expect(fizzBuzz(20)).toBe('Buzz');
    });

    test('Skal returnere "FizzBuzz" for tall delelig på både 3 og 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(30)).toBe('FizzBuzz');
    });

    test('Skal returnere tallet som en string hvis det ikke er delelig med 3 eller 5', () => {
        expect(fizzBuzz(7)).toBe('7');
        expect(fizzBuzz(8)).toBe('8');
    });
});
