$(document).ready(function(){
	$(addListItem)
	var write = $('#newItem').val();
	var list = $('#itemList');
	var item = $('<li><button class="check-mark">&#10003;</button><span class="list">' + write + '</span><<button class="delete-item">&#10005;</button></li>');
	if(write.length === 0 ||write.length > 25) {
	return false;
});

/*When item is added it is placed at top of the list*/
$(document).ready(function{
	(list).prepend(item);
	$(newItem).val('');
});	

$(document).ready(function(){
	$(this).parent().remove();
});

/*Allows user to tick item off list, highlighting*/
$(document).ready(function(){
	$(this).parent().toggleClass('tick-off');

/*Once ticked, item  moves to bottom of list*/
$(document).ready(function(){	
	$('#itemList').find('.tick-off').appendTo('#itemList');
});	

/*Clears all items from list when user clicks 'clear list' button*/
$(document).ready(function(){
	$(document).on('click', '#resetButton', function(){
		$('#itemList').empty();
	});
});

/*Allows user to add items to list*/
$(document).ready(function(){
		var add = $('addItem');
		var newItem = $('#newItem');
		var list = $('itemList');

		add.on('click', addListItem);
		list.on('click', '.check-mark', tickItem);
		list.on('click', '.delete', deleteItem);
		newItem.on('keypress', function(e){
			if(e.which == 13) {
				addListItem();
			}		
});
