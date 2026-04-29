import { describe, it, expect } from 'vitest';
import { getSignByDate, getCompatibilityScore, generateLuckyNumbers, getElementName, getModalityName, getMoonPhase } from '../utils/signs';

describe('getSignByDate', () => {
  it('should return Aries for March 25', () => {
    const sign = getSignByDate(new Date('2024-03-25'));
    expect(sign?.id).toBe('aries');
  });

  it('should return Capricorn for January 15', () => {
    const sign = getSignByDate(new Date('2024-01-15'));
    expect(sign?.id).toBe('capricornus');
  });

  it('should return null for invalid date', () => {
    const sign = getSignByDate(null);
    expect(sign).toBeNull();
  });
});

describe('getCompatibilityScore', () => {
  it('should return high score for Aries and Leo', () => {
    const score = getCompatibilityScore('aries', 'leo');
    expect(score).toBeGreaterThanOrEqual(80);
  });

  it('should return null for missing params', () => {
    expect(getCompatibilityScore('aries', null)).toBeNull();
  });
});

describe('generateLuckyNumbers', () => {
  it('should return 5 numbers', () => {
    const numbers = generateLuckyNumbers(new Date('2024-03-21'), 'aries');
    expect(numbers).toHaveLength(5);
  });

  it('should return numbers between 1 and 60', () => {
    const numbers = generateLuckyNumbers(new Date('2024-03-21'), 'aries');
    numbers.forEach(num => {
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(60);
    });
  });
});

describe('getElementName', () => {
  it('should return correct element names', () => {
    expect(getElementName('fire')).toBe('Fogo');
    expect(getElementName('earth')).toBe('Terra');
    expect(getElementName('air')).toBe('Ar');
    expect(getElementName('water')).toBe('Água');
  });
});

describe('getModalityName', () => {
  it('should return correct modality names', () => {
    expect(getModalityName('cardinal')).toBe('Cardinal');
    expect(getModalityName('fixed')).toBe('Fixo');
    expect(getModalityName('mutable')).toBe('Mutável');
  });
});

describe('getMoonPhase', () => {
  it('should return moon phase object', () => {
    const phase = getMoonPhase(new Date('2024-01-01'));
    expect(phase).toHaveProperty('name');
    expect(phase).toHaveProperty('emoji');
    expect(phase).toHaveProperty('description');
  });
});