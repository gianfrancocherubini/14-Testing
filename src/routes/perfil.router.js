import { Router } from 'express';
import { PerfilController } from '../controller/perfil.controller.js';
import { isUsuario } from '../config/config.auten.autoriz.js';



export const router=Router()

router.post('/consultasWs', isUsuario, PerfilController.consultasWs);
router.post('/premium/:cid', PerfilController.cambiarUsuario);
router.get('/usuario/:cid',PerfilController.buscarUsuario);
router.post('/recupero01', PerfilController.recuperoPassword01);
router.post('/recupero03', PerfilController.recuperoPassword03);