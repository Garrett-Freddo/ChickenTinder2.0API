import express from 'express';
const axios = require("axios");

import { usersPage, addUsers } from '../controllers';
import { addTask, deleteTask, tasksPage, updateTask } from '../controllers/tasks';
import {getRestaurants} from '../gateways/GooglePlacesGateway';
const indexRouter = express.Router();


indexRouter.put('/tasks', updateTask);
indexRouter.delete('/tasks', deleteTask);
indexRouter.post('/tasks', addTask);
indexRouter.get('/tasks', tasksPage);
indexRouter.get('/users', usersPage);
indexRouter.post('/users', addUsers);
indexRouter.get('/maps', getRestaurants)

export default indexRouter;