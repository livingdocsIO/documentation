## Teaser Assignment

By default every list is empty and a document is not assigned to any lists. The user has 2 ways to create an assignment of a document to a list:
- on the publish panel of a document by selecting the list
- on the TM user interface by dragging a document on a list manually

### Document to list relation

On a data-structure level the relation between lists and documents is stored in two places. 

The first one is the metadata of the document and publication records. It is worth noting that a list relation can only exist to a published document. Unpublished documents can not belong to any lists. The entry will look like the following:
```json
metadata:
  listIds: [1, 2, 3]
```

The second one is a join table called `documents_in_lists` that joins the two tables `document_lists` and `documents` and in addition to the relation stores the way in which the relation was conceived, e.g., on the publish panel. This table is currently only used for bookkeeping and has no use in delivery or editing.

### Document vs. Publication

As mentioned before a relation to a list can only be done on a published document. This bears the question why not only the publication model has the relation. The reason to set up the relation with the document is that the document represent the main data model entity while a publication is in principle only a view on a document at a certain point in time. Thus we chose to always use the document and its id as the main entity (also in elastic).

A somewhat unintuitive consequence of this is that changes you perform in the TM user interface will not propagate back to the document. **The TM works on the publication of a document not the document itself**. Thus assigning a publication to a list in the TM user interface will only update the `listIds` entry in the publication record, not the document record. 
Updating the list assignment in the publish panel will only update the `listIds` in the document record, not the publication record. Finally, pressing "Publish" on a document will create a new publication record with a copy of the `listIds` array at this point in time. 

![Teaser Assignment](./teaser_assignment.png)

The figure above illustrates this point by showing 3 sets of states:
- an old publication which is assigned to List 1
- the current publication which is assigned to List 2 and List 3
- the current draft of the document which is assigned to List 3

The TM user interface always works with the latest publication of a document (filled lines). The draft (latest state) of a document only becomes relevant once a user hits "Publish" in the publish panel and with this creates a new publication record.

NOTE: Never ever trigger an automated publish from the TM user interface. This could lead to unwantend draft changes to suddenly become public. List assignment is only between the latest publication and a list!

### adding / removing teasers from a list

As discussed above, every publication comes with its assigned `listIds` from the publish panel (publish call to the API). After that you can still add or remove a publication from a list. To do this you can use 2 API endpoints:

```
POST /document_lists/:id/add-candidate
Parameters: document_id, assignment_content (any of 'publish', 'search')

POST /document_lists/:id/remove-candidate
Parameters: document_id
```

Both of these endpoints will also automatically update the respective records in elastic.
We use those endpoints in the TM user interface when dragging a document from the search into a list or removing a document from a list.

### using the list assignment

The list assignment is used to filter the documents that are candidates for a list's proposal. Every list defines an elastic query on how to fetch and order documents that may appear in the list. In addition each list contains an entry that filters the documents based on the existence of its own `listId`. The following is an example of a query for the list with id 6:
```json
{
  "sort": {
    "publication_date": {
      "order": "desc"
    }
  },
  "query": {
    "filtered": {
      "filter": {
        "bool": {
          "must": [
            {
              "term": {
                "publication.space_id": 1
              }
            },
            {
              "term": {
                "publication.metadata.listIds": 6
              }
            }
          ]
        }
      }
    }
  }
}
```
Note that the list assignment does not affect the publication of a list, i.e., the documents that appear in a published list are fetched exclusively from the `document_data` member of the `document_lists` table.

