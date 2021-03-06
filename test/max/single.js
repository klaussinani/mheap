'use strict';
const test = require('ava');
const {MaxHeap, Node} = require('../../.');

const heap = new MaxHeap();

test('insert', t => {
  heap.insert(15, 'A');
  t.deepEqual(heap.root, new Node(15, 'A'));
  t.is(heap.root.key, 15);
  t.is(heap.root.value, 'A');
});

test('root', t => {
  t.deepEqual(heap.root, new Node(15, 'A'));
});

test('size', t => {
  t.is(heap.size, 1);
});

test('toPairs', t => {
  const node = new Node(15, 'A');
  t.deepEqual(heap.toPairs(), [[15, 'A']]);
  t.deepEqual(heap.toPairs(), [node.toPair()]);
  t.deepEqual(heap.toPairs(), [heap.root.toPair()]);
});

test('childIndices', t => {
  t.deepEqual(heap.childIndices(0), {});
});

test('children', t => {
  t.deepEqual(heap.children(0), {});
});

test('clear', t => {
  t.deepEqual(heap.clear(), new MaxHeap());
  t.is(heap.root, undefined);
  t.is(heap.size, 0);
});

test('degree', t => {
  heap.insert(15, 'A');
  t.is(heap.degree(0), 0);
});

test('extract', t => {
  const node = new Node(15, 'A');
  t.deepEqual(heap.extract(0), node);
  t.deepEqual(heap, new MaxHeap());
  t.deepEqual(heap.size, 0);
  heap.insert(15, 'A');
});

test('extractMax', t => {
  const node = new Node(15, 'A');
  t.deepEqual(heap.extractMax(), node);
  t.deepEqual(heap, new MaxHeap());
  t.deepEqual(heap.size, 0);
});

test('fullNodes', t => {
  heap.insert(15, 'A');
  t.deepEqual(heap.fullNodes(), []);
});

test('height', t => {
  t.is(heap.height(), 0);
});

test('includes', t => {
  t.true(heap.includes(15));
  t.false(heap.includes(5));
});

test('indexOf', t => {
  t.is(heap.indexOf(15), 0);
  t.is(heap.indexOf(5), -1);
});

test('internalNodes', t => {
  t.deepEqual(heap.internalNodes(), []);
});

test('isEmpty', t => {
  t.false(heap.isEmpty());
});

test('isFullNode', t => {
  t.false(heap.isFullNode(0));
});

test('isInternalNode', t => {
  t.false(heap.isInternalNode(0));
});

test('isLeafNode', t => {
  t.true(heap.isLeafNode(0));
});

test('isPartialNode', t => {
  t.false(heap.isPartialNode(0));
});

test('keys', t => {
  t.deepEqual(heap.keys(), [15]);
});

test('leafNodes', t => {
  const node = new Node(15, 'A');
  const leaves = heap.leafNodes();
  t.deepEqual(leaves, [node]);
  t.deepEqual(leaves, [heap.root]);
});

test('left', t => {
  t.is(heap.left(0), undefined);
});

test('leftIndex', t => {
  t.is(heap.leftIndex(0), 1);
});

test('levelOrder', t => {
  const array = [];
  heap.levelOrder(x => array.push(x));
  t.deepEqual(array, [new Node(15, 'A')]);
});

test('maxChild', t => {
  t.is(heap.maxChild(0), undefined);
});

test('maxChildIndex', t => {
  t.is(heap.maxChildIndex(0), -1);
});

test('minChild', t => {
  t.is(heap.minChild(0), undefined);
});

test('minChildIndex', t => {
  t.is(heap.minChildIndex(0), -1);
});

test('node', t => {
  t.deepEqual(heap.node(0), new Node(15, 'A'));
  t.deepEqual(heap.node(0), heap.root);
});

test('parent', t => {
  t.is(heap.parent(0), undefined);
});

test('parentIndex', t => {
  t.is(heap.parentIndex(0), -1);
});

test('partialNodes', t => {
  t.deepEqual(heap.partialNodes(), []);
});

test('remove', t => {
  t.deepEqual(heap.remove(0), heap);
  t.deepEqual(heap, new MaxHeap());
  t.is(heap.root, undefined);
  t.is(heap.size, 0);
  heap.insert(15, 'A');
});

test('right', t => {
  t.is(heap.right(0), undefined);
});

test('rightIndex', t => {
  t.is(heap.rightIndex(0), 2);
});

test('search', t => {
  const node = new Node(15, 'A');
  t.deepEqual(heap.search(15), heap.root);
  t.deepEqual(heap.search(15), node);
});

test('toArray', t => {
  const node = new Node(15, 'A');
  t.deepEqual(heap.toArray(), [heap.root]);
  t.deepEqual(heap.toArray(), [node]);
});

test('update', t => {
  const node = new Node(15, 'a');
  t.deepEqual(heap.update(15, 'a').root, heap.root);
  t.deepEqual(heap.root, node);
});

test('values', t => {
  t.deepEqual(heap.values(), ['a']);
});
