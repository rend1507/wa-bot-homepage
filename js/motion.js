(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var nodes = document.querySelectorAll("[data-reveal]");
  if (!nodes.length) return;

  if (reduce || !("IntersectionObserver" in window)) {
    for (var i = 0; i < nodes.length; i++) nodes[i].classList.add("is-in");
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (!entries[i].isIntersecting) continue;
        entries[i].target.classList.add("is-in");
        io.unobserve(entries[i].target);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  for (var j = 0; j < nodes.length; j++) io.observe(nodes[j]);
})();
