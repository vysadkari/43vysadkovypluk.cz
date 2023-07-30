type MenuItem = {
  title: string;
  url?: string;
  image?: string;
};

const menu: MenuItem[] = [
  {
    title: "Co děláme",
    url: "/co-delame",
    image: "/images/menu/co-delame.jpg",
  },
  {
    title: "Výzbroj",
    url: "/vyzbroj",
    image: "/images/menu/vyzbroj.jpg",
  },
  {
    title: "Organizační struktura",
    url: "/organizacni-struktura",
    image: "/images/menu/organizacni-struktura.jpg",
  },
  {
    title: "Volná místa",
    url: "/volna-mista",
    image: "/images/menu/volna-mista.jpg",
  },
  {
    title: "|",
  },
  {
    title: "Kariéra",
    url: "/kariera",
    image: "/images/menu/kariera.jpg",
  },
  {
    title: "Výběrové řízení",
    url: "/vyberove-rizeni",
    image: "/images/menu/vyberove-rizeni.jpg",
  },
];

export default menu;
