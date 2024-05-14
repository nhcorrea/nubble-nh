import {stringUtils} from '../stringUtils';

describe('stringUtils', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of each word', () => {
      const fnResult = (name: string) =>
        stringUtils.capitalizeFirstLetter(name);

      expect(fnResult('john doe')).toBe('John Doe');
      expect(fnResult('JOHN doe')).toBe('John Doe');
      expect(fnResult('JOHN DOE')).toBe('John Doe');
      expect(fnResult('john DOE')).toBe('John Doe');
      expect(fnResult('JoHn DoE')).toBe('John Doe');
      expect(fnResult('John')).toBe('John');
    });

    it('should remove leadingtrailling spaces', () => {
      const fnResult = (name: string) =>
        stringUtils.capitalizeFirstLetter(name);

      expect(fnResult(' john doe ')).toBe('John Doe');
      expect(fnResult('  john doe')).toBe('John Doe');
      expect(fnResult('john doe  ')).toBe('John Doe');
      expect(fnResult('  john doe  ')).toBe('John Doe');
    });
  });
});
