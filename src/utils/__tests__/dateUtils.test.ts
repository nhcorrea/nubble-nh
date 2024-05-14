import {dateUtils} from '@utils';
import {Duration, add, sub} from 'date-fns';

const MOCKED_NOW = () => 1713227451;

function fnResult(time: string) {
  return dateUtils.formatRelative(time);
}

function dataISO(duration: Duration, op: 'add' | 'sub' = 'sub') {
  if (op === 'add') {
    return add(Date.now(), duration).toISOString();
  }
  return sub(Date.now(), duration).toISOString();
}

describe('dateUtils', () => {
  describe('formatRelative', () => {
    beforeAll(() => jest.spyOn(Date, 'now').mockImplementation(MOCKED_NOW));

    afterAll(() => jest.clearAllMocks());

    it('should be displayed in seconds if less than 1 minuto ago', () => {
      const time = dataISO({seconds: 30});

      expect(fnResult(time)).toBe('30s');
    });

    it('should be displayed in minutes if less than 1 hour ago', () => {
      const time = dataISO({minutes: 30});

      expect(fnResult(time)).toBe('30m');
    });
    it('should be displayed in hours if less than 1 day ago', () => {
      const time = dataISO({hours: 4});

      expect(fnResult(time)).toBe('4h');
    });

    it('should be displayed in hours if less than 1 week ago', () => {
      const time = dataISO({days: 4});

      expect(fnResult(time)).toBe('4d');
    });

    it('should be displayed in weeks if less than 1 month ago', () => {
      const time = dataISO({weeks: 2});

      expect(fnResult(time)).toBe('2w');
    });

    it('should be displayed in months if less than 1 year ago', () => {
      const time = dataISO({months: 2});

      expect(dateUtils.formatRelative(time)).toBe('2M');
    });

    it('should be displayed in days if more than 1 year ago', () => {
      const time = dataISO({years: 4});

      expect(fnResult(time)).toBe('20/01/1966');
    });

    it('should be displayed in days if future date', () => {
      const time = dataISO({years: 4}, 'add');

      expect(fnResult(time)).toBe('20/01/1974');
    });
  });
});
