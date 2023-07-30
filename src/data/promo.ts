type Promo = {
  title: string;
  url: string;
  image: string;
};

const promo: Promo[] = [
  {
    title: "Poznej náplň naší práce",
    url: "/co-delame",
    image: "images/homepage/promo/co-delame.jpg",
  },
  {
    title: "S čím plníme úkoly",
    url: "/vyzbroj",
    image: "images/homepage/promo/vyzbroj.jpg",
  },
  {
    title: "Jednotky pluku",
    url: "/organizacni-struktura",
    image: "images/homepage/promo/organizacni-struktura.jpg",
  },
  {
    title: "Hledáme právě tebe",
    url: "/volna-mista",
    image: "images/homepage/promo/volna-mista.jpg",
  },
];

export default promo;
