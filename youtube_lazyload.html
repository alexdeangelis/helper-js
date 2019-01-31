<!--
HTML STRUCTURE

We begin with building the HTML. This is straight forward; we’re using just two div elements.
The first div will wrap around the embedded Youtube video, the second div is nested in the first div, and we’ll use it to shape the Play button to illustrate that this is a playable video.
-->

<!-- (1) video wrapper -->
<div class="youtube" data-embed="<?php echo $embed_id; ?>" <?php echo $vimeo_data_id; ?>> 
 
    <!-- (2) the "play" button -->
    <div class="play-button"></div> 
     
</div>

<?php

// $vimeo_data_id needs to be added to the youtube element
// $embed_id needs to be added to the data-embed attribute in the youtube

$video_url = get_field('video_url',$post->ID);
$embed_id_pos = strrpos($video_url, '/');
$embed_id = $embed_id_pos === false ? $video_url : substr($video_url, $embed_id_pos + 1);

// If the video embed url includes the word 'Vimeo' give the element the correct data attribute
if (\strpos($video_url, 'vimeo') !== false) {
    $vimeo_data_id = 'data-vidhost="vimeo"';
} else {
    $vimeo_data_id = false;
}

?>

<!--
CSS STYLES
Next, we add the styles:
-->

<style>
    .youtube {
        background-color: #000;
        margin-bottom: 30px;
        position: relative;
        padding-top: 56.25%;
        overflow: hidden;
        cursor: pointer;
    }
    .youtube img {
        width: 100%;
        top: -16.84%;
        left: 0;
        opacity: 0.7;
    }
    .youtube .play-button {
        width: 90px;
        height: 60px;
        background-color: #333;
        box-shadow: 0 0 30px rgba( 0,0,0,0.6 );
        z-index: 1;
        opacity: 0.8;
        border-radius: 6px;
    }
    .youtube .play-button:before {
        content: "";
        border-style: solid;
        border-width: 15px 0 15px 26.0px;
        border-color: transparent transparent transparent #fff;
    }
    .youtube img,
    .youtube .play-button {
        cursor: pointer;
    }
    .youtube img,
    .youtube iframe,
    .youtube .play-button,
    .youtube .play-button:before {
        position: absolute;
    }
    .youtube .play-button,
    .youtube .play-button:before {
        top: 50%;
        left: 50%;
        transform: translate3d( -50%, -50%, 0 );
    }
    .youtube iframe {
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
    }
</style>

<!--
These styles mainly deal with:

Retaining the (flexible) video aspect ratio at 16:9, which is the recommended aspect ratio for a Youtube video.
In doing so, we set the padding-top of the first div to 56.25%. This number is derived from dividing 9 by 16 and multiply the resultant to 100%.
Forming the second div to a play button and positioning it to the center of the first div.
Positioning the Youtube video image thumbnail that we will fetch and add in later through JavaScript.
-->


<!--
JS SCRIPT
Enables the YouTube videos to only load once the video is clicked to play
Also gets a thumbnail to show instead of a blank screen
Add this JS to the footer
-->

<script>
function setVideoThumbnail(vidDiv) {
    if (vidDiv.dataset.vidhost === "vimeo") {
        var x = new XMLHttpRequest();
        x.open("GET", "http://vimeo.com/api/v2/video/" + vidDiv.dataset.embed +".xml", true);
        x.onreadystatechange = function () {
          if (x.readyState == 4 && x.status == 200)
          {
            var doc = x.responseXML;
            source = doc.getElementsByTagName("thumbnail_large")[0].innerHTML;
            var image = new Image();
            image.src = source;
            image.style.top = "0%";
            image.addEventListener( "load", function() {
                vidDiv.appendChild( image );
            });
          }
        };
        x.send(null);
    } else {
        var source = "https://img.youtube.com/vi/"+ vidDiv.dataset.embed +"/sddefault.jpg"; 
        
        var image = new Image();
        image.src = source;
        image.addEventListener( "load", function() {
            vidDiv.appendChild( image );
        });
    } 
}

function setClickResponseFunction(vidDiv) {
    var embedSrc;
    if (vidDiv.dataset.vidhost === "vimeo") {
        embedSrc = "https://player.vimeo.com/video/" + vidDiv.dataset.embed + "?autoplay=1";
    } else {
        embedSrc = "https://www.youtube.com/embed/" + vidDiv.dataset.embed + "?rel=0&showinfo=0&autoplay=1";
    } 
    
    vidDiv.addEventListener( "click", function() {
        var iframe = document.createElement( "iframe" );

        iframe.setAttribute( "frameborder", "0" );
        iframe.setAttribute( "allowfullscreen", "" );
        iframe.setAttribute( "src", embedSrc );

        this.innerHTML = "";
        this.appendChild( iframe );
    } );
}

function loadLazyVideos() {
    var youtube = document.querySelectorAll( ".youtube" );
    
    for (var i = 0; i < youtube.length; i++) {
        setVideoThumbnail(youtube[i]);
        setClickResponseFunction(youtube[i]);
    }
}


loadLazyVideos();
</script>