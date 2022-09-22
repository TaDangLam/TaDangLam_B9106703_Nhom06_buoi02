const express = require('express');
const cors = require('express');
const morgan = require('morgan');
const app = express("cors");
const ApiError = require("./app/api-error");
const contactsRouter = require("./app/routes/contact.routes");

//morgan
app.use(morgan('combined'));

app.use(cors());
app.use(express.json());


app.use("/api/contacts", contactsRouter);

app.use((req, res, next) => {
    // Code ở đây sẽ chạy khi không có route được định nghĩa nào
    //	khớp với yêu cầu. Gọi next() để chuyển sang middleware xử lý lỗi return
    return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    // Middleware xử lý lỗi tập trung.
    // Trong các đoạn code xử lý ở các route, gọi next(error)
    //	sẽ chuyển về middleware xử lý lỗi này 
    return res.status(err.statusCode || 500).json({message: err.message || "Internal Server Error",});
});
    

module.exports = app;
