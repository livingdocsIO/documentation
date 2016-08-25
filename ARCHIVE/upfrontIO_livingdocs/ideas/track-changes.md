
# Track Changes

## Goals

Use Cases:

- Show an informative history of recent changes
- Undo functionality
- Re-create deleted components (the position in the document can be lost)
- Change History of individual components
- Blame feature (who did the last change for every component)

Efficiency:

- Only send as much information over the wire as necessary


## Approaches of showing the change history

#### #1 Record each action

Characteristics:

- Very detailed
- Needed for an undo functionality
- Can be used to send updates to the server efficiently

#### #2 Calculate the diff between two versions

Characteristics:

- Needs to be calculated
- More effective to show changes to others

