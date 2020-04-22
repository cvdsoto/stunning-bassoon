$(document).ready(function() {
  // moving butterfly
  const timerID = setInterval(function() {
    $('#butterfly_1').animate({'left':'+=10px', 'bottom':'+=10px'}, "fast");
  }, 30);

  let count = 1;

  setInterval(function() {
    count += 1;
    let left = (Math.random() * 2000) - 1000;
    $butterfly = $(`<img src="/assets/butterfly.gif" id="butterfly_${count}" class="butterfly-fly"/>`);
    $butterfly.css({
      'bottom': '-200px',
      'left': `${left}px`
    });
    $('#butterfly-cage').append($butterfly);
    const timerID = setInterval(function() {
      $(`#butterfly_${count}`).animate({'left':'+=10px', 'bottom':'+=10px'}, "fast");
    }, 30);
  }, 2000);


  // bill murray image pop ups
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
