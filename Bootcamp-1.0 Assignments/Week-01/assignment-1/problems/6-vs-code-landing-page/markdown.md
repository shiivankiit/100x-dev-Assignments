<!-- Issues facing while building -->

/*
In left section I am not abel to create space as given in the page.

My approach:-Using Justify-content but it is wrong.

Correct Approach:-Using gap property.

What does Justify-content do.
-Justify content does not create a fixed gap between items
Instead,it distributes the available free space inside the
flex container.

Using gap:-
left{
    display:flex;
    gap:20px;
}
Result:-
        Features    Docs    Blog    Learn

Every Pair of items has exactly 20px gap between them.


Using justify-content: space between.
left{
    display:flex;
    justify-content:space-between.
}
Suppose .left is 800px wide.
The browser pushes the first item to the far left,the last 
item to the far right,and spreads all the remaining space 
between the items.

Result:
Features                     Docs                 Blog                     Learn

The space become very large because the browser is trying 
to fill the entire width.



First Principle thinking.
Ask Yourself:
What do i Want?

Goal1:Fixed Spacing.
A B C D   use gap.

Goal2:Fill the whole widht.
A                 B                 C                 D
Items are spread across the container.
Use justify-content:space-between;

*/

/*
                                     Improving Nav Bar code

Right now My nav bar:-
Navbar
├── Image
├── Text
├── Left
└── Right
What should i Improve into this.

Make image and text in one group.
Navbar
├── Logo
│    ├── Image
│    └── Text
├── Navigation
└── Right Section



                           <!-- Building hero section -->



*/