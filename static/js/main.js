$(document).ready(function(){
    $term = $('#terminal');
    $.ajax({
        method:'GET',
        dataType:'json',
        url: '/static/json/terminal.json',
        success: success_handler,
        error: error_handler
    });

    function success_handler(data){
        user = data['user'];
        domain = data['domain'];
        $.each(data['rows'], function(row_data){
            insert_row(user, domain, row_data);
            $term.append("<li class='cmd'><span class='user'>"+user+"</span>" +
            "<span class='at'></span><span class='domain'>"+domain+"</span>:" +
            "<span class='path'>~</span><br>" +
            "->&nbsp;<span class='command'>"+row_data['command']+"</span></li>"+
            "<li class='output'>"+row_data['output']+"</li><br>");
        });
    };

    function error_handler(j, t, e){
        console.log(j);
        console.log(t);
        console.log(e);
        $term.append("<p class='command'>[001] Booting error. Please restart</p>");
    };
});
