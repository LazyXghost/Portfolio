class TreeNode
{
    constructor(value){
        this.val = value;
        this.par = null;
        this.left = null;
        this.right = null;
        this.color = "red";
    }
};

class RBTree
{
    contructor(){
        this.root = null;
    }

    getConfiguration(child)
    {
        let configuration = {};
        let par = child.par;
        if (par.left == child)
            configuration.first = 'L';
        else
            configuration.first = 'R';

        let gpar = par.par;
        if (gpar.left == par)
            configuration.second = 'L';
        else
            configuration.second = 'R';

        return configuration;
    }
    getUncle(child)
    {
        let par = child.par;
        let gpar = par.par;
        if (gpar.left == null || gpar.right == null)
            return null;

        if (gpar.left == par)
            return gpar.right;
        return gpar.left;
    }
    insertInBSTree(child)
    {
        let curr = this.root;
        let next = ((this.root.val <= child.val) ? this.root.right : this.root.left);
        while (next != null)
        {
            curr = next;
            next = ((curr.val <= child.val) ? curr.right : curr.left);
        }
        if (curr.val <= child.val)
            curr.right = child;
        else
            curr.left = child;
        child.par = curr;
    }
    leftRotation(child)
    {
        let par = child.par;
        let gpar = par.par;

        if (gpar != null)
        {
            if (gpar.right == par)
                gpar.right = child;
            else
                gpar.left = child;
            child.par = gpar;
        }
        else{
            child.par = null;
            this.root = child;
        }

        par.right = child.left;
        if (child.left != null)
            child.left.par = par;

        child.left = par;
        par.par = child;
    }
    rightRotation(child)
    {
        let par = child.par;
        let gpar = par.par;

        if (gpar != null)
        {
            if (gpar.left == par)
                gpar.left = child;
            else
                gpar.right = child;
            child.par = gpar;
        }
        else{
            this.root = child;
            child.par = null;
        }

        par.left = child.right;
        if (child.right != null)
            child.right.par = par;

        child.right = par;
        par.par = child;
    }
    rotateAndRecolor(child)
    {
        let configuration = this.getConfiguration(child);
        let par = child.par;
        let gpar = par.par;

        if (configuration.first != configuration.second)
        {
            if (configuration.second == 'L')
                this.leftRotation(child);
            else
                this.rightRotation(child);

            let temp = par;
            par = child;
            child = temp;
        }

        if (configuration.second == 'L')
            this.rightRotation(par);
        else
            this.leftRotation(par);

        par.color = "black";
        gpar.color = "red";
    }
    correctTree(child)
    {
        if (child.par == null)
            child.color = "black";
        else if (child.par.color == "red")
        {
            let uncle = this.getUncle(child);
            if (uncle == null || uncle.color == "black")
                this.rotateAndRecolor(child);
            else
            {
                uncle.color = "black";
                child.par.color = "black";
                child.par.par.color = "red";
                this.correctTree(child.par.par);
            }
        }
    }
    insert(x)
    {
        let child = new TreeNode(x);
        if (this.root == null)
            this.root = child;
        else
            this.insertInBSTree(child);
        this.correctTree(child);
    }

    inorder(trav, node, level)
    {
        if (node == null)
            return;
    
        this.inorder(trav, node.left, level + 1);
        trav.push([node, level]);
        this.inorder(trav, node.right, level + 1);
    }

    display()
    {
        let trav = [];
        this.inorder(trav, this.root, 0);

        let ftrav = [];
        for (let i = 0; i < trav.length; i++)
            ftrav.push({id: i, value: trav[i][0].val, color: trav[i][0].color, level: trav[i][1]});
        return ftrav;
    }
};

module.exports = RBTree;


// let tree = new RBTree();
// var n = parseInt(window.prompt());
// while (n--)
// {
//     var x = parseInt(window.prompt());
//     tree.insert(x);
// }
// tree.display()