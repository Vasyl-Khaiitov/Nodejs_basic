import { Router } from 'express';
import {
  createStudentController,
  deleteStudentController,
  getStudentByIdController,
  getStudentsController,
  upsertStudentController,
} from '../controlles/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/students', ctrlWrapper(getStudentsController));
router.get('/students/:studentId', ctrlWrapper(getStudentByIdController));

router.post('/students', ctrlWrapper(createStudentController));
router.delete('/students/:studentId', ctrlWrapper(deleteStudentController));
router.put('/student/studentId', ctrlWrapper(upsertStudentController));

export default router;
