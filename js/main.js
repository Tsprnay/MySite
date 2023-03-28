$(document).ready(function() {
    var plinks = [
        {
            name: 'me',
            plink: 'https://steamcommunity.com/id/ultram1xfox/'
        }
  
    ];
 
    for(var i in plinks) {
        var plink = plinks[i];

        $('#marquee').append('<a href="' + plink.plink + '">' + plink.name + '</a>');

        var plink = $('#marquee').children('a').last();
        
        if(i != plinks.length - 1) {
            $('#marquee').append(' Â· ');
        }
    }

    $('#marquee').marquee({
        duration: 20000,
        gap: 400,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    });
});