const express = require("express");
const helmet = require("helmet");

const ProjectRouter = require("./projects/project-router");
const ResourceRouter = require("./resources/resource-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", ProjectRouter);
server.use("/api/resources", ResourceRouter);

module.exports = server;