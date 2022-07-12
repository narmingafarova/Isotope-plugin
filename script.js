var $grid = $(".sortable-pictures").isotope({
  itemSelector: ".all",
  layoutMode: "fitRows"
});

$(".choosing-title").on("click", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ 
    filter: filterValue 
  });
  $(".choosing-title").removeClass("active");
  $(this).addClass("active");
});


const words = ['Creative', 'Jobo'];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.querySelector('.changeable-text').innerHTML += word.shift();
        } else {
            deletingEffect();
            return false;
        };
        timer = setTimeout(loopTyping, 250);
    };
    loopTyping();
};

function deletingEffect() {
  let word = words[i].split("");
  var loopDeleting = function() {
      if (word.length > 0) {
          word.pop();
          document.querySelector('.changeable-text').innerHTML = word.join("");
      } else {
          if (words.length > (i + 1)) {
              i++;
          } else {
              i = 0;
          };
          typingEffect();
          return false;
      };
      timer = setTimeout(loopDeleting, 200);
  };
  loopDeleting();
};

typingEffect();