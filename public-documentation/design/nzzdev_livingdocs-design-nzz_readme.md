livingdocs-design
=================

This project contains the official designs for the project Livingdocs found under the following url: [https://github.com/upfrontIO/livingdocs](https://github.com/upfrontIO/livingdocs)
It defines a setup for easily creating and testing a design.

##Technical Setup

  1. Install node.js and npm (http://nodejs.org/)
  2. Install grunt using `npm install -g grunt-cli`
  3. From the root of the project run `npm install`
  4. Install Compass and Susy by typing `bundle install`
  5. Run `grunt dev` to compile the design. When a file changes, the files in **/dist** are updated automatically


##Design
The actual design is stored in the `source` directory.
A design consists of the following files:

    source/index.html     // preview of the design in development,  optional
    source/config.json    // design configuration file,             required
    source/components/    // the components of a design,            required
    source/stylesheets/   // stylesheets of a design,               optional
    source/images/        // images belonging to a design,          optional

The design is compiled using `grunt build` and previewed using `grunt dev`. The build folder is `/dist` and the build structure is as follows:

    dist/design.js        // the design configuration read by the editor
    dist/images/          // images are copied
    dist/stylesheets/     // stylesheets are to css and then copied

###config.json
The config file is a JSON file.
The design config must contain the **namespace** of a design.
The namespace can contain only alphanumeric characters like a-z,A-Z,0-9 and _
Dashes (-) are prohibited as namespace value.

    {
      "namespace": "designName",
      "version": 1",
      "css": ["/designs/design-name/css/style.css"]
    }


###css
A design can consist of multiple .less or .css files. All files must be stored inside the directory **design-name/css/**.
Each file inside the directory **css** will be compiled automatically.
All files in subdirectories won't compile directly. Nevertheless can you include them in your less files.
If you want to put a file directly in the **css** directory but you don't want to compile it,
you can add an underscore to the beginning of the filename.
e.g.

    css/
    ↳   style.less               // will compile to style.css
        anotherFile.less         // will compile to anotherFile.css
        canBeCSS.css             // will copy to canBeCSS.css
        _doNotCompile.less       // won't compile
        directoriesWontCompile/  // all files in this directory won't compile
        ↳    fasdf.less         // won't compile


Each file you want to use in a template has to be defined in the designs config.json file.
The file must be declared in an array of the key **css**.
e.g.

    {
      "namespace": "designName"
      "css": ["/designs/design-name/css/style.css", "/designs/design-name/css/anotherFile.css"]
    }


See designs/bootstrap for an example of how to setup a design with less.

Compiled designs are in the public/designs/design-name/css folder. If you don't want to use less, you can also just work with a css file directly (or work with a css compiler of your choosing).

###HTML Pages
HTML Pages live in the folder public/
The pages are there to test a design. You can do a style guide page or just a regular HTML page using a certain design.
To view the pages, start node ('node app.js') and navigate to your page (e.g. [http://localhost:3333/bootstrap.html](http://localhost:3333/bootstrap.html))
You can also use livingdocs templates to use snippets in your design in order to keep your HTML markup slim. For an example see the bootstrap.html page.

###Components
Snippets to be used in HTML pages can be defined in html files.
Snippets are stored inside the directory **design-name/snippets/**.
Each snippet with the file extension **.html** will be compiled while running `grunt`. Other files are ignored.
Snippet files can contain a configuration.  The configuration is store as JSON inside a **script** tag.
The script tag must have the attribute **type="ld-conf"** attribute to use it as configuration.

    <script type="ld-conf">
    {
      "name": "Main and Sidebar Columns"
    }
    </script>

    <!-- your html comes here -->
    <div class="mainAndSidebar">
        <div class="main" doc-container="main"></div>
        <div class="sidebar" doc-container="sidebar"></div>
    </div>

For an example of a snippet file, see **designs/bootstrap/snippets/main_and_sidebar.html**

####editable Attributes
There are different kinds of attributes you can use to tag the element as editable.

- `doc-image='image'`// for `<img>` tags only at the moment
- `doc-editable='text'`

Each editable attribute inside a snippet must have a unique value. E.g.:
```html
<h1>
  <span doc-editable="title">Title</span>
  <small doc-editable="subtitle">Subtitle</small>
</h1>
```

If there is only one editable in a snippet the name can be omitted.
But it is better to always provide it since it gives you better control over the design.

The name of an editable or image tells livingdocs that the content of an editable can
be transferred to the editable of another snippet.

In the following case for example livingdocs can deduce that these to snippets
are meant be converted to each other since they both have one editable with the same name.

**Title**
```
<h1 doc-editable='title'></h1>
```

**Subtitle**
```
<h2 doc-editable='title'></h2>
```

But livingdocs will not offer to convert a `Title` or `Subtitle` into an `Author` snippet

**Author**
```
<div class="author" doc-editable='author'></div>
```





