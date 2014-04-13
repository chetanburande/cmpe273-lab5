$(":button").click(function() {
	var isbn = this.id;
	alert('About to report lost on ISBN ' + isbn);
	$.ajax({        
        url: 'v1/books/'+isbn+'?status=lost',
        type: 'PUT'      
    });
    
	$('#bookStatus_'+isbn).html("lost");
    this.disabled=true;
   
    
	
});
