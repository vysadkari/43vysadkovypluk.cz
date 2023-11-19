import { z, defineCollection } from "astro:content";

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

export const collections = {
  mission: missionCollection,
  weapons: weaponsCollection,
};
