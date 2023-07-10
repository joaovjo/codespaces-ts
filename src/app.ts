/**
 * arquivo: app.ts
 * descrição: arquivo responsável pela conexão com o arquivo server.ts
 * data: 10-07-2023
 * autor: @joaovjo
 */

import express, { Application, Request, Response, NextFunction } from 'express';
import { router as userRoutes } from './routes/user.routes';
