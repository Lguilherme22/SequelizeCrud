// Unit tests for user use-cases, mocking the User model
const mockCreate = jest.fn();
const mockFindAll = jest.fn();
const mockFindByPk = jest.fn();

jest.mock('../repositories/Users', () => ({
  __esModule: true,
  default: {
    create: mockCreate,
    findAll: mockFindAll,
    findByPk: mockFindByPk,
  },
}));

import createUser from '../use-case/user/createUser';
import getAllUsers from '../use-case/user/getUsers';
import getUserById from '../use-case/user/getUserID';
import updateUser from '../use-case/user/updateUser';
import deleteUser from '../use-case/user/deleteUser';
import { Request, Response } from 'express';

function createResponseMocks() {
  const json = jest.fn();
  const send = jest.fn();
  const status = jest.fn(() => ({ json, send }));
  return { status, json, send } as unknown as Response;
}

describe('User use-cases (unit)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('createUser - success returns 201 with created user', async () => {
    const req = { body: { firstName: 'John' } } as unknown as Request;
    const res = createResponseMocks();

    const created = { id: 1, firstName: 'John' };
    mockCreate.mockResolvedValue(created);

    // @ts-ignore
    await createUser(req, res);

    expect(mockCreate).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    const statusReturn = (res.status as jest.Mock).mock.results[0].value;
    expect(statusReturn.json).toHaveBeenCalledWith(created);
  });

  test('createUser - error returns 400 with message', async () => {
    const req = { body: { firstName: 'X' } } as unknown as Request;
    const res = createResponseMocks();

    mockCreate.mockRejectedValue(new Error('duplicate'));

    // @ts-ignore
    await createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    const statusReturnErr = (res.status as jest.Mock).mock.results[0].value;
    expect(statusReturnErr.json).toHaveBeenCalled();
  });

  test('getAllUsers - returns json list', async () => {
    const req = {} as Request;
    const res = createResponseMocks();

    const users = [{ id: 1 }];
    mockFindAll.mockResolvedValue(users);

    // @ts-ignore
    await getAllUsers(req, res);

    expect(mockFindAll).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(users);
  });

  test('getUserById - returns found user', async () => {
    const req = { params: { id: '1' } } as unknown as Request;
    const res = createResponseMocks();

    const user = { id: 1 };
    mockFindByPk.mockResolvedValue(user);

    // @ts-ignore
    await getUserById(req, res);

    expect(mockFindByPk).toHaveBeenCalledWith('1');
    expect(res.json).toHaveBeenCalledWith(user);
  });

  test('updateUser - not found returns 404', async () => {
    const req = { params: { id: '1' }, body: { firstName: 'A' } } as unknown as Request;
    const res = createResponseMocks();

    mockFindByPk.mockResolvedValue(null);

    // @ts-ignore
    await updateUser(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    const statusReturn404 = (res.status as jest.Mock).mock.results[0].value;
    expect(statusReturn404.json).toHaveBeenCalledWith({ message: 'User not found' });
  });

  test('updateUser - success updates and returns user', async () => {
    const req = { params: { id: '1' }, body: { firstName: 'New' } } as unknown as Request;
    const res = createResponseMocks();

    const userObj: any = { id: '1', firstName: 'Old', update: jest.fn().mockResolvedValue(undefined) };
    mockFindByPk.mockResolvedValue(userObj);

    // @ts-ignore
    await updateUser(req, res);

    expect(userObj.update).toHaveBeenCalledWith(req.body);
    expect(res.json).toHaveBeenCalledWith(userObj);
  });

  test('deleteUser - not found returns 404', async () => {
    const req = { params: { id: '1' } } as unknown as Request;
    const res = createResponseMocks();

    mockFindByPk.mockResolvedValue(null);

    // @ts-ignore
    await deleteUser(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    const statusReturn404b = (res.status as jest.Mock).mock.results[0].value;
    expect(statusReturn404b.json).toHaveBeenCalledWith({ message: 'User not found' });
  });

  test('deleteUser - success deletes and returns 204', async () => {
    const req = { params: { id: '1' } } as unknown as Request;
    const res = createResponseMocks();

    const userObj: any = { id: '1', destroy: jest.fn().mockResolvedValue(undefined) };
    mockFindByPk.mockResolvedValue(userObj);

    // @ts-ignore
    await deleteUser(req, res);

    expect(userObj.destroy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(204);
    const statusReturn204 = (res.status as jest.Mock).mock.results[0].value;
    expect(statusReturn204.send).toHaveBeenCalled();
  });
});
