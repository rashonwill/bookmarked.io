//Dark Mode
function darkMode() {
let background = $('body');
let switcher = $('.theme-switch');
let btnSwitch = $('.mode button')
let icons = $('.tile .fa');
let bell = $('.tile .fa-bookmark')
let search =$('.search input');
let btnsort = $('#btn-filter');  
let select = $('select')  
background.toggleClass("dark-mode");
btnSwitch.toggleClass('.mode button active');
switcher.toggleClass('active');
icons.toggleClass('dark')  
bell.toggleClass('dm')
search.toggleClass('dms')
btnsort.toggleClass('dmt')
select.toggleClass('dmsb')  
}

//Page Search
$(document).ready(function() {
  $("#search").on("keyup", function () {
    let value = $(this).val().toLowerCase();
    $(".tile").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

//Open Modals

$('.tile .fa-plus').click(function(){
  $('.bookmark-forms').toggleClass('active');
})

$('.new-bookmark .fa-times').click(function(){
  $('.bookmark-forms').removeClass('active');
})

$('.tile .fa-ellipsis-v').click(function(myBookmark){
  let editForm = $('.bookmark-editForm')
    editForm.toggleClass('active');
    const editCard = $(this).closest('.tile').data('tile')
    $('.edit-bookmark #editName').append(editCard.name)
    $('.edit-bookmark #editUrl').append(editCard.link)
    $('.edit-bookmark #editTags').append(editCard.tags)
  $('.edit-bookmark #editComment').append(editCard.comment)

})

$('.edit-bookmark .fa-times').click(function(){
  $('.bookmark-editForm').removeClass('active');
})

//Image Upload 
function showPreview(event) {
  if( event.target.files.length > 0){
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("avi");
    preview.src = src;
    preview.style.display = "block";
  }
}



//Create BookMark

$('.btn').click(function submitBookMark(event) {
  event.preventDefault();
  console.log('Submitting new bookmark');
 
     let name =  $('#bookmark-name').val();
     let urlLink = $('#bookmark-url').val();
     let tags = $('#bookmark-tags').val();
     let comment = $('#bookmark-comment').val();
     let logo = $('.bookmark-forms .image-source').attr('src');
 
let myBookmark = $(`
 <div class="tile">
      <div class="edit">
      <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
    </div>
    <div class="image">
      <img src="${logo}" alt="" class="fa logo" />
      </div>
    <div class="link">
      <a href="${urlLink}" target="_blank">${name}</a>
    </div>
      <div class="comments">${comment}
  </div>
    <div class="tags">
   <h5><a href=''>${tags}</a> </h5>
    </div>
  
    </div>
    
   `)
  
  $('.bookmarks').prepend(myBookmark);

  

  $('#bookmark-name').val('');
  $('#bookmark-url').val('');
  $('#bookmark-tags').val('');
  $('#bookmark-comment').val('');
  $('.bookmark-forms .image-source').attr('src', '');
  $('.bookmark-forms').removeClass('active');
  
  return myBookmark;
  
  
 
  
});

