export function isEmail(value) {
  return value.includes('@');
}

export function isNotEmpty(value) {
  return value.trim() !== '';
}

export function hasMinLength(value, minLength = 6) {
  return value.length >= minLength;
}

export function isEqualsToOtherValue(value, otherValue) {
  return value === otherValue;
}