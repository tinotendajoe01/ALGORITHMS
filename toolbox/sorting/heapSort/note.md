Imagine that you have a bunch of colored balls in a bag, and you want to arrange them in order from lightest to heaviest. You decide to use heap sort to do this.

First, you build a "heap" out of the balls in the bag. A heap is a special kind of binary tree where every parent node is larger than its child nodes. You can think of it like a pyramid of balls, where every layer has fewer balls than the layer below it, and each ball is heavier than the balls above it.

Next, you remove the heaviest ball from the top of the heap and put it in a sorted list. You then "heapify" the remaining balls in the heap, which means you rearrange them so that the largest ball is at the top again.

You repeat this process, removing the heaviest ball from the top of the heap and adding it to the sorted list, until there are no balls left in the heap.
