import createUser from "../../../src/use-case/user/createUser";
import getUsers from "../../../src/use-case/user/getUsers";
import getUserID from "../../../src/use-case/user/getUserID";
import updateUser from "../../../src/use-case/user/updateUser";
import deleteUser from "../../../src/use-case/user/deleteUser";
import User from "../../../src/repositories/Users";

jest.mock("../../../src/repositories/Users", () => ({
  __esModule: true,
  default: {
    create: jest.fn(),
    findAll: jest.fn(),
    findByPk: jest.fn(),
  },
}));

type MockResponse = {
  status: jest.Mock;
  json: jest.Mock;
  send: jest.Mock;
};

const createRes = (): MockResponse => {
  const res = {
    status: jest.fn(),
    json: jest.fn(),
    send: jest.fn(),
  } as unknown as MockResponse;

  res.status.mockReturnValue(res);
  res.json.mockReturnValue(res);
  res.send.mockReturnValue(res);

  return res;
};

describe("User use-cases", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("createUser should return 201 with created user", async () => {
    const req = {
      body: {
        firstName: "Ana",
        lastName: "Silva",
        age: 28,
        email: "ana.silva@gmail.com",
      },
    } as any;
    const res = createRes();

    (User.create as jest.Mock).mockResolvedValue({ id: 1, ...req.body });

    await createUser(req, res as any);

    expect(User.create).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ id: 1, ...req.body });
  });

  it("createUser should return 400 when repository throws", async () => {
    const req = { body: { email: "duplicated@gmail.com" } } as any;
    const res = createRes();

    (User.create as jest.Mock).mockRejectedValue(new Error("duplicate key"));

    await createUser(req, res as any);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith("duplicate key");
  });

  it("getUsers should return all users", async () => {
    const req = {} as any;
    const res = createRes();
    const users = [{ id: 1 }, { id: 2 }];

    (User.findAll as jest.Mock).mockResolvedValue(users);

    await getUsers(req, res as any);

    expect(User.findAll).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(users);
  });

  it("getUserID should return a user by id", async () => {
    const req = { params: { id: "10" } } as any;
    const res = createRes();
    const user = { id: 10, firstName: "Carla" };

    (User.findByPk as jest.Mock).mockResolvedValue(user);

    await getUserID(req, res as any);

    expect(User.findByPk).toHaveBeenCalledWith("10");
    expect(res.json).toHaveBeenCalledWith(user);
  });

  it("updateUser should return 404 when user is not found", async () => {
    const req = { params: { id: "99" }, body: { firstName: "lucas" } } as any;
    const res = createRes();

    (User.findByPk as jest.Mock).mockResolvedValue(null);

    await updateUser(req, res as any);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "User not found" });
  });

  it("updateUser should update and return user", async () => {
    const req = { params: { id: "1" }, body: { firstName: "josé" } } as any;
    const res = createRes();
    const user = {
      id: 1,
      firstName: "jose",
      update: jest.fn().mockResolvedValue(undefined),
    };

    (User.findByPk as jest.Mock).mockResolvedValue(user);

    await updateUser(req, res as any);

    expect(User.findByPk).toHaveBeenCalledWith("1");
    expect(user.update).toHaveBeenCalledWith(req.body);
    expect(res.json).toHaveBeenCalledWith(user);
  });

  it("deleteUser should return 404 when user is not found", async () => {
    const req = { params: { id: ["77"] } } as any;
    const res = createRes();

    (User.findByPk as jest.Mock).mockResolvedValue(null);

    await deleteUser(req, res as any);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "User not found" });
  });

  it("deleteUser should return 404 when user is not found", async () => {
    const req = { params: { id: "77" } } as any;
    const res = createRes();

    (User.findByPk as jest.Mock).mockResolvedValue(null);

    await deleteUser(req, res as any);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "User not found" });
  });

  it("deleteUser should return 204 when user is deleted", async () => {
    const req = { params: { id: "2" } } as any;
    const res = createRes();
    const user = {
      id: 2,
      destroy: jest.fn().mockResolvedValue(undefined),
    };

    (User.findByPk as jest.Mock).mockResolvedValue(user);

    await deleteUser(req, res as any);

    expect(User.findByPk).toHaveBeenCalledWith("2");
    expect(user.destroy).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.send).toHaveBeenCalledTimes(1);
  });
});
