import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { userServices } from "./user.services";

const getUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.getUsers();
  const responseData = {
    success: true,
    status: httpStatus.OK,
    message: "Users retrieved successfully",
    data: result,
  };
  sendResponse(res, responseData);
});

const getUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.getUser(req.params.id);
  const responseData = {
    success: true,
    status: httpStatus.OK,
    message: "User retrieved successfully",
    data: result,
  };
  sendResponse(res, responseData);
});

const createUser = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await userServices.createUser(payload);

  const responseData = {
    success: true,
    status: httpStatus.OK,
    message: "user created successfully",
    data: result,
  };
  sendResponse(res, responseData);
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await userServices.updateUser(req.params.categoryId, payload);

  const responseData = {
    success: true,
    status: httpStatus.OK,
    message: "User updated successfully",
    data: result,
  };
  sendResponse(res, responseData);
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.deleteUser(req.params.id);
  const responseData = {
    success: true,
    status: httpStatus.OK,
    message: "User Deleted successfully",
    data: result,
  };
  sendResponse(res, responseData);
});

export const userController = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
