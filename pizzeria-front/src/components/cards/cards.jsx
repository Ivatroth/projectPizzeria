import Cardd from "../card/card"

export default function Cards({elegidos}) {
 
  return (
    <div className="container">
      <div className="row d-flex justify-content-around align-items-center">

          {elegidos?.map((prod)=>{
           return <Cardd key={prod.id} className="col-4 col-md-6 col-sm-12" producto={prod} />
                
          })}

      </div>
    </div>
  )
}
