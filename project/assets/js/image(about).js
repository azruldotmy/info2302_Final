 $(document).ready(function() {
    $('img.mouse').hover(
        function() {
        $(this).fadeTo('slow', 1);
        },
        function() {
        $(this).fadeTo('slow', 0.5);
         }
    );
});