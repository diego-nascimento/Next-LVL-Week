import app from './app';


app.listen(8081, (error)=>{
  if(error){
    console.log('error');
  }else{
    console.log('Server Running on port 8081');
  }
})