// https://www.codewars.com/kata/dubstep/train/javascript

function songDecoder(song) {
    const delimeter = "WUB";

    const wubScrubbed = song.split(delimeter).filter(e => e);

    return wubScrubbed.join(' ');
}