/**
 * Combines CSS class names, flattening arrays and joining with spaces.
 * Useful for conditionally applying multiple class names.
 *
 * @param classes - One or more class names or arrays of class names
 * @returns A single string with all class names joined by spaces
 *
 * @example
 * cx('base-class', ['modifier', 'state']) // 'base-class modifier state'
 */
export const cx = (...classes: (string | readonly string[])[]) =>
  classes.flat().join(' ');
