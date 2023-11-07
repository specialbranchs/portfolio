export const ScrollTo = () => {
  var section = document.querySelectorAll("section");
  var sections: any = {};
  Array.prototype.forEach.call(section, (e) => {
    sections[e.id] = e.offsetTop;
  });
  // console.log(sections)
  let top = 100;
  window.onscroll = () => {
    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    scrollPosition = scrollPosition + top;
    if (scrollPosition > 300) {
      document.querySelector("nav")?.setAttribute("class", "navbg");
    } else {
      document.querySelector("nav")?.setAttribute("class", "");
    }
    for (let i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector(".active")?.setAttribute("class", "");
        // console.log(document.getElementById('#'+i).seta)
        document.getElementById("#" + i)?.setAttribute("class", "active");
      }
    }
  };
  var anchors = document.querySelectorAll("nav a");

  //   console.log(anchors);
  for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener(
      "click",
      () => {
        let anchor = anchors[i];
        let target: string = anchor.id;
        let id: any = target.split("#")[1];
        console.log(id);
        if (id) {
          console.log(sections[id]);
          window.scrollTo({ top: sections[id] - top + 20, behavior: "smooth" });
        }
      },
      false
    );
  }
};
