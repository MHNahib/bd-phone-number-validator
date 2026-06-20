import validate from '../lib/validate';

describe('validate', () => {
  describe('valid numbers', () => {
    it('accepts 11-digit format (01XXXXXXXXX)', () => {
      expect(validate('01700000000')).toBe(true);
    });

    it('accepts 13-digit format (8801XXXXXXXXX)', () => {
      expect(validate('8801700000000')).toBe(true);
    });

    it('accepts 14-digit format (+8801XXXXXXXXX)', () => {
      expect(validate('+8801700000000')).toBe(true);
    });

    it.each(['013', '014', '015', '016', '017', '018', '019'])(
      'accepts %s prefix',
      (prefix) => {
        expect(validate(`${prefix}00000000`)).toBe(true);
      }
    );
  });

  describe('invalid numbers', () => {
    it.each(['010', '011', '012'])(
      'rejects %s prefix',
      (prefix) => {
        expect(validate(`${prefix}00000000`)).toBe(false);
      }
    );

    it('rejects a number that is too short', () => {
      expect(validate('0170000000')).toBe(false);
    });

    it('rejects a number that is too long', () => {
      expect(validate('017000000000')).toBe(false);
    });

    it('rejects an empty string', () => {
      expect(validate('')).toBe(false);
    });

    it('rejects non-numeric characters', () => {
      expect(validate('0170000000a')).toBe(false);
    });

    it('rejects a number with spaces', () => {
      expect(validate('017 0000000')).toBe(false);
    });
  });
});
