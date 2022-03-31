import { StyleSheet } from 'react-native';
import { scaleFont } from './mixins';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_40 = scaleFont(40);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

export const typo = StyleSheet.create({
  font8: {
    fontSize: scaleFont(8),
    lineHeight: scaleFont(13),
    fontFamily: 'Inter',
  },
  font9: {
    fontSize: scaleFont(9),
    lineHeight: scaleFont(14),
    fontFamily: 'Inter',
  },
  font10: {
    fontSize: scaleFont(10),
    lineHeight: scaleFont(15),
    fontFamily: 'Inter',
  },
  font11: {
    fontSize: scaleFont(11),
    lineHeight: scaleFont(16),
    fontFamily: 'Inter',
  },
  font12: {
    fontSize: scaleFont(12),
    lineHeight: scaleFont(17),
    fontFamily: 'Inter',
  },
  font13: {
    fontSize: scaleFont(13),
    lineHeight: scaleFont(18),
    fontFamily: 'Inter',
  },
  font14: {
    fontSize: scaleFont(14),
    lineHeight: scaleFont(19),
    fontFamily: 'Inter',
  },
  font15: {
    fontSize: scaleFont(15),
    lineHeight: scaleFont(20),
    fontFamily: 'Inter',
  },
  font16: {
    fontSize: scaleFont(16),
    lineHeight: scaleFont(21),
    fontFamily: 'Inter',
  },
  font17: {
    fontSize: scaleFont(17),
    lineHeight: scaleFont(22),
    fontFamily: 'Inter',
  },
  font18: {
    fontSize: scaleFont(18),
    lineHeight: scaleFont(23),
    fontFamily: 'Inter',
  },
  font19: {
    fontSize: scaleFont(19),
    lineHeight: scaleFont(24),
    fontFamily: 'Inter',
  },
  font20: {
    fontSize: scaleFont(20),
    lineHeight: scaleFont(25),
    fontFamily: 'Inter',
  },
  font22: {
    fontSize: scaleFont(22),
    lineHeight: scaleFont(27),
    fontFamily: 'Inter',
  },
  font24: {
    fontSize: scaleFont(24),
    lineHeight: scaleFont(29),
    fontFamily: 'Inter',
  },
  font28: {
    fontSize: scaleFont(28),
    lineHeight: scaleFont(33),
    fontFamily: 'Inter',
  },
  font32: {
    fontSize: scaleFont(32),
    lineHeight: scaleFont(37),
    fontFamily: 'Inter',
  },
  font36: {
    fontSize: scaleFont(36),
    lineHeight: scaleFont(41),
    fontFamily: 'Inter',
  },
});
