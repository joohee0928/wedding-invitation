lightGallery(document.querySelector("#gallery"));

document.querySelector("#shareFacebook").addEventListener("click", () => {
  var url = "http://www.naver.com";
  window.open(
    "http://facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url),
    "",
    "left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0"
  );
});
