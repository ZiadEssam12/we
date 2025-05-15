"use client";

import {
  getAllSecondaryCabinets as getSecondaryCabinets,
  getSecondaryCabinetById,
  createSecondaryCabinet as createCabinet,
  updateSecondaryCabinet as updateCabinet,
  deleteSecondaryCabinet as deleteCabinet,
  getAllMobileTowers as getMobileTowers,
  getMobileTowerById,
  createMobileTower as createTower,
  updateMobileTower as updateTower,
  deleteMobileTower as deleteTower,
  getAllCopperLines as getCopperLines,
  getCopperLineById,
  createCopperLine as createLine,
  updateCopperLine as updateLine,
  deleteCopperLine as deleteLine,
  getAllMajorCabinets as getMajorCabinets,
  getMajorCabinetById,
  createMajorCabinet as createMajor,
  updateMajorCabinet as updateMajor,
  deleteMajorCabinet as deleteMajor,
  getAllUsers as getUsers,
  createUser as createUserBase,
  updateUser as updateUserBase,
  deleteUser as deleteUserBase,
} from "./api";

// Secondary Cabinet client wrappers
export const getAllSecondaryCabinets = async (options = {}) => {
  return await getSecondaryCabinets(options);
};

export const createSecondaryCabinet = async (data) => {
  return await createCabinet({ cabinetData: data });
};

export const updateSecondaryCabinet = async ({ id, ...data }) => {
  return await updateCabinet({ id, cabinetData: data });
};

export const deleteSecondaryCabinet = async ({ id }) => {
  return await deleteCabinet({ id });
};

// Mobile Tower client wrappers
export const getAllMobileTowers = async (options = {}) => {
  return await getMobileTowers(options);
};

export const createMobileTower = async (data) => {
  return await createTower({ towerData: data });
};

export const updateMobileTower = async ({ id, ...data }) => {
  return await updateTower({ id, towerData: data });
};

export const deleteMobileTower = async ({ id }) => {
  return await deleteTower({ id });
};

// Copper Line client wrappers
export const getAllCopperLines = async (options = {}) => {
  return await getCopperLines(options);
};

export const createCopperLine = async (data) => {
  return await createLine({ lineData: data });
};

export const updateCopperLine = async ({ id, ...data }) => {
  return await updateLine({ id, lineData: data });
};

export const deleteCopperLine = async ({ id }) => {
  return await deleteLine({ id });
};

// Major Cabinet client wrappers
export const getAllMajorCabinets = async (options = {}) => {
  return await getMajorCabinets(options);
};

export const createMajorCabinet = async (data) => {
  return await createMajor({ cabinetData: data });
};

export const updateMajorCabinet = async ({ id, ...data }) => {
  return await updateMajor({ id, cabinetData: data });
};

export const deleteMajorCabinet = async ({ id }) => {
  return await deleteMajor({ id });
};

// User client wrappers
export const getAllUsers = async (options = {}) => {
  return await getUsers(options);
};

export const createUser = async (data) => {
  return await createUserBase({ user: data });
};

export const updateUser = async ({ id, ...data }) => {
  return await updateUserBase({ user: { id, ...data } });
};

export const deleteUser = async ({ id }) => {
  return await deleteUserBase({ userId: id });
};
