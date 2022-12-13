class TreeNode
{
    constructor(value, id){
        this.id = id;
        this.val = value;
        this.par = null;
        this.left = null;
        this.right = null;
        this.color = "red";
    }
};

class RBTree
{
    nextId = 1;
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
        let child = new TreeNode(x, this.nextId);
        this.nextId++;

        if (this.root == null)
            this.root = child;
        else
            this.insertInBSTree(child);
        this.correctTree(child);
    }

    inorder(trav, arrows, node, level)
    {
        if (node == null)
            return;

        if(node.par != null)
            arrows.push([node.par.id, node.id]);
        this.inorder(trav, arrows, node.left, level + 1);
        trav.push([node, level]);
        this.inorder(trav, arrows, node.right, level + 1);
    }

    display(verticalGap, horizontalGap)
    {
        let trav = [];
        let arrows = [];
        this.inorder(trav, arrows, this.root, 0);

        let ftrav = [];
        let mpos = [];
        let gap = 0;
        for (let i = 0; i < trav.length; i++){
            mpos.push({id: trav[i][0].id, left: gap, top: trav[i][1] * verticalGap});
            ftrav.push({id: trav[i][0].id, value: trav[i][0].val, color: trav[i][0].color, left: gap, top: trav[i][1] * verticalGap});        
            gap += horizontalGap;
        }

        mpos.sort(function(a,b){return a.id - b.id});

        let farrows = [];
        for(let i = 0; i < arrows.length; i++){
            let ids = arrows[i];
            farrows.push({id: i, start: [mpos[ids[0]-1].left, mpos[ids[0]-1].top], end: [mpos[ids[1]-1].left, mpos[ids[1]-1].top]});
        }
        return {nodesPos: ftrav,arrowsPos: farrows};
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