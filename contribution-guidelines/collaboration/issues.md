# Issues

This guide documents how we use GitHub issues in our repositories.


## Assigning people

Assign yourself to show that you're working on an issue. Only unassign yourself if you're not in charge of the task anymore. When you assign somebody else, use a label to state what you're expecting of them. If that's not obvious enough, add a comment.


## Using labels

Issues can have more than one label. The labels we use are:

### Status

Status labels allow quickly scanning the status of tickets in a list and filtering issues. For example, create a filter for all the things that are waiting on your review.

- **Discussion**: A call for help. Discussions about features, workflows, technical challenges or implementation details.
- **To review**: Add this label when you requested a review from someone. The reviewer removes this label when they're finished with their comments.
- **To test**: You want someone else to test your work. Unless it's not an external person, assign your coworker.
- **Blocked**: Issue is still open because of something outside of the assignee's control. Waiting for a response from an external service provider for example.
- **In delay**: Apply if you think the issue will not be closed within the sprint.

### Classifications

- **Urgent**: Just one for prioritizing. Use very sparingly.
- **Bug**: To visualize the number of bugs in a sprint. Bugs might get prioritized.
- **Breaking change**: Your changes require additional work downstream in order to work. Limiting the number of parallel breaking changes is essential for stability.
- **Greenkeeper**: Added by greenkeeper.
- **Epic**: Added by ZenHub when creating epics.

### Customers

Each customer that has issues on our roadmap has his own label.


## Linking issues

Adding links to issue description and comments is highly encouraged. References to related, depending, issues are often valuable additions.
