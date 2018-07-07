const multilevel = {
  text: "Multilevel",
  icon: "table",
  items: [
    {
      href: "pages/tables/data.html",
      icon: "circle-o",
      text: "Level One item 1"
    },
    {
      href: "pages/tables/data2.html",
      icon: "circle-o",
      text: "Level One item 2",
      items: [
        {
          href: "pages/tables/data3.html",
          icon: "circle-o",
          text: "Level One"
        }
      ]
    }
  ]
};

export default multilevel;
