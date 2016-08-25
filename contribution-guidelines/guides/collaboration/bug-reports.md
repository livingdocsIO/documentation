
## How to describe a bug


- Describe the actions you performed (Steps)  
  Add animated gifs and Images if possible.  
  Add more information if the bug is hard to reproduce.
- Describe the expected and actual results
- If you fix bugs in feature branches create a bug issue referencing the commit so others don't fix it in their feature branches


#### Further Reading

[How to Report Bugs Effectively](http://www.chiark.greenend.org.uk/~sgtatham/bugs.html) by Simon Tatham
[Bug reports that prevent death-star vulnerabilities](https://medium.com/@folajimia/writing-the-perfect-bug-report-35d4a39e6f1#.g20cq0ci0) by jimi


#### In General

You should be confident that others can easily reproduce the bug. If not you have to add this information to your description and provide more information so others can work as effectively as possible on the bug. For example specify the browser version, important configuration settings, and your development setup. Also describe how well you can reproduce the bug yourself.

#### Bugs that are best described visually

Some bugs are obvious when you can see them in action. In these cases description of the performed actions can often be fully or partially omitted if you provide visual material.

To do that use a screen capture tool like [LICEcap](https://github.com/lepht/licecap) to create an animated GIF. Animated GIFs can easily be attached to an issue and can be seen immediately.
If necessary add a description describing the state of the app and what you were trying to do.

If you have a static issue add images to provide context to your bug. Highlight the areas of interest in your image.


## How to proceed when you fix a bug while working on a feature branch?

When you fix a bug others should have a chance to know about it before it gets merged. If you discover a bug while working in a feature branch chances are others experience the same issue as well and maybe try to fix it at the same time as you do.

You basically have two options:

1. Go back to the master branch and create a new pr for the bugfix. Create the description of your pull request as if it where a bug issue. If you need the bugfix in your branch, cherry pick the fix (or merge the whole bugfix-branch into your feature branch).
2. Create a bug issue first and then link the fix you created in your feature-branch to this issue by referencing issue number in your commit message description.
