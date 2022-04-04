import getGategoryTree from "./getCategoryTree";

it('gets category tree', () => {
  const categoryTree = getGategoryTree();
  expect(categoryTree.length).toBe(4);
});
