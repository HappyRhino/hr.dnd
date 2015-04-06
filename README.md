hr.dnd [![Build Status](https://travis-ci.org/HappyRhino/hr.dnd.png?branch=master)](https://travis-ci.org/HappyRhino/hr.dnd)
=============================

> Drag and drop utility

## Installation

```
$ npm install hr.dnd
```

## Documentation

```js
var dnd = require("hr.dnd");

// Create a draggable type
var type = new dnd.DraggableType();

// Create a drop area
var drop = new dnd.DropArea({
    view: yourView,
    dragType: type
});

// Get data when dropped
drop.on("drop", function(data) {

});


// When drag for a view for "type"
type.enableDrag({ view: elementToDragView });
```
