import { z, defineCollection, reference } from "astro:content";

const missionCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      description: z.string(),
      order: z.number(),
    }),
});

const weaponsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      category: z.string(),
      order: z.number(),
      ttd: z.array(z.record(z.string())),
    }),
});

const taskorgCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      symbol: image(),
      image: image(),
    }),
});

const positionsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      cover: image(),
      description: z.string(),
      order: z.number(),
      usedWeapons: z.array(reference("weapons")),
      courses: z.array(z.string()),
      rank: z.string(),
      salary: z.string(),
    }),
});

export const collections = {
  mission: missionCollection,
  weapons: weaponsCollection,
  taskorg: taskorgCollection,
  positions: positionsCollection,
};
