function addEvent(t, n, e) {
  t.addEventListener
    ? t.addEventListener(n, e, !1)
    : t.attachEvent && t.attachEvent("on" + n, e);
}
addEvent(document, "mouseout", function (t) {
  null == t.toElement && null == t.relatedTarget && $(".lightbox").slideDown();
}),
  $("a.close").click(function () {
    $(".lightbox").slideUp();
  }),
  $("body").click(function () {
    $(".lightbox").slideUp();
  });
