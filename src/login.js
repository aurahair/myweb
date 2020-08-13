function Login2(){

  return(
    <div>
    <Input/>
    <Button onClick = {(event)=>{
      console.loge(event)
      alert(event.target.value)
    }}> 로그인 </Button>
    </div>
  )
}


class Login extends React.Component{
  constructor(){
    super()
    this.state = {id : "?????"}
  }

  render(){
    return(
      <div>
      <Input onChange = {(e)=>this.setState({id:e.target.value})}/>
      <Button onClick = { (event) => {
        alert(this.state.id)
      } } > 로그인? </Button>
      </div>
    )
  }
}
