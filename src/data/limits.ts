type Discipline = {
  id: string;
  title: string;
  subtitle?: string;
  onlyFor?: "male" | "female";
};

type MaleDisciplines = {
  situps_a: number | string;
  situps_b: number | string;
  pushups_a: number | string;
  pushups_b: number | string;
  pullups_a: number | string;
  pullups_b: number | string;
  running_a: string;
  running_b: string;
  swimming_a: string;
  swimming_b: string;
  march_a: string;
  march_b: string;
};

type FemaleDisciplines = {
  situps_a: number | string;
  situps_b: number | string;
  pushups_a: number | string;
  pushups_b: number | string;
  pullups_a: number | string;
  pullups_b: number | string;
  hanging_a: string;
  hanging_b: string;
  running_a: string;
  running_b: string;
  swimming_a: string;
  swimming_b: string;
  march_a: string;
  march_b: string;
};

type MaleLimits = {
  [key: number]: MaleDisciplines;
};

type FemaleLimits = {
  [key: number]: FemaleDisciplines;
};

const disciplines: Discipline[] = [
  {
    id: "situps",
    title: "Leh - sedy",
    subtitle: "za minutu",
  },
  {
    id: "pushups",
    title: "Kliky",
    subtitle: "za 30 vteřin",
    onlyFor: "male",
  },
  {
    id: "pullups",
    title: "Shyby",
    onlyFor: "male",
  },
  {
    id: "hanging",
    title: "Výdrž ve shybu",
    onlyFor: "female",
  },
  {
    id: "running",
    title: "Běh",
    subtitle: "na 12 minut",
  },
  {
    id: "swimming",
    title: "Plavání",
    subtitle: "na 300 metrů",
  },
  {
    id: "march",
    title: "Pochod",
    subtitle: "na 35 km",
  },
];

const maleLimits: MaleLimits = {
  1: {
    situps_a: 46,
    situps_b: 46,
    pushups_a: 28,
    pushups_b: 28,
    pullups_a: 10,
    pullups_b: 10,
    running_a: "2 800",
    running_b: "2 800",
    swimming_a: "9 minut",
    swimming_b: "uplavat",
    march_a: "8 hodin",
    march_b: "-",
  },
  2: {
    situps_a: 45,
    situps_b: 45,
    pushups_a: 27,
    pushups_b: 27,
    pullups_a: 9,
    pullups_b: 9,
    running_a: "2 700",
    running_b: "2 700",
    swimming_a: "9 minut",
    swimming_b: "uplavat",
    march_a: "8 hodin",
    march_b: "-",
  },
  3: {
    situps_a: 40,
    situps_b: 40,
    pushups_a: 24,
    pushups_b: 24,
    pullups_a: 8,
    pullups_b: 8,
    running_a: "2 600",
    running_b: "2 600",
    swimming_a: "9 minut",
    swimming_b: "uplavat",
    march_a: "8 hodin",
    march_b: "-",
  },
  4: {
    situps_a: 39,
    situps_b: 39,
    pushups_a: 22,
    pushups_b: 22,
    pullups_a: 7,
    pullups_b: 7,
    running_a: "2 500",
    running_b: "2 500",
    swimming_a: "9 minut",
    swimming_b: "uplavat",
    march_a: "8 hodin",
    march_b: "-",
  },
  5: {
    situps_a: 34,
    situps_b: 34,
    pushups_a: 19,
    pushups_b: 19,
    pullups_a: 6,
    pullups_b: 6,
    running_a: "2 300",
    running_b: "2 300",
    swimming_a: "9 minut",
    swimming_b: "uplavat",
    march_a: "8 hodin",
    march_b: "-",
  },
  6: {
    situps_a: "-",
    situps_b: "-",
    pushups_a: "-",
    pushups_b: "-",
    pullups_a: "-",
    pullups_b: "-",
    running_a: "2 100",
    running_b: "2 100",
    swimming_a: "9 minut",
    swimming_b: "uplavat",
    march_a: "8 hodin",
    march_b: "-",
  },
};

const femaleLimits: FemaleLimits = {
  1: {
    situps_a: 40,
    situps_b: 40,
    pushups_a: "-",
    pushups_b: "-",
    pullups_a: "-",
    pullups_b: "-",
    hanging_a: "0:30",
    hanging_b: "0:30",
    running_a: "2 300",
    running_b: "2 300",
    swimming_a: "9 minut",
    swimming_b: "uplavat",
    march_a: "8 hodin",
    march_b: "-",
  },
  2: {
    situps_a: 33,
    situps_b: 28,
    pushups_a: "-",
    pushups_b: "-",
    pullups_a: "-",
    pullups_b: "-",
    hanging_a: "0:28",
    hanging_b: "0:28",
    running_a: "2 200",
    running_b: "2 200",
    swimming_a: "9 minut",
    swimming_b: "uplavat",
    march_a: "8 hodin",
    march_b: "-",
  },
  3: {
    situps_a: 30,
    situps_b: 26,
    pushups_a: "-",
    pushups_b: "-",
    pullups_a: "-",
    pullups_b: "-",
    hanging_a: "0:22",
    hanging_b: "0:22",
    running_a: "2 100",
    running_b: "2 100",
    swimming_a: "9 minut",
    swimming_b: "uplavat",
    march_a: "8 hodin",
    march_b: "-",
  },
  4: {
    situps_a: 25,
    situps_b: 23,
    pushups_a: "-",
    pushups_b: "-",
    pullups_a: "-",
    pullups_b: "-",
    hanging_a: "0:14",
    hanging_b: "0:14",
    running_a: "2 000",
    running_b: "2 000",
    swimming_a: "9 minut",
    swimming_b: "uplavat",
    march_a: "8 hodin",
    march_b: "-",
  },
  5: {
    situps_a: 22,
    situps_b: 20,
    pushups_a: "-",
    pushups_b: "-",
    pullups_a: "-",
    pullups_b: "-",
    hanging_a: "0:10",
    hanging_b: "0:10",
    running_a: "1 900",
    running_b: "1 900",
    swimming_a: "9 minut",
    swimming_b: "uplavat",
    march_a: "8 hodin",
    march_b: "-",
  },
  6: {
    situps_a: "-",
    situps_b: "-",
    pushups_a: "-",
    pushups_b: "-",
    pullups_a: "-",
    pullups_b: "-",
    hanging_a: "-",
    hanging_b: "-",
    running_a: "1 800",
    running_b: "1 800",
    swimming_a: "9 minut",
    swimming_b: "uplavat",
    march_a: "8 hodin",
    march_b: "-",
  },
};

const ageCategories = {
  male: [
    "do 30 let",
    "31 - 35 let",
    "36 - 40 let",
    "41 - 45 let",
    "46 - 50 let",
    "51 let a starší",
  ],
  female: [
    "do 25 let",
    "26 - 30 let",
    "31 - 35 let",
    "36 - 40 let",
    "41 - 45 let",
    "46 let a starší",
  ],
};

export default disciplines;
export { maleLimits, femaleLimits, ageCategories };
