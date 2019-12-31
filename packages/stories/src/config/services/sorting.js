/**
 * The default storyWeight
 * @type {Number}
 */
export const storyWeight = 1000;

/**
 * Compare 2 stories and sort them
 * @return {Number}
 */
export const storySort = ([storyIdA, storyA], [storyIdB, storyB]) => {
  // do not sort stories from the same kind
  if (storyA.kind === storyB.kind) return 0;

  // use parameters.storyWeight
  if (storyA.parameters.storyWeight !== storyB.parameters.storyWeight) {
    return storyA.parameters.storyWeight - storyB.parameters.storyWeight;
  }

  // use alphabet
  return storyIdA.localeCompare(storyIdB, { numeric: true });
};
