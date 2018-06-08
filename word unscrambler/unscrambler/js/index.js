var letterInput = document.getElementById('letters');
var foundWords = document.getElementById('words');

// browser.tabs.executeScript({file: "js/WordFinder.js"});
// browser.tabs.executeScript({file: "../ScrabbleDict.js"});

var showlist = function(list) {
	var stList = $('ul#resultlist')

stList.empty();
	$.each(list, function(i)
	{
	    var li = $('<li/>')
	        .addClass('word-item')
	        // .attr('role', 'menuitem')
	        .appendTo(stList);
	    var aaa = $('<a/>')
	        .text(list[i])
	        .appendTo(li);
	     li.click(function () {
    		$(this).addClass('fav');
		  });
	});
}

var findWords = function() {
	// foundWords.innerHTML = WordFinder.find(letterInput.value.toLowerCase()).join('\n');
	foundWords = WordFinder.find(letterInput.value.toLowerCase());
	showlist(foundWords);
  
};


var button = document.getElementById('findbtn');
button.addEventListener("click", findWords, false);