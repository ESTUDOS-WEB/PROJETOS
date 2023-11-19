export default {
  get: function (request, response) {
    console.log("GET /");
    response.status(200).json({ message: "OK" });
  },
  post: function (request, response) {
    console.log("POST /");
    response.status(201).json({ message: "OK", register: "objeto" });
  },
  put: function (request, response) {
    console.log("PUT /");
    response.status(201).json({ message: "OK", register: "objeto" });
  },
  delete: function (request, response) {
    console.log("DELETE /");
    response.status(201).json({ message: "OK", register: "objeto" });
  },
};
