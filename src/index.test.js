import foremanJs from '.';

test('output', () => {
  expect(foremanJs('🐰')).toBe('🐰');
  expect(foremanJs()).toBe('No args passed!');
});
