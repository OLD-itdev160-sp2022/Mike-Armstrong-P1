const discName = ["Discmania Link", "Discraft Zone", "Axiom Hex", "MVP Reactor", "Innova Gator", "Innova Gazelle", "Innova TL", "Innova Teebird", "Discraft Raptor", "Innova Thunderbird", "Innova Orc", "Innova Wraith", "Innova Destroyer"]
const speed = ["2", "4", "5", "5", "5", "6", "7", "7", "9", "9", "10", "11", "12"]
const glide = ["3", "3", "5", "5", "2", "4", "5", "5", "4", "5", "4", "5", "5"]
const turn = ["0", "0", "-1", "-0.5", "0", "0", "-1", "0", "0", "0", "-1", "-1", "-1"]
const fade = ["1", "3", "1", "1.5", "4", "2", "1", "2", "3", "2", "3", "3", "3"]
const description = [
    " \"The Link is the putter of choice for a wide variety of players from beginners all the way to top level professionals. It offers a reliable, stable flight pattern with low glide to make sure you don't sail past your target.\" ",
    " \"The Zone overstable putt and approach disc is the go-to workhorse putter for dependable overstability in any conditions. Often used for technical approaches or powerful upshots for both forehand and backhand players.\" ",
    " \"Mesmerizingly straight, the Hex will find a place in anyone's bag as a versatile and reliably straight midrange.\" ",
    " \"The newest midrange driver from MVP is here with the release of the Reactor in Neutron plastic. This workhorse mid fits perfectly in the gap between the out of production Vector and Axis.\" ",
    " \"A power control disc that delivers pin-point accuracy even in adverse wind conditions. High power throwers who need control need look no further.\" ",
    " \"The Gazelle brings versatility and control to fairway shots. A long, straight flight with predictable fade at the end. Handles windy conditions well.\" ",
    " \"The TL is the brother of the reliable TeeBird. This disc has the same great speed and glide as the Teebird, but is straighter flying with less fade at the end of the flight.\" ",
    " \"Excellent for pin-point accuracy or distance, most accurate and reliable driver, preferred fairway driver of 12 time world champion Ken Climo.\" ",
    " \"Drive with confidence with the overstable Raptor driver. A staple for forehand and high speed backhand throws, with minimal turn and a powerful ending fade.\" ",
    " \"The Thunderbird is speed 9 driver with controllable, accurate flights. It has the stability of a TeeBird with the speed of a Valkyrie.\" ",
    " \"The Orc is a great 'Go-To' distance driver with amazing glide and dependable fade.\" ",
    " \"The Wraith is a long and fast distance driver. A stable flyer that performs predictably into the wind.\" ",
    " \"The Destroyer is a fast, stable power driver with significant glide. A great disc for sidearm throwers and those with lots of power.\" ",
]
const link = ["www.discmania.net", "www.discraft.com", "www.axiomdiscs.com", "www.mvpdiscsports.com", "www.innovadiscs.com", "www.innovadiscs.com", "www.innovadiscs.com", "www.innovadiscs.com", "www.discraft.com", "www.innovadiscs.com", "www.innovadiscs.com", "www.innovadiscs.com", "www.innovadiscs.com"]

function pictureChange(image) {
    var link = "images/" + image + ".jpg"
    document.getElementById('default').src=link;
}

function detailsChange(details) {
    document.getElementById('detail1').innerHTML = discName[details]
    document.getElementById('detail2').innerHTML = speed[details]
    document.getElementById('detail3').innerHTML = glide[details]
    document.getElementById('detail4').innerHTML = turn[details]
    document.getElementById('detail5').innerHTML = fade[details]
    document.getElementById('write-up').innerHTML = description[details]
    document.getElementById('url').innerHTML = link[details]
}