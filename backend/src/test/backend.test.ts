
import request from "supertest";
import app from "../index";
import searchUsers from "../controller/searchUsersController"; 
import { updateFile } from '../controller/updateFileController';
import {csvData} from "c:/Users/Moi/Desktop/fullstack_test/backend/csvData"; 


describe("User Route", () => {
  // Test GET /users route
  it("should respond with a status 200 and data", async () => {
    const response = await request(app)
      .get("/api/users")
      .query({ keyword: "London" });

    expect(response.status).toBe(200);
    expect(response.body.data).toBeDefined();
  });

  it("should respond with a status 404 if no search keyword is provided", async () => {
    const response = await request(app).get("/api/users");

    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Write something");
  });


});

describe("File Routes", () => {
  // Test POST /files route
  it("should upload a file successfully", async () => {
    const response = await request(app)
      .post("/api/files")
      .attach("file", "c:/Users/Moi/Desktop/fullstack_test/backend/csvData"); 

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("The file was uploaded successfully.");
  });

  it("should respond with a status 400 if no file is provided", async () => {
    const response = await request(app).post("/api/files");

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("No file uploaded.");
  });
});

describe("User Controller", () => {
  it("should return matching users for a valid keyword", async () => {
    const keyword = "John";
    
    const result = await searchUsers(keyword);

    expect(result.length).toBeGreaterThan(0);
    expect(result[0].name).toBe("John");
  });

  it("should return 'No results found' for an invalid keyword", async () => {
    const keyword = "InvalidKeyword";

    
    const result = await searchUsers(keyword);

    expect(result).toBe("No results found");
  });
});



describe('updateFile Controller', () => {
  it('should update csvData with the content of the file', async () => {
    
    // const file = 'name,city,country,favorite_sport,Maria,Rosario,Argentina,rugby';

    const fakeFile = 'name,city,country,favorite_sport,Maria,Rosario,Argentina,rugby';

   
    const result = await updateFile(fakeFile);

    expect(result).toBe('The file was uploaded successfully.');
    expect(csvData.length).toBeGreaterThan(0);
  });
});


