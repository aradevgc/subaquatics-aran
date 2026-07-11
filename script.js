const showcaseVideo = document.getElementById("showcase-video");

const logos = {
    davinci: document.getElementById("logo-davinci"),
    blender: document.getElementById("logo-blender"),
    affinity: document.getElementById("logo-affinity")
};

const videos = [

{
    src:"videos/video1.mp4",
    software:["davinci" , "blender"]  
},

{
    src:"videos/video2.mp4",
    software:["davinci", "affinity"]
},

{
    src:"videos/video3.mp4",
    software:["davinci"]
},

{
    src:"videos/video4.mp4",
    software:["davinci" , "affinity"]
},

{
    src:"videos/video5.mp4",
    software:["davinci"]
},

{
    src:"videos/video6.mp4",
    software:["davinci"]
}

];

let current = 0;

function activateLogo(programs){

    Object.values(logos).forEach(logo=>{
        logo.classList.remove("active");
    });

    programs.forEach(program=>{

        if(logos[program]){

            logos[program].classList.add("active");

        }

    });

}


function loadVideo(index){

    showcaseVideo.src = videos[index].src;

    showcaseVideo.play();

    activateLogo(videos[index].software);

}

loadVideo(0);

setInterval(()=>{

    current++;

    if(current>=videos.length){

        current=0;

    }

    showcaseVideo.style.opacity=0;

    setTimeout(()=>{

        loadVideo(current);

        showcaseVideo.style.opacity=1;

    },300);

},10000);