Chrome GameBot
==============

a collection of simple bots that can play online games like slither.io, minesweeper

## Usage

### Adding Extension
 * clone the repo into your machine
 * open chrome extensions tab and enable 'developer mode' checkbox
 * add the extension by clicking 'Load unpacked extension'

## Supported Sites

### [MinesweeperOnline](http://minesweeperonline.com/)
![Solved State](/screenshots/minesweeper_1.png)
 * open [slither.io](http://minesweeperonline.com/)
 * start the game and click on extension and see it running mantra on your comp

### [Slitherio](http://slither.io/)
![Screenshot](/screenshots/slitherio_1.png)
 * open [minesweeperonline.com](http://slither.io/)
 * click 'k' to start filling automatically
 

# Algorithms

### [MinesweeperOnline](http://minesweeperonline.com/)
* Built my own algo in which at each iteration we find tiles to be clicked and flagged 
* My algo involves following steps:
    * finding group of tiles that are linked
    * finding groups that are subsets of another and subtracting them from bigger groups
    * from the groups that are left, all groups with same value and tiles count are to be flagged
    * all groups that has no value are to be cleared
    
```javascript
    var group1 = {  centertile : x, tiles : [a,b], value : 1}       //step1
    var group2 = {  centertile : y, tiles : [a,b,c], value : 2}     //step1
    var group3 = {  centertile : z, tiles : [a,b,k], value : 1}     //step1
    group2 = group2-group1;                                         //step2
    group3 = group3-group1;                                         //step2
    group2;//{tiles : [c],value : 1}                                //step3 : flag this
    group3;//{tiles : [k],value : o}                                //step4 : clear this
    
```
    

## Developed by

  * Prashant Maurice - <sabertoothmaurice@gmail.com> [Linkedin](https://in.linkedin.com/in/prashantmaurice) [Twitter](https://twitter.com/MauricePrashant)
