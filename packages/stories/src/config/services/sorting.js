/**
 * The default storyWeight
 * @type {Number}
 */
export const storyWeight = 1000;

/**
 * Compare 2 stories and sort them
 * Negative return value means storyA is first; positive means storyB is first
 * This means lower-weighted stories go first in the sorting.
 * @return {Number}
 */
export const storySort = (
  [storyIdA, storyA, kindParamsA, globalParamsA],
  [storyIdB, storyB, kindParamsB, globalParamsB]
) => {
  // do not sort stories from the same kind
  if (storyA.kind === storyB.kind) return 0;

  // use storyWeight
  const storyWeightA = kindParamsA.storyWeight || globalParamsA.storyWeight;
  const storyWeightB = kindParamsB.storyWeight || globalParamsB.storyWeight;
  const combined = storyWeightA - storyWeightB;
  if (combined) {
    return combined;
  }

  // show docs-only stories first
  if (storyA.parameters.docsOnly && !storyB.parameters.docsOnly) {
    return -1;
  }
  if (!storyA.parameters.docsOnly && storyB.parameters.docsOnly) return 1;

  // use alphabet
  return storyIdA.localeCompare(storyIdB, { numeric: true });
};
