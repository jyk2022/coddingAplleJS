$(function () {
  let tabBtn = document.querySelectorAll(".tab-button");
  let tabCon = document.querySelectorAll(".tab-content");
  for (let i = 0; i < tabBtn.length; i++) {
    $(tabBtn)
      .eq(i)
      .on("click", function () {
        $(tabBtn).removeClass("orange");
        $(tabBtn).eq(i).addClass("orange");
        $(tabCon).removeClass("show");
        $(tabCon).eq(i).addClass("show");
      });
  }
});

// $(function () {
//   let tabBtn = $(".tab-button");
//   let tabCon = $(".tab-content");
//   $(tabBtn)
//     .eq(0)
//     .on("click", function () {
//       $(tabBtn).removeClass("orange");
//       $(tabBtn).eq(0).addClass("orange");
//       $(tabCon).removeClass("show");
//       $(tabCon).eq(0).addClass("show");
//     });
//   $(".tab-button")
//     .eq(1)
//     .on("click", function () {
//       $(".tab-button").removeClass("orange");
//       $(".tab-button").eq(1).addClass("orange");
//       $(".tab-content").removeClass("show");
//       $(".tab-content").eq(1).addClass("show");
//     });
//   $(".tab-button")
//     .eq(2)
//     .on("click", function () {
//       $(".tab-button").removeClass("orange");
//       $(".tab-button").eq(2).addClass("orange");
//       $(".tab-content").removeClass("show");
//       $(".tab-content").eq(2).addClass("show");
//     });
// });
