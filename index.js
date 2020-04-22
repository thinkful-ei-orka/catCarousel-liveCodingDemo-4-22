// $('.thumbnail img') - selector for thumbnail
// $('.hero img') - selector for large image

function handleThumbnailClicks() {
  $('.thumbnail').on('click', event => {
    event.preventDefault();
    const thumbSrc = $(event.currentTarget).find('img').attr('src');
    const thumbAlt = $(event.currentTarget).find('img').attr('alt');
  
    // src attr for small image should be applied to large image when clicked
    $('.hero img').attr('src', thumbSrc);
    // alt attr for small image should be applied to large image when clicked
    $('.hero img').attr('alt', thumbAlt);
  });
}

$(handleThumbnailClicks);