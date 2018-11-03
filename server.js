const http = require('http'), path = require('path');
const app = express();

app.use(express.static('./dist'));
app.get('/*',(req,res)=> {
  res.sendFile(path.join(_dirname,'/dist/inder.html'));
});

app.listen(process.env.PORT||8080, () => {
  console.log(`Server started`);
});
