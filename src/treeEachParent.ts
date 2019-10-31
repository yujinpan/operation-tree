import { TreeDataProps } from './common';

/**
 * tree node each parent
 *
 * @example
 *
 * const treeData = [
 *   { id: 1, name: '123', children: [{ id: 2, name: '2', parent: null }] }
 * ];
 * treeData[0].children[0].parent = treeData[0];
 * const names: string[] = [];
 * treeEachParent(treeData[0].children, (parent) => !!names.push(parent.name));
 * // console.log(names)
 * // ['123']
 */
export default function treeEachParent<T>(
  treeData: T[],
  callback: (node: T) => void | boolean,
  props: TreeDataProps = { parent: 'parent' }
): void {
  const propsParent = props.parent;
  let parent: T;

  treeData.forEach((node) => {
    recursive(node);
  });

  function recursive(node): void {
    parent = node[propsParent];

    // if callback false, skip parent
    if (parent && callback(parent) !== false) {
      recursive(parent);
    }
  }
}
