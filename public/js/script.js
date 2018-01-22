$(document).ready(function() {
    
    $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var resolution_id = $(this).children(".resolution_id").val();
    console.log(resolution_id)
    $.ajax({
        method: "PUT",
        url: "/burgers/" + resolution_id
    }).done(function(data) {
        // reload page to display devoured burger in proper column
        location.reload();
    })

    })
});x