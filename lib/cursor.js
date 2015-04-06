var $ = require("jquery");
var _ = require("hr.utils");

// Define cursor
var storedStylesheet = null;
var setCursor = function(cs) {
    // Reset cursor
    if (storedStylesheet) storedStylesheet.remove();
    storedStylesheet = null;

    // Set new cursor
    if (cs) storedStylesheet = $( "<style>*{ cursor: "+cs+" !important; }</style>" ).appendTo($("body"));
};
var resetCursor = _.partial(setCursor, null);

module.exports = {
    set: setCursor,
    reset: resetCursor
};
