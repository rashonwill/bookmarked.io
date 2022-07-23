//Dark Mode Toggle
function darkMode() {
  let background = $("body");
  let switcher = $(".theme-switch");
  let btnSwitch = $(".mode button");
  let icons = $(".tile .fa");
  let bell = $(".tile .fa-bookmark");
  let search = $(".search input");
  let btnsort = $("#btn-filter");
  let select = $("select");
  background.toggleClass("dark-mode");
  btnSwitch.toggleClass(".mode button active");
  switcher.toggleClass("active");
  icons.toggleClass("dark");
  bell.toggleClass("dm");
  search.toggleClass("dms");
  btnsort.toggleClass("dmt");
  select.toggleClass("dmsb");
}

//Page Search
$(document).ready(function () {
  $("#search").on("keyup", function () {
    let value = $(this).val().toLowerCase();
    $(".tile").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

//Initial Bookmarks

  let initialBookmarks = [
    {
      id: 1,
      link: "https://www.google.com",
      name: "Google",
      comment: "Don't be Evil",
      tags: "#google #searchengine",
      icon: "https://blog.hubspot.com/hubfs/image8-2.jpg"
    },

    {
      id: 2,
      link: "https://www.github.com",
      name: "Github",
      comment: "Build software better, together",
      tags: "#github #coding #development",
      icon:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    },

    {
      id: 3,
      link: "https://www.codepen.io",
      name: "Codepen",
      comment: "Demo or it didn't happen.",
      tags: "#codepen #coding #development",
      icon:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1584356/codepen_logo.png"
    },

    {
      id: 4,
      link: "https://www.twitter.com",
      name: "Twitter",
      comment: "What's happening?",
      tags: "#twitter #socialmedia #news",
      icon:
        "https://www.danoneinstitute.org/wp-content/uploads/2020/06/logo-rond-twitter.png"
    },

    {
      id: 5,
      link: "https://www.facebook.com",
      name: "Facebook",
      comment: "What's on your mind?",
      tags: "#facebook #socialmedia",
      icon: "https://cdn.icon-icons.com/icons2/1826/PNG/512/4202110facebooklogosocialsocialmedia-115707_115594.png"
    },

    {
      id: 6,
      link: "https://www.linkedin.com",
      name: "LinkedIn",
      comment: "What do you want to talk about?",
      tags: "#linkedin #networking #careers",
      icon:
        "https://cdn.icon-icons.com/icons2/3041/PNG/512/linkedin_logo_icon_189225.png"
    },

    {
      id: 7,
      link: "https://www.instagram.com",
      name: "Instagram",
      comment: "Capture and Share the World's Moments",
      tags: "#instagram #socialmedia",
      icon: "https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg"
    },

    {
      id: 8,
      link: "https://www.youtube.com",
      name: "Youtube",
      comment: "Broadcast Yourself",
      tags: "#youtube #videosharing",
      icon:
        "https://static.vecteezy.com/system/resources/previews/003/399/771/original/youtube-icon-editorial-free-vector.jpg"
    }
  ];

function _setBookmarks() {
  let checkBookmarks = JSON.parse(localStorage.getItem("myBookmarks"));
  if(checkBookmarks){
     _createBookMarks();
    addNew();
  }else if(!checkBookmarks || checkBookmarks === null){
    localStorage.setItem("myBookmarks", JSON.stringify(initialBookmarks));
    _createBookMarks();
    addNew();
   
  }


}

function _createBookMarks() {
  $(".bookmarks").empty();
  let _storedBookmarks = JSON.parse(localStorage.getItem("myBookmarks"));
  
  _storedBookmarks.forEach((bookmark) => {
    let myBookmarks = $(`
 <div class="tile">
      <div class="edit">
      <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
    </div>
    <div class="image">
      <img src="${bookmark.icon}" alt="" class="fa logo" />
      </div>
    <div class="link">
      <a href="${bookmark.link}" target="_blank">${bookmark.name}</a>
    </div>
      <div class="comments">${bookmark.comment}
  </div>
    <div class="tags">
   <h5>${bookmark.tags}</h5>
    </div>
  
    </div>
    
   `).data("bookmark", bookmark);

    $(".bookmarks").prepend(myBookmarks);
    return myBookmarks;
  });

  $(".tile").on("click", ".fa-ellipsis-v", function () {
    let editCard = $(this).closest(".tile").data("bookmark");
    localStorage.setItem("editID", editCard.id);
    $("#editName").val(editCard.name);
    $("#editUrl").val(editCard.link);
    $("#editTags").val(editCard.tags);
    $("#editComment").val(editCard.comment);
    let editForm = $(".bookmark-editForm").addClass("active");
  });
  
  $(".tile").mouseover(function(){
  $(this).closest('.tile').addClass('active');
  $(this).parent().find(".link").addClass('active');  
  }).mouseout(function() {
  $(this).closest('.tile').removeClass('active');
  $(this).parent().find(".link").removeClass('active'); 
  });
}

//Open & Close Modals

$(".new-bookmark .fa-times").click(function () {
  $(".bookmark-forms").removeClass("active");
});

$(".edit-bookmark .fa-times").click(function () {
  $(".bookmark-editForm").removeClass("active");
});

//Update/Delete/Add Bookmarks

$("#update").on("click", (event) => {
  event.preventDefault();
  let newStorage = [];
  let allBookmarks = JSON.parse(localStorage.getItem("myBookmarks"));
  let edited = JSON.parse(localStorage.getItem("editID"));
  let updated = allBookmarks.filter(function (bookmark) {
    return bookmark.id === edited;
  });
  updated[0].name = $("#editName").val();
  updated[0].link = $("#editUrl").val();
  updated[0].tags = $("#editTags").val();
  updated[0].comment = $("#editComment").val();
  newStorage = allBookmarks;
  localStorage.setItem("myBookmarks", JSON.stringify(newStorage));
  let editForm = $(".bookmark-editForm").removeClass("active");
  refresh();
});

$("#delete").on("click", (event) => {
  event.preventDefault();
  let newStorage = [];
  let allBookmarks = JSON.parse(localStorage.getItem("myBookmarks"));
  let removing = JSON.parse(localStorage.getItem("editID"));
  let deleting = allBookmarks.findIndex(bookmark => bookmark.id === removing);
  allBookmarks.splice(deleting, 1);

  newStorage = allBookmarks;
  localStorage.setItem("myBookmarks", JSON.stringify(newStorage));
  let editForm = $(".bookmark-editForm").removeClass("active");
  refresh();
});

$("#newbie").click(function submitBookMark(event) {
  event.preventDefault();
  let newData = [];
  let allBookmarks = JSON.parse(localStorage.getItem("myBookmarks"))
  let name = $("#bookmark-name").val();
  let urlLink = $("#bookmark-url").val();
  let tags = $("#bookmark-tags").val();
  let comment = $("#bookmark-comment").val();
  let logo = $(".bookmark-forms .image-source").attr("src");

  if (name === "" && urlLink === "") {
    alert("Must provide a link and title for bookmark");
  } else {
    let newBookMark = {
      id: Math.floor(Math.random() * 500) + 11,
      link: urlLink,
      name: name,
      comment: comment,
      tags: tags,
      icon: logo
    };
    
    console.log(newBookMark)
   
    if (!allBookmarks || allBookmarks === null) {
      newData.push(newBookMark);
      localStorage.setItem('myBookmarks', JSON.stringify(newData));
          refresh();
    $(".bookmark-forms").removeClass("active");
    } else if (allBookmarks) {
      newData.push(...allBookmarks, newBookMark);
      localStorage.setItem('myBookmarks', JSON.stringify(newData));
          refresh();
    $(".bookmark-forms").removeClass("active");
    }

  }

  $("#bookmark-name").val("");
  $("#bookmark-url").val("");
  $("#bookmark-tags").val("");
  $("#bookmark-comment").val("");
  $(".bookmark-forms .image-source").attr("src", "");
  $(".bookmark-forms").removeClass("active");
});

//Image Upload
function showPreview(event) {
  if (event.target.files.length > 0) {
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("avi");
    preview.src = src;
    preview.style.display = "block";
  }
}

//New BookMark tile
function addNew() {
  let newTile = $(`
  <div class="tile2" id="newIcon">
 <div class="image-add">
      <i class="fa fa-bookmark" aria-hidden="true"></i>
      </div>
 <div class="link">
       <h5 id="new"> Add New</h5>
    </div>
  </div>
  `);

  $(".bookmarks").append(newTile);
  
  $(newTile).on('click', function(){
  $(".bookmark-forms").addClass("active");
});
  
  return newTile;
}



function initial(){
_setBookmarks();

}


function refresh(){
  _createBookMarks();
  addNew();
}

initial();

