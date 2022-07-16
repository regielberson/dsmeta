import NotificationButton from "../NotificationButton"
import "./styles.css"

function SalesCard() {

  return(  

    <div className="dsmeta-card">

    <h2 className="dsmeta-sales-title"> Vendas </h2>

    <div>
        <div className="dsmeta-form-control-container">
            <input className="dsmeta-form-control" type="text"/>
        </div>
        <div className="dsmeta-form-control-container">
            <input className="dsmeta-form-control" type="text"/>
        </div>
    </div>


<div>
<table        className="dsmeta-sales-table">

<thead>
<tr>
    <th className="show992">ID </th>
<th className="show576">Data </th>
<th> Vendedor </th>
<th className="show992">Visitas </th>
<th className="show992">Vendas </th>
<th>Total </th>
<th> Notificar </th>
</tr>
</thead>
<tbody>

    <tr>     <td className="show992"> 0</td>
        <td className="show576"> 08/05/1988</td>
        <td> Anakin </td>
        <td className="show992"> 10</td>
        <td className="show992"> 5</td>

        <td> R$ 55300.00</td>
          <td>
            <div className="dsmeta-red-btn-container">
            <NotificationButton/>    
            </div>     
         </td>

            
    </tr>

    <tr>
         <td className="show992"> 1</td>
        <td className="show576"> 08/05/1988</td>
        <td> Lucas </td>
        <td className="show992"> 10</td>
        <td className="show992"> 5</td>

        <td> R$ 55300.00</td>
        <td>
            <div className="dsmeta-red-btn-container">
            <NotificationButton/>    
            </div>     
         </td>


            
           
            </tr>
            
    <tr>
        <td className="show992"> 2</td>
    <td className="show576"> 08/05/1988</td>
   
    <td> Mirian </td>
    <td className="show992"> 5</td>
    <td className="show992"> 10</td>
    <td> R$ 55300.00</td>
    <td>
            <div className="dsmeta-red-btn-container">
            <NotificationButton/>    
            </div>     
         </td>

    
    </tr>
    <tr>
        <td className="show992"> 3</td>   
    <td className="show576"> 08/05/1988</td>
    <td> Luam </td>
    <td className="show992"> 10</td>
    <td className="show992"> 5</td>
    <td> R$ 55300.00</td>
    <td>
            <div className="dsmeta-red-btn-container">
            <NotificationButton/>    
            </div>     
         </td>


 
    



    </tr>

</tbody>

</table>
</div>


</div>

  )  
}

export default SalesCard
