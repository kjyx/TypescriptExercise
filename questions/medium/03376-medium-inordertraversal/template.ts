
// 2003/7/6 10:06

interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}
// type InorderTraversal<T extends TreeNode | null, NT extends TreeNode = NonNullable<T>> = T extends null ? [] : [...InorderTraversal<NT['left']>, NT['val'], ...InorderTraversal<NT['right']>]
type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode] ? [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>] : []



// const tree1 = {
//     val: 1,
//     left: null,
//     right: {
//         val: 2,
//         left: {
//             val: 3,
//             left: null,
//             right: null,
//         },
//         right: null,
//     },
// } as const




// function InorderTraversal(obj: NonNullable<TreeNode> | null): any[] {
//     if (typeof obj == null) {
//         return []
//     }
//     if (obj) {
//         return [...InorderTraversal(obj['left']), obj['val'], ...InorderTraversal(obj['right'])]

//     }
//     return []
// }


// console.log(InorderTraversal(tree1));


