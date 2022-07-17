import NotificationButton from "../NotificationButton"
import "./styles.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import axios from "axios";




function SalesCard() {

    
 const min =  new Date(new Date().setDate(new Date().getDate() - 365));
 const max = new Date();


  const [minDate, setMinDate]   = useState(min);
  const [maxDate, setMaxDate] = useState(max);

   useEffect(() => {

       axios.get( "http://localhost:8080/sales").then(Response=> {

        console.log(Response.data)
       })

   }, []);


  return(  

    <div className="dsmeta-card">

    <h2 className="dsmeta-sales-title"> Vendas </h2>

    <div>
        <div className="dsmeta-form-control-container">
        <DatePicker
    selected={minDate}
    onChange={(date: Date) => setMinDate(date)}
    className="dsmeta-form-control"
    dateFormat="dd/MM/yyyy"
/>
        </div>
        <div className="dsmeta-form-control-container">
        <DatePicker
    selected={maxDate}
    onChange={(date: Date) => setMaxDate(date)}
    className="dsmeta-form-control"
    dateFormat="dd/MM/yyyy"
/>
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
