module.exports = {
  "/client": {
    post: {
      tags: ["Clients"],
      summary: "Create new client in API",
      description: "Create new client",
      parameters: [
        {
          name: "user",
          in: "body",
          required: true,
          description: "User that we want to create",
          schema: {
            $ref: "#/definitions/User"
          }
        }
      ],
      produces: ["application/json"],
      responses: {
        "201": {
          description: "New user is created",
          schema: {
            $ref: "#/definitions/Created201"
          }
        },
        "400": {
          description: "Incomplete or incorrect user creation data",
          schema: {
            $ref: "#/definitions/Error400"
          }
        },
        "401": {
          description: "Token invalid",
          schema: {
            $ref: "#/definitions/Error401"
          }
        },
        "403": {
          description: "Token invalid or User not allow",
          schema: {
            $ref: "#/definitions/Error403"
          }
        },
        "422": {
          description: "E-mail already registered",
          schema: {
            $ref: "#/definitions/Error422"
          }
        },
        "500": {
          description: "Internal Server Error",
          schema: {
            $ref: "#/definitions/Error500"
          }
        }
      }
    },
    get: {
      tags: ["Clients"],
      summary: "Get all clients with given ID",
      responses: {
        "200": {
          description: "User is found",
          schema: {
            $ref: "#/definitions/OK200"
          }
        },
        "401": {
          description: "Token invalid",
          schema: {
            $ref: "#/definitions/Error401"
          }
        },
        "403": {
          description: "Token invalid or User not allow",
          schema: {
            $ref: "#/definitions/Error403"
          }
        },
        "404": {
          description: "User not found",
          schema: {
            $ref: "#/definitions/Error404"
          }
        },
        "500": {
          description: "Internal Server Error",
          schema: {
            $ref: "#/definitions/Error500"
          }
        }
      }
    },
  },
  "/client/{:id}": {
    parameters: [
      {
        name: ":id",
        in: "path",
        required: true,
        description: "ID of user that we want to find",
        type: "string"
      }
    ],
    get: {
      tags: ["Clients"],
      summary: "Get user with given ID",
      responses: {
        "200": {
          description: "User is found",
          schema: {
            $ref: "#/definitions/OK200"
          }
        },
        "401": {
          description: "Token invalid",
          schema: {
            $ref: "#/definitions/Error401"
          }
        },
        "403": {
          description: "Token invalid or User not allow",
          schema: {
            $ref: "#/definitions/Error403"
          }
        },
        "404": {
          description: "User not found",
          schema: {
            $ref: "#/definitions/Error404"
          }
        },
        "500": {
          description: "Internal Server Error",
          schema: {
            $ref: "#/definitions/Error500"
          }
        }
      }
    },
    delete: {
      summary: "Delete user with given ID",
      tags: ["Clients"],
      responses: {
        "200": {
          description: "User is deleted",
          schema: {
            $ref: "#/definitions/Deleted200"
          }
        },
        "401": {
          description: "Token invalid",
          schema: {
            $ref: "#/definitions/Error401"
          }
        },
        "403": {
          description: "Token invalid or User not allow",
          schema: {
            $ref: "#/definitions/Error403"
          }
        },
        "500": {
          description: "Internal Server Error",
          schema: {
            $ref: "#/definitions/Error500"
          }
        }
      }
    },
    put: {
      summary: "Update user with give ID",
      tags: ["Clients"],
      parameters: [
        {
          name: "user",
          in: "body",
          required: true,
          description: "User that we want to updated",
          schema: {
            $ref: "#/definitions/User"
          }
        }
      ],
      responses: {
        "200": {
          description: "User is updated",
          schema: {
            $ref: "#/definitions/Deleted200"
          }
        },
        "401": {
          description: "Token invalid",
          schema: {
            $ref: "#/definitions/Error401"
          }
        },
        "403": {
          description: "Token invalid or User not allow",
          schema: {
            $ref: "#/definitions/Error403"
          }
        },
        "400": {
          description: "Incomplete or incorrect user update data",
          schema: {
            $ref: "#/definitions/Error400"
          }
        },
        "500": {
          description: "Internal Server Error",
          schema: {
            $ref: "#/definitions/Error500"
          }
        }
      }
    }
  }
};
