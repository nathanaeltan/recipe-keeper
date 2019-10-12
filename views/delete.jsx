var React = require('react');
const Nav = require('./navbar')
class Delete extends React.Component {
  render() {
   let recipeArr= this.props.recipeArr;
    return (
      <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        </head>
       <body>
         <Nav/>
         <div className="container pt-5 text-center">
         <h1 className="display-2">You are deleting <mark>{this.props.recipepage.name}</mark></h1>
           <h2 className="display-4">Are you sure?</h2>
         <form className="pt-3" method="POST" action={"/deleted/" + (recipeArr.indexOf(this.props.recipepage) + 1) + '?_method=delete'}>
        <button class="btn btn-danger" type="submit" value="Confirm">Confirm</button>
        <button class="btn btn-info text-white" ><a className="text-white" href="/home">Back To Home</a></button>
         </form>
         </div>
           
       </body>
      </html>
    );
  }
}

module.exports = Delete;