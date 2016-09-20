 - **swap**(< _number_ >second, < _number_ >first) - *void* - 

 - **defaultCompare**(< _number_ >second, < _number_ >first) - *boolean* - 

 - **safeCompare**(< _function_ >the, < _number_ >second, < _number_ >first) - *boolean* - 

 - **BinaryHeap**(< _function_ >[compare]) - *void* - Single argument constructor.

 - **peek**(< _void_ >) - *any* - Returns the min node of the heap.

 - **getParent**(< _number_ >index) - *any* - Returns the parent element of a given index in the heap.

 - **getLeftChild**(< _number_ >index) - *any* - Returns the left child element of a given index in the heap.

 - **getRightChild**(< _number_ >index) - *any* - Returns the right child element of a given index in the heap.

 - **size**(< _void_ >) - *number* - Returns the size of the heap.

 - **insert**(< _any_ >the) - *void* - Inserts a Node into the heap.

 - **delete**(< _number_ >if) - *void* - Removes the min in the heap and reorders heap with new min.

 - **_heapify**(< _number_ >the) - *void* - Actually does the heapify-ing.

 - **heapify**(< _number_ >the) - *array* - Reorganizes the input array into a legal binary heap.

 - **defaultCompare**(< _number_ >second, < _number_ >first) - *boolean* - 

 - **safeCompare**(< _function_ >the, < _number_ >second, < _number_ >first) - *boolean* - 

 - **BinarySearchTree**(< _function_ >[compare]) - *void* - Single argument constructor.

 - **hasRight**(< _Node_ >the) - *boolean* - Checks if the given node has a right branch.

 - **hasLeft**(< _Node_ >the) - *boolean* - Checks if the given node has a left branch.

 - **isLeaf**(< _Node_ >the) - *boolean* - Checks if the given node is a leaf.

 - **emptySubtree**(< _Node_ >the) - *void* - Empties the subtree of the given node.

 - **emptyTree**(< _void_ >) - *void* - Empties the entire tree.

 - **heightSubtree**(< _Node_ >the) - *number* - Find the height of a subtree.

 - **numNodesSubtree**(< _Node_ >the) - *number* - Find the number of nodes in a subtree.

 - **numLeavesSubtree**(< _Node_ >the) - *number* - Find the number of leaves in a subtree.

 - **insert**(< _Node_ >[node], < _any_ >the) - *void* - Insert a node into the tree.

 - **search**(< _Node_ >[node], < _any_ >the) - *Node || false* - Search for a node in the tree.

 - **DoublyLinkedList**(< _any_ >[data]) - *void* - Single argument constructor.

 - **insertFront**(< _any_ >data) - *void* - Create a node from given data and insert to front of linked list.

 - **insertNth**(< _any_ >data, < _number_ >position) - *void* - Create a node from given data and insert in given location of linked list.

 - **insertAfter**(< _any_ >data, < _any_ >the) - *boolean* - Create a node from given data and inserts after a given node. of linked list.

 - **insertBack**(< _any_ >data) - *void* - Create a node from given data and insert to end of linked list.

 - **remove**(< _any_ >data) - *boolean* - Remove a node based on its given data

 - **removeNth**(< _number_ >index) - *void* - Remove a node based on the given position in the linked list

 - **find**(< _any_ >data) - *boolean || Node* - Find a node by a given value

 - **shred**(< _any_ >input) - *number* - Transforms input into a number.

 - **BitArray**(< _number_ >[size) - *void* - Instantiates a bit array with given size.

 - **set**(< _boolean_ >the, < _number_ >the) - *void* - _no description provided_

 - **get**(< _number_ >the) - *number* - Returns the bit from the bit array at desired location.

 - **size**(< _void_ >) - *number* - Returns the size of the bit array.

 - **resize**(< _number_ >the) - *void* - Adjusts the size of the bit array.

 - **complement**(< _BitArray_ >[bitarray) - *BitArray* - Resolve the complement bit array.

 - **union**(< _BitArray_ >[bitarray) - *BitArray* - Resolve the union bit array.

 - **intersection**(< _BitArray_ >[bitarray) - *BitArray* - Resolve the intersection bit array.

 - **difference**(< _BitArray_ >[bitarray) - *BitArray* - Resolve the difference bit array.

 - **toString**(< _void_ >) - *string* - Converts the bit array into a string of bits.

 - **hash**(< _any_ >the) - *number* - 

 - **removeCustom**(< _DoublyLinkedList_ >the, < _any_ >the) - *void* - 

 - **Hashmap**(< _void_ >) - *void* - No argument constructor.

 - **put**(< _any_ >the, < _any_ >the) - *void* - Inserts an entry into the hashmap.

 - **get**(< _any_ >the) - * || false* - Returns an entry based on a given key.

 - **delete**(< _any_ >the) - *boolean* - Deletes an entry based on a given key.

 - **next**(< _void_ >) - *key* - Updates the current node to the next node after returning the current node.

 - **iterator**(< _void_ >) - *key* - Resets the internal iterator to the first entry and returns it.

 - **size**(< _void_ >) - *number* - Returns the amount of unique entries within the hashmap.

 - **KaryTree**(< _Node_ >the) - *void* - Creates an empty k-ary tree.

 - **isLeaf**(< _Node_ >the) - *boolean* - Checks if the given node is a leaf.

 - **emptySubtree**(< _Node_ >the) - *void* - Empties the subtree of the given node.

 - **emptyTree**(< _void_ >) - *void* - Empties the entire tree.

 - **search**(< _Node_ >[node], < _any_ >the) - *Node || false* - Search for a node in the tree.

 - **Queue**(< _any_ >[data]) - *void* - Single argument constructor.

 - **enqueue**(< _any_ >data) - *void* - Creates a node with the given data and adds that node to the back of the queue

 - **dequeue**(< _void_ >) - *void* - Removes the node at the front of the queue

 - **modInverse**(< _number_ >the, < _number_ >the) - *number* - 

 - **gcd**(< _number_ >second, < _number_ >first) - *number* - 

 - **safePOW**(< _number_ >the, < _number_ >the, < _number_ >the) - *number* - 

 - **ascii**(< _string_ >the) - *number* - 

 - **RollingHash**(< _number_ >the) - *void* - Single argument constructor which defines the base of the working

 - **hash**(< _number || string || Array_ >the) - *number* - Computes a hash on the input assuming it is of the same base of the instance of the rolling hash.

 - **append**(< _string || number_ >the) - *void* - Appends a new segment onto the rolling hash window.

 - **skip**(< _string || number_ >the) - *void* - Disjoins the trailing segment of rolling hash window.

 - **slide**(< _string || number_ >the, < _string || number_ >the) - *number* - Shifts the window over by one iteration and returns the new internal hash value.

 - **set**(< _string || Array_ >either) - *number* - Sets the internal window of the rolling hash. Usually set with the beginning elements that fit within the window of the item to find.

 - **SinglyLinkedList**(< _any_ >[data]) - *void* - Single argument constructor.

 - **insertFront**(< _any_ >data) - *void* - Create a node from given data and insert to front of linked list.

 - **insertNth**(< _any_ >data, < _number_ >position) - *void* - Create a node from given data and insert in given location of linked list.

 - **insertAfter**(< _any_ >data, < _any_ >the) - *boolean* - Create a node from given data and inserts after a given node.

 - **insertBack**(< _any_ >data) - *void* - Create a node from given data and insert to end of linked list.

 - **remove**(< _any_ >data) - *boolean* - Remove a node based on its given data

 - **removeNth**(< _number_ >index) - *void* - Remove a node based on the given position in the linked list

 - **find**(< _any_ >data) - *boolean || Node* - Find a node by a given value

 - **defaultCompare**(< _number_ >second, < _number_ >first) - *boolean* - 

 - **equal**(< _any_ >second, < _any_ >first) - *boolean* - 

 - **safeCompare**(< _function_ >the, < _number_ >second, < _number_ >first) - *boolean* - 

 - **SortedArray**(< _function_ >[compare]) - *void* - Single argument constructor.

 - **insert**(< _any_ >the) - *void* - Adds an element into the array in its sorted position.

 - **delete**(< _any_ >the) - *boolean* - Deletes the first occurance of an element from the array.

 - **get**(< _number_ >index) - *element* - Returns the element at the given index.

 - **size**(< _void_ >) - *number* - Returns the amount of elements in the sorted array.

 - **toString**(< _void_ >) - *string* - 

 - **Stack**(< _any_ >[data]) - *void* - Single argument constructor.

 - **peek**(< _void_ >) - *Node* - Returns the top of the stack.

 - **push**(< _any_ >data) - *void* - Creates a node with the given data and adds that node to the top of the stack

 - **pop**(< _void_ >) - *Node* - Removes the node at the top of the stack.

### <a href="#multidirectional_tree_node" name="multidirectional_tree_node">Needle.Multidirectional_Tree_Node()</a>
propertyproperty
 - **Multidirectional_Tree_Node**(< _any_ >data) - *void* - Single argument constructor.

 - **appendChild**(< _any_ >data) - *void* - Appends data as a node as a direct child to the tree.

### <a href="#bidirectional_tree_node" name="bidirectional_tree_node">Needle.Bidirectional_Tree_Node()</a>
propertypropertyproperty
 - **Bidirectional_Tree_Node**(< _any_ >data) - *void* - Constructs a bidirectional tree node.

 - **Unidirectional_Node**(< _any_ >data) - *void* - Constructs a unidirectional node.

### <a href="#bidirectional_node" name="bidirectional_node">Needle.Bidirectional_Node()</a>
propertypropertyproperty
 - **Bidirectional_Node**(< _any_ >data) - *void* - Constructs a bidirectional node.

