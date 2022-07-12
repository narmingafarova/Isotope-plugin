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

