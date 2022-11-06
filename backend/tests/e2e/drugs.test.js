const flatted = require("flatted");
const app = require("../..");
const request = require("supertest")(app);

test("create a new drug", async () => {
  const drugToCreate = {
    name: "Test drug",
  };

  const response = await request.post("/drugs").send(drugToCreate).expect(200);

  const drugCreated = response.body;

  expect(drugCreated).toMatchObject(drugToCreate);
});

test("get for all drugs", async () => {
  const drugToCreate = {
    name: "Test Drug 1",
  };

  await request.post("/drugs").send(drugToCreate).expect(200);

  const responseForGet = await request.get(`/drugs`).expect(200);

  expect(flatted.stringify(responseForGet)).toContain("Test Drug 1");
});

test("get an existing drug", async () => {
  const drugToCreate = {
    name: "Test-drug",
  };

  const responseForPost = await request
    .post("/drugs")
    .send(drugToCreate)
    .expect(200);

  const responseForGet = await request
    .get(`/drugs/${responseForPost.body._id}`)
    .expect(200);

  expect(responseForGet.body).toMatchObject(drugToCreate);
});

test("delete a drug", async () => {
  const drugToCreate = {
    name: "Test drug",
  };

  const responseForPost = await request
    .post("/drugs")
    .send(drugToCreate)
    .expect(200);

  const responseForDelete = await request
    .delete(`/drugs/${responseForPost.body._id}`)
    .expect(200);

  const deleteddrug = responseForDelete.body;

  expect(deleteddrug).toEqual({});
});

test("patch a drug", async () => {
  const drugToCreate = {
    name: "Patch drug",
  };

  const responseForPost = await request
    .post("/drugs")
    .send(drugToCreate)
    .expect(200);

  const drugNewName = {
    name: "patched drug",
  };

  const responseForPatch = await request
    .patch(`/drugs/${responseForPost.body._id}`)
    .send(drugNewName);
  expect(200);

  expect(flatted.stringify(responseForPatch)).toContain(`${drugNewName.name}`);
});
