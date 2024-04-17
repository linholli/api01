import express from "express";
import multer from "multer";
import moment from "moment";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import dotenv from "dotenv";

const router = express.Router();


router.get("/api/products", (req, res) => {
    res.send("獲取所有產品");
  });
  router.get("/api/products/search", (req, res) => {
    res.send("使用 ID 作為搜尋條件來搜尋產品");
  });
  router.get("/api/products/:id/", (req, res) => {
    res.send(`獲取特定 ID 的產品 ${req.params.id}`);
  });
  router.post("/api/products/", (req, res) => {
    res.send("新增一個產品");
  });
  router.put("/api/products/:id/", (req, res) => {
    res.send(`更新特定 ID 的產品 ${req.params.id}`);
  });
  router.delete("/api/products/:id/", (req, res) => {
    res.send(`刪除特定 ID 的產品 ${req.params.id}`);
  });

  export default router;