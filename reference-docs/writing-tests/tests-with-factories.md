# Writing tests with factories

Livingdocs has an extensive test suite for both Upstream and
Downstream services. There are ready to use factories for you to use
to write succinct and reliable tests. You can find the provided
factories in
[test/support/factories](https://github.com/livingdocsIO/livingdocs-server/tree/master/test/support/factories)
within the Upstream Server.

To give you a feel on how to use the factories, here is a working
example which tests the expected side-effects within an LI Server when
creating a new `DocumentEntity`. The test itself is rather mundane, it
checks that an entry with the `documents` table has been created while
there is no entry in the `document_publication_events` table, because
the document hasn't been published, yet.

```js
const DocumentEntity = require('@livingdocs/server/app/features/documents/entities/document_entity')
const factories = require('@livingdocs/server/test/support/factories')
const factory = factories.get('user', 'project', 'channel')

describe('Existing Factory methods', () => {

  let user
  let project
  let channel

  before(function (done) {
    factory()
      .createUser('user')
      .createProject('project', 'user')
      .createChannel('channel', {name: 'web'}, 'project')
      .end((err, param = {}) => {
        user = param.user
        project = param.project
        channel = param.channel
        done(err)
      })
  })

  describe('DocumentEntity.create', (done) => {
    before(() => {
      this.doc = DocumentEntity.create({
        title: 'First published doc',
        document_type: 'article',
        content_type: 'regular',
        owner_id: user.id,
        project_id: project.id,
        channel_id: channel.id
      })
    })

    it('creates an entry in `documents`, but no publication', (done) => {
      this.doc.save(() => {
        const knex = test.liServer.db.connection
        knex('documents').select('id')
          .orderBy('created_at', 'desc')
          .limit(1)
          .then(([{id}]) => {
            expect(id).to.eq(this.doc.id)
          })
        knex('document_publication_events').select('*')
          .then((res) => {
            expect(res.length).to.eq(0)
            done()
          })
      })
    })
  })
})
```

This example test is a real example test in the [Bluewin Server](https://github.com/livingdocsIO/livingdocs-bluewin-server/blob/feat/multiDossier-phase2-upstream-tables-only/test/integration/app/doc/sample_factory_tests.js).
