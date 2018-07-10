const multilevel = {
  text: "Multilevel",
  icon: "table",
  items: [
    {
      href: "pages/tables/data.11.html",
      icon: "circle-o",
      text: "Level 1 item 1"
    },
    {
      icon: "circle-o",
      text: "Level 1 item 2",
      items: [
        {
          href: "pages/tables/data.21.html",
          icon: "circle-o",
          text: "Level 2 item 1",
        }         
      ]
    }
  ]
};

export default multilevel;
