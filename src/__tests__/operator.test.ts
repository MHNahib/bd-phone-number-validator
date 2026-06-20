import operator, { PhoneNumberInfo } from '../lib/operator';

describe('operator', () => {
  describe('operator detection for valid numbers', () => {
    const cases: Array<[string, string, string]> = [
      ['01300000000', 'GrameenPhone', '013 prefix'],
      ['01700000000', 'GrameenPhone', '017 prefix'],
      ['01400000000', 'Banglalink',   '014 prefix'],
      ['01900000000', 'Banglalink',   '019 prefix'],
      ['01500000000', 'Teletalk',     '015 prefix'],
      ['01600000000', 'Airtel',       '016 prefix'],
      ['01800000000', 'Robi',         '018 prefix'],
    ];

    it.each(cases)('%s → %s (%s)', (number, expectedOperator) => {
      expect(operator(number).operator).toBe(expectedOperator);
    });
  });

  describe('country code variants', () => {
    it('works with +88 prefix', () => {
      const result = operator('+8801700000000');
      expect(result.isValid).toBe(true);
      expect(result.operator).toBe('GrameenPhone');
    });

    it('works with 88 prefix', () => {
      const result = operator('8801700000000');
      expect(result.isValid).toBe(true);
      expect(result.operator).toBe('GrameenPhone');
    });
  });

  describe('return value shape', () => {
    it('includes the input phone number', () => {
      expect(operator('01700000000').phoneNumber).toBe('01700000000');
    });

    it('returns isValid true for valid numbers', () => {
      expect(operator('01700000000').isValid).toBe(true);
    });

    it('includes a valid operator_status message', () => {
      expect(operator('01700000000').operator_status).toBe('(017) is a valid operator');
    });

    it('returns independent objects — no shared state between calls', () => {
      const a = operator('01700000000');
      const b = operator('01500000000');
      expect(a.operator).toBe('GrameenPhone');
      expect(b.operator).toBe('Teletalk');
    });
  });

  describe('invalid numbers', () => {
    let result: PhoneNumberInfo;

    beforeEach(() => {
      result = operator('01000000000');
    });

    it('returns isValid false', () => {
      expect(result.isValid).toBe(false);
    });

    it('returns "No match found!" as operator', () => {
      expect(result.operator).toBe('No match found!');
    });

    it('returns "Not a valid operator" as status', () => {
      expect(result.operator_status).toBe('Not a valid operator');
    });

    it('still returns the input phone number', () => {
      expect(result.phoneNumber).toBe('01000000000');
    });
  });
});
