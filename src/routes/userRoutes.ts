import { Router } from "express";

const router = Router();

// Create user
router.post("/", (req, res) => {
  res.status(501).json({ error: "Not implemented" });
});

// List users
router.get("/", (req, res) => {
  res.status(501).json({ error: "Not implemented" });
});

// Get one user
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not implemented: ${id}` });
});

// Update user
router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not implemented: ${id}` });
});

// Delete user
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not implemented: ${id}` });
});

export default router;
