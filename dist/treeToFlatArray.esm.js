/*!
 * operation-tree v1.0.0
 * (c) 2019-2019 yujinpan
 * Released under the MIT License.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function checkValidArray(data) {
  return !!(Array.isArray(data) && data.length);
}

var defaultTreeDataProps = {
  children: 'children',
  parent: 'parent'
};

/**
 * tree node each
 *
 * @example
 *
 * const treeData = [{ id: 1, name: '1', children: [{ id: 2, name: '2' }] }];
 * treeEach(treeData, (node, index, arr, parent) => {
 *   console.log(node.name, index, arr, parent);
 * });
 * // '1', 0, [treeData], undefined
 * // '2', 0, [treeData[0].children], [treeData[0]]
 *
 * // use children props
 * const treeData = [{ id: 1, name: '1', child: [...] }];
 * treeEach(treeData, () => {...}, { children: 'child' });
 */

function treeEach(data, callback) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultTreeDataProps;
  var children;

  (function recursive(data, parent) {
    data.forEach(function (node, index, arr) {
      children = node[props.children];
      callback(node, index, arr, parent);

      if (checkValidArray(children)) {
        recursive(children, node);
      }
    });
  })(data, null);
}

/**
 * tree to flat array
 *
 * @example
 *
 * const treeData = [{ id: 1, name: '1', children: [{ id: 2, name: '2' }] }];
 * const result = treeToFlatArray(treeData);
 * console.log(result);
 * // [
 * //   { id: 1, name: '1', children: [{ id: 2, name: '2' }] },
 * //   { id: 2, name: '2' }
 * // ]
 */

function treeToFlatArray(data) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (node) {
    return node;
  };
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultTreeDataProps;
  var result = [];
  treeEach(data, function () {
    result.push(callback.apply(void 0, arguments));
  }, props);
  return result;
}

export default treeToFlatArray;