import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const router = Router();
const prisma = new PrismaClient();

// Create tweet
router.post("/", async (req, res) => {
  const { content, image, userId } = req.body;
  try {
    const tweet = await prisma.tweet.create({
      data: { content, image, userId },
    });
    res.json(tweet);
  } catch (error) {
    res.status(400).json({ error: "Error creating tweet" });
  }
});

// List tweets
router.get("/", async (req, res) => {
  const allTweets = await prisma.tweet.findMany();
  res.json(allTweets);
});

// Get one tweet
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const tweet = await prisma.tweet.findUnique({ where: { id: Number(id) } });
  if (!tweet) {
    res.status(404).json({ error: "TWeet not found!" });
  }
  res.json(tweet);
});

// Update tweet
router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not implemented: ${id}` });
});

// Delete tweet
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.tweet.delete({ where: { id: Number(id) } });
  res.sendStatus(200);
});

export default router;
