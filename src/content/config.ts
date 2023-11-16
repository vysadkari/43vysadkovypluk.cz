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

export const collections = {
  mission: missionCollection,
};
