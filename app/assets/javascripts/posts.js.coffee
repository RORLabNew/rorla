$ ->
  $('#posts .gallery').hover ->
    $(this).find('.content').slideDown('fast')
  , ->
    $(this).find('.content').slideUp('fast')
