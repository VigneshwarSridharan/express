$('#senddata button').click(function() {
  $.ajax({
    type:'POST',
    url: '/sample',
    data: {name:$('[name="name"]').val(),mobileNo:$('[name="no"]').val()},
    success : function(data)
    {
      console.log(data);
    }
  });
});
