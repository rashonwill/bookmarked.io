(function () {
  let theme = localStorage.getItem("theme");
  console.log(theme);
  if (!theme) {
    localStorage.setItem("theme", "lightMode");
    lightMode();
  } else if (theme && theme === "lightMode") {
    lightMode();
  } else if (theme && theme === "darkMode") {
    darkMode();
  }
})();

//Dark Mode Toggle
function darkMode() {
  $("body").addClass("darkmode");
  $(".container").addClass("darkmode");
  $(".theme-switch").addClass("darkmode");
  $(".mode button").addClass(".mode button active");
  $(".search input").addClass("darkmode");
  $(".bookmark-forms").addClass("darkmode");
  $(".bookmark-forms input").addClass("darkmode");

//   $(".tile .fa").addClass("dark");
  $(".tile .fa-bookmark").addClass("dm");
  $(".search input").addClass("dms");
  $("#btn-filter").addClass("dmt");
  $("select").addClass("dmsb");
  localStorage.setItem("theme", "darkMode");
}

function lightMode() {
  $("body").removeClass("darkmode");
  $(".container").removeClass("darkmode");
  $(".theme-switch").removeClass("darkmode");
  $(".mode button").removeClass(".mode button active");
  $(".search input").removeClass("darkmode");
  $(".bookmark-forms").addClass("darkmode");
  $(".bookmark-forms input").removeClass("darkmode");
  $(".tile .fa").removeClass("dark");
  $(".tile .fa-bookmark").removeClass("dm");
  $(".search input").removeClass("dms");
  $("#btn-filter").removeClass("dmt");
  $("select").removeClass("dmsb");
  localStorage.setItem("theme", "lightMode");
}

$(".switch").click(function () {
  console.log("🌝 vs 🌚");
  let checkMode = localStorage.getItem("theme");
  console.log(checkMode);
  if (checkMode === "lightMode") {
    darkMode();
  } else if (checkMode === "darkMode") {
    lightMode();
  }
});

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
    icon: "https://www.google.com/favicon.ico"
  },

  {
    id: 2,
    link: "https://www.github.com",
    name: "Github",
    comment: "Build software better, together",
    tags: "#github #coding #development",
    icon: "https://www.github.com/favicon.ico"
  },

  {
    id: 3,
    link: "https://www.codepen.io",
    name: "Codepen",
    comment: "Demo or it didn't happen.",
    tags: "#codepen #coding #development",
    icon: "https://www.codepen.io/favicon.ico"
  },

  {
    id: 4,
    link: "https://express.adobe.com/sp",
    name: "Adobe Express",
    comment: "Changing the world through digital experiences.",
    tags: "#ui #development #creativity",
    icon:
      "https://is2-ssl.mzstatic.com/image/thumb/Purple112/v4/4e/17/14/4e17142d-61ab-1ed6-1275-c3248348b98c/AppIconSpark-0-0-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png"
  },

  {
    id: 5,
    link: "https://dribbble.com/",
    name: "Dribble",
    comment: "Design Inspiration",
    tags: "#development #inspiration #ui #designers",
    icon:
      "https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1a869eb6cd414f4d640ee48ab2a15a26b.ico"
  },

  {
    id: 6,
    link: "https://bennettfeely.com/clippy/",
    name: "Clippy",
    comment: "CSS Clip-path maker",
    tags: "#development #css",
    icon:
      "https://shots.codepen.io/bennettfeely/pen/QWPKZR-800.jpg?version=1413313919"
  },

  {
    id: 7,
    link: "https://www.csshero.org/mesher/",
    name: "CSS Mesher",
    comment: "Mesher by CSS Hero",
    tags: "#css #development",
    icon: "https://www.csshero.org/favicon.ico"
  },

  {
    id: 8,
    link: "https://unsplash.com/",
    name: "Unsplash",
    comment: "Stock Images",
    tags: "#images #backgrounds",
    icon: "https://unsplash.com/favicon.ico"
  },
  {
    id: 9,
    link: "https://www.postman.com/",
    name: "Postman",
    comment: "Build APIs togetjer",
    tags: "#api #testing #development",
    icon:
      "https://user-images.githubusercontent.com/2676579/34940598-17cc20f0-f9be-11e7-8c6d-f0190d502d64.png"
  },

  {
    id: 10,
    link: "https://id.heroku.com/login",
    name: "Heroku",
    comment: "Great apps come from inspired and productive developers.",
    tags: "#server #cloud",
    icon: "https://www.herokucdn.com/favicon.ico"
  },

  {
    id: 11,
    link: "https://www.hexcolortool.com/",
    name: "Hex Color Tool",
    comment: "HTML Color codes.",
    tags: "#css #design #development",
    icon: "https://www.hexcolortool.com/favicon.ico"
  },

  {
    id: 12,
    link: "https://fontawesome.com/",
    name: "Font Awesome",
    comment: "Icons for UI design.",
    tags: "#css #design #development",
    icon: "https://fontawesome.com/favicon.ico"
  },

  {
    id: 13,
    link: "https://aws.amazon.com/console/",
    name: "AWS Console",
    comment: "AWS Management Console",
    tags: "#cloud #storage",
    icon: "https://aws.amazon.com/favicon.ico"
  },

  {
    id: 14,
    link: "https://www.netlify.com/",
    name: "Netlify",
    comment: "Web site hosting",
    tags: "#static #webapps",
    icon:
      "https://cdn.iconscout.com/icon/free/png-256/netlify-3629537-3032320.png"
  },

  {
    id: 15,
    link: "https://expo.dev/",
    name: "Expo Dev",
    comment: "Make any app. Run it everywhere",
    tags: "#reactnative #mobile #apps",
    icon: "https://static.expo.dev/static/brand/square-512x512.png"
  },

  {
    id: 16,
    link: "https://www.codecademy.com/",
    name: "Code Academy",
    comment: "Learning is a community",
    tags: "#learning #development",
    icon: "https://www.codecademy.com/favicon.ico"
  },

  {
    id: 17,
    link: "https://www.figma.com/",
    name: "Figma",
    comment: "make design accessible to everyone",
    tags: "#ui #creative #design",
    icon: "https://static.figma.com/app/icon/1/icon-192.png"
  }
];

