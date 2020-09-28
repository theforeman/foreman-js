/**
 * The default storyWeight
 * @type {Number}
 */
export const storyWeight = 1000;

/**
 * Compare 2 stories and sort them
 * Negative return value means storyA is first; positive means storyB is first
 * @return {Number}
 */
export const storySort = ([storyIdA, storyA], [storyIdB, storyB]) => {
  // do not sort stories from the same kind
  if (storyA.kind === storyB.kind) return 0;

  // hard code Getting Started to show first
  if (storyA.kind === 'Introduction/Getting Started') return -1;
  if (storyB.kind === 'Introduction/Getting Started') return 1;

  // show docs-only stories first
  if (storyA.parameters.docsOnly && !storyB.parameters.docsOnly) {
    return -1;
  }
  if (!storyA.parameters.docsOnly && storyB.parameters.docsOnly) return 1;

  // use parameters.storyWeight - currently broken
  if (storyA.parameters.storyWeight !== storyB.parameters.storyWeight) {
    return storyA.parameters.storyWeight - storyB.parameters.storyWeight;
  }

  // use alphabet
  return storyIdA.localeCompare(storyIdB, { numeric: true });
};
