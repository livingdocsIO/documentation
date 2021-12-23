# Handsontable Iframe Example

If you want to run a handsontable we have configured an example include function with an iframe modal. Below is a guide to setting up the include function and some basic configuration for Handsontable, which you will need to run separately.

The modal will let you input data into a handsontable, as below:

{{< img src="Handsontable-config.png" alt="Handsontable Preview" >}}

And save it to Livingdocs, a simple table render is seen below:

{{< img src="Rendered-Handsontable.png" alt="Menu Preview" >}}


## Setting up the Include function on the Server

For in-depth documentation on Include functions, check out the documentation here: [Livingdocs Include](https://docs.livingdocs.io/reference-docs/server-extensions/include-functions/)

For this example, the Handsontable include is a very basic iframe and modal. The iframe renders returned JSON from the modal, which hosts the Handsontable example server.

The data from the table is returned as an array of arrays, where each array is a row of data.

A simple set up works as below:

```javascript
  name: 'handsontable',
  uiComponents: [{
    type: 'iframe-modal',
    sidebarLabel: 'Handsontable Element',
    sidebarButton: 'Configure',
    modalTitle: 'Configure Handsontable',
    modalContentUrl: 'http://localhost:8000'
  }],
  rendering: {
    type: 'function',
    render: renderHandsontable
  }
```

## Rendering the returned table in Livingdocs

At the moment, the include expects a JSON array of table data. If you want to configure your own rendering from the contents of the table, you can use `params.innerData` on the server and configure the iframe render function.

The rendering function:

```javascript
async function renderHandsontable (params) {
  if (params.innerData) {
    return {
      html: dedent`<table>
     ${renderArray(params.innerData)}
      </table>`
    }
  } else {
    return {
      html: dedent`<div>Click to configure Handsontable Include</div>`
    }
  }
}

function renderArray (array) {
  return array.map((subArray, outerIndex) => {
    const valueArrayHTML = subArray.map((item, index) => {
      if (index === 0) {
        return
      } else {
        return `<th :key=${index}>${item}</th>`
      }
    })
    return `<tr :key=${outerIndex}>${valueArrayHTML.join('')}</tr>`
  }).join('')
}
```

## Handsontable Example Code and Configuration

Handsontable is a very configurable program and it is worth scanning their docs for the options you want, they can be found here: [Handsontable Documentation](https://handsontable.com/docs)

They have a demo with rendering options in JavaScript, TypeScript, Vue, React and Angular. All the code to set up these files is in their sandbox, available here: [Handsontable Demo](https://handsontable.com/demo)

If you want to get started with a very basic table, you can input these settings to Handsontable:

```javascript
data: dataArray
height: 450,
colHeaders: true,
rowHeaders: true,
cell: [
  {
    row: 0,
    col: 3,
    type: "text",
  },
  {
    row: 0,
    col: 5,
    type: "text",
  },
  {
    row: 0,
    col: 6,
    type: "text",
    readOnly: false,
  },
  {
    row: 0,
    col: 7,
    type: "text",
    readOnly: false,
  },
],
columns: [
  { data: 1, type: "text" },
  { data: 2, type: "text" },
  { data: 3, type: "text" },
  { data: 4, type: "date", allowInvalid: true },
  { data: 5, type: "text" },
  { data: 6, type: "checkbox", className: "htCenter" },
  { data: 7, type: "numeric" },
],
dropdownMenu: true,
hiddenColumns: {
  indicators: true,
},
contextMenu: true,
filters: true,
manualRowMove: true,
licenseKey: "non-commercial-and-evaluation",
}
```
Then depending on how you want to render Handsontable will depend on how you give it the `dataArray`. For example, when built with vue you can use a content object which is reactive.

A useful starter dataArray is `[['false', 'A header', 'Another Header', 'A third header', 'An Example Date', 'A fourth header', 'An example checkbox', 'A fifth header'],['false', 'Some content', 'Some more content', 'Third content', '10/11/2021', 'Fourth content', true, 'Final content']]`

This will configure your table with a row of headers and a row of data, to add rows simply use right click "insert row below".

## Sending and receiving data with Livingdocs

This component sends data and configs to and from Livingdocs using postMessage. The function to update Livingdocs is in App.vue.

```javascript
await window.parent.postMessage(
          {
            params: {
              innerData: dataArray
            },
            action: "update",
          },
          "*"
        );
```

If the user chooses to reopen the configuration and edit the content, the configuration is received by this component with a config query post message:

```javascript
async function getConfig() {
        await window.parent.postMessage(
          {
            query: "config",
          },
          "*"
        );
        await window.addEventListener(
          "message",
          (event) => {
            if (event.data.query === "config") {
              if (event.data.params.innerData) {
                dataArray = event.data.params.innerData;
              } else {
                dataArray = reactive(dataArray)
              }
               vm.showDataGrid = true
            }
          },
          false
        );
      }
```

Again, the `dataArray` will need to be configured depending on whether or not you are using a framework.

## Documentation

- [Livingdocs](https://docs.livingdocs.io/)
- [Handsontable](https://handsontable.com/docs)
- [Handsontable Demo](https://handsontable.com/demo)
