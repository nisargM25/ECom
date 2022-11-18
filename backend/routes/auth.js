import express from 'express';
import { vlogin, vlogout, vregister,clogin,cregister,clogout } from '../controllers/auth.js';

const router=express.Router();
router.post("/vregister",vregister)
router.post("/vlogin",vlogin)

router.post("/cregister",cregister)
router.post("/clogin",clogin)

router.post("/vlogout",vlogout)
router.post("/clogout",clogout)

export default router