function _setBookmarks() {
  let checkBookmarks = JSON.parse(localStorage.getItem("myBookmarks"));
  if (checkBookmarks) {
    _createBookMarks();
    addNew();
  } else if (!checkBookmarks || checkBookmarks === null) {
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
    $(".new-bookmark").css("display", "none");
    $(".edit-bookmark").css("display", "block");
    $(".bookmark-forms").addClass("active");
    $(window).scrollTop(0);
    $('.bookmarks').css('pointer-events', 'none');
  });

  $(".tile")
    .mouseover(function () {
      $(this).closest(".tile").addClass("active");
      $(this).parent().find(".link").addClass("active");
    })
    .mouseout(function () {
      $(this).closest(".tile").removeClass("active");
      $(this).parent().find(".link").removeClass("active");
    });
}

//Open & Close Modals

$(".bookmark-forms .fa-xmark").click(function () {
  $(".bookmark-forms").removeClass("active");
  $('.bookmarks').css('pointer-events', 'auto');
});

//Update/Delete/Add Bookmarks

$("#update").on("click", (event) => {
  event.preventDefault();
  let newStorage = [];
  const favicon = "/favicon.ico";
  let allBookmarks = JSON.parse(localStorage.getItem("myBookmarks"));
  let edited = JSON.parse(localStorage.getItem("editID"));
  let updated = allBookmarks.filter(function (bookmark) {
    return bookmark.id === edited;
  });
  updated[0].name = $("#editName").val();
  updated[0].link = $("#editUrl").val();
  updated[0].tags = $("#editTags").val();
  updated[0].comment = $("#editComment").val();
  //   updated[0].icon = $("#editTags").val() + favicon;
  newStorage = allBookmarks;
  localStorage.setItem("myBookmarks", JSON.stringify(newStorage));
  $('.bookmarks').css('pointer-events', 'auto');
  $(".bookmark-forms").removeClass("active");
  refresh();
  
});

$("#delete").on("click", (event) => {
  event.preventDefault();
  let newStorage = [];
  let allBookmarks = JSON.parse(localStorage.getItem("myBookmarks"));
  let removing = JSON.parse(localStorage.getItem("editID"));
  let deleting = allBookmarks.findIndex((bookmark) => bookmark.id === removing);
  allBookmarks.splice(deleting, 1);

  newStorage = allBookmarks;
  localStorage.setItem("myBookmarks", JSON.stringify(newStorage));
  $(".bookmark-forms").removeClass("active");
  $('.bookmarks').css('pointer-events', 'auto');
  refresh();
  
});

$("#newbie").click(function submitBookMark(event) {
  event.preventDefault();
  const favicon = "/favicon.ico";
  let newData = [];
  let allBookmarks = JSON.parse(localStorage.getItem("myBookmarks"));
  let name = $("#bookmark-name").val();
  let urlLink = $("#bookmark-url").val();
  let tags = $("#bookmark-tags").val();
  let comment = $("#bookmark-comment").val();
  let logo = urlLink + favicon;

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

    if (!allBookmarks || allBookmarks === null) {
      newData.push(newBookMark);
      localStorage.setItem("myBookmarks", JSON.stringify(newData));
      refresh();
      $(".bookmark-forms").removeClass("active");
    } else if (allBookmarks) {
      newData.push(...allBookmarks, newBookMark);
      localStorage.setItem("myBookmarks", JSON.stringify(newData));
      refresh();
      $(".bookmark-forms").removeClass("active");
      $('.bookmarks').css('pointer-events', 'auto');
    }
  }

  $("#bookmark-name").val("");
  $("#bookmark-url").val("");
  $("#bookmark-tags").val("");
  $("#bookmark-comment").val("");
  $(".bookmark-forms .image-source").attr("src", "");
  $(".bookmark-forms").removeClass("active");
});

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

  $(newTile).on("click", function () {
    $(".edit-bookmark").css("display", "none");
    $(".new-bookmark").css("display", "block");
    $(".bookmark-forms").addClass("active");
    $(window).scrollTop(0);
    $('.bookmarks').css('pointer-events', 'none');
  });

  return newTile;
}

function refresh() {
  _createBookMarks();
  addNew();
}

  _setBookmarks();


