exports.Hello = (req, res)=>{
    res.status(200).json({ status: "OK", data: "This my first express api"})
}