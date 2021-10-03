import { useState, useEffect } from 'react'
import React, {Fragment} from 'react';
import { Form } from './Form';
import { useAlert } from 'react-alert'
import { useAuthDataContext } from './auth-provider';


const Leads = () => {

  //const { token } = useAuthDataContext();
    const token = localStorage.getItem('token') 
    const [leads, setLeads] = useState([])
    const [hasError, setHasError] = useState(false);
    const alert = useAlert()

   useEffect(() => {
    
            const getLeads = async () => {
              const tasksFromServer = await fetchTasks()
              setLeads(tasksFromServer)
    }

    getLeads()
  }, [])

     const fetchTasks = async () => {
      
   
      const headers = { 
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      }
        const res = await fetch('api/leads', { headers })

        const data = await res.json()
        return data
       
        }
  

      const deleteLead = async (id) => {
            const res = await fetch(`api/leads/${id}`, {
              method: 'DELETE',
              headers: {
                'Content-type': 'application/json',
                'Authorization': `Token ${token}`
              },
            })
            setLeads(leads.filter((lead) => lead.id !== id))
            alert.success("Lead deleted")
          }
          
           
  return(

        <Fragment>
          {hasError && <p>Something went wrong.</p>}
          <Form leads={leads} setLeads={setLeads} />
            <h2>Leads</h2>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th />
                     </tr>
                </thead>
                <tbody>
                    { leads.map(lead => (
                        <tr key={lead.id}>
                             <td>{lead.id}</td>
                             <td>{lead.name}</td>
                             <td>{lead.email}</td>
                             <td>{lead.message}</td>
                             <td>
                                <button className="btn btn-danger btn-sm" onClick={() => deleteLead(lead.id)}>
                                    Delete
                                </button>
                             </td>
                        </tr>

                   ))}
                </tbody>
            </table>
            
        </Fragment>
    )


}

export default Leads;