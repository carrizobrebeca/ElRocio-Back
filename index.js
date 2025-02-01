const server = require("./src/app")

const PORT = process.env.PORT || 10517;

server.listen(PORT, ()=> {
    console.log(`Lintening on port: ${PORT}`);
    
})
