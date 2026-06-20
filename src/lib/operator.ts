import validate from './validate';

export interface PhoneNumberInfo {
  phoneNumber: string;
  isValid: boolean;
  operator: string;
  operator_status: string;
}

type OperatorDigit = '3' | '4' | '5' | '6' | '7' | '8' | '9';

const OPERATOR_MAP: Record<OperatorDigit, string> = {
  '3': 'GrameenPhone',
  '7': 'GrameenPhone',
  '4': 'Banglalink',
  '9': 'Banglalink',
  '5': 'Teletalk',
  '6': 'Airtel',
  '8': 'Robi',
};

const findInitial = (phoneNumber: string): string | null => {
  const length = phoneNumber.length;
  if (length === 14) return phoneNumber.charAt(5);
  if (length === 13) return phoneNumber.charAt(4);
  if (length === 11) return phoneNumber.charAt(2);
  return null;
};

const operator = (phoneNumber: string): PhoneNumberInfo => {
  const isValid = validate(phoneNumber);

  if (!isValid) {
    return {
      phoneNumber,
      isValid: false,
      operator: 'No match found!',
      operator_status: 'Not a valid operator',
    };
  }

  const initial = findInitial(phoneNumber);
  const operatorName = initial
    ? (OPERATOR_MAP[initial as OperatorDigit] ?? 'No match found!')
    : 'No match found!';
  const operator_status = initial
    ? `(01${initial}) is a valid operator`
    : `(01${initial}) is not a valid operator`;

  return {
    phoneNumber,
    isValid: true,
    operator: operatorName,
    operator_status,
  };
};

export default operator;
