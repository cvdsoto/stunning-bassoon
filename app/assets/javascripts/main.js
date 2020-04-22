$(document).ready(function() {
  setInterval(function() {
    console.log("yes im here");
    const top = Math.random() * 50;
    const left = Math.random() * 50;

    const width = 200;
    const height = Math.floor(Math.random() * 200) + 100;
    const url = `http://www.fillmurray.com/${width}/${height}`;
    $('#bill-background').attr({
      'src': url,
    }).css({
      'top': `${top}vh`,
      'left': `${left}vw`
    }).fadeToggle("slow");
  }, 5000);
})
