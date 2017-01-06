## Reporting bugs

You should be confident that others can easily reproduce the bug

- Describe the actions you performed (steps to produce the bug)  
- Describe the expected and actual results
- Add images or even animated gifs. Highlight the areas of interest in your image. Some bugs are obvious when you can see them in action. 
- Add more information if the bug is hard to reproduce. For example specify the browser version, important configuration settings, and your development setup


Further reading:  

- [How to Report Bugs Effectively](http://www.chiark.greenend.org.uk/~sgtatham/bugs.html) by Simon Tatham
- [Bug reports that prevent death-star vulnerabilities](https://medium.com/@folajimia/writing-the-perfect-bug-report-35d4a39e6f1#.g20cq0ci0) by jimi


To do that use a screen capture tool like [LICEcap](http://www.cockos.com/licecap/) to create an animated GIF. Animated GIFs can easily be attached to an issue and can be seen immediately.


## Transparency when fixing bugs

When you fix a bug others should have a chance to know about it before it gets merged. If you discover a bug while working in a feature branch chances are others experience the same issue as well and maybe try to fix it at the same time as you do.

You basically have two options:

1. Go back to the master branch and create a new PR for the bugfix. Create the description of your pull request as if it where a bug issue. If you need the bugfix in your branch, cherry pick the fix (or merge the whole bugfix-branch into your feature branch).
2. Create a bug issue first and then link the fix you created in your feature-branch to this issue by referencing issue number in your commit message description.
