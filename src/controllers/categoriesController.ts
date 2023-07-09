import { Request, Response } from "express";
import { categoryService } from "../services/categoryService";
import { getPaginationParams } from "../helpers/getPaginationParams";

export const categoriesController = {
  index: async (req: Request, res: Response) => {
    const [pageNumber, perPageNumber] = getPaginationParams(req.query);

    try {
      const paginatedCategories = await categoryService.findAllPaginated(
        pageNumber,
        perPageNumber
      );

      return res.json(paginatedCategories);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  },

  show: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const category = await categoryService.findByIdWithCourses(id);
      return res.json(category);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
