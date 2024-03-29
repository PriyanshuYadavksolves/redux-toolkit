import { useAddAccountsMutation, useDeleteAccountsMutation, useGetAccountsQuery,useUpdateAccountsMutation } from "../api/adminSlice";

function Admin() {

  const {data,error,isLoading,isSuccess} = useGetAccountsQuery()
  const [addAccount] = useAddAccountsMutation()
  const [deleteAccount] =useDeleteAccountsMutation()
  const [updateAccount] =useUpdateAccountsMutation()

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Admin Component : </b>
          {isLoading && <p>Loading ...</p>}
        </h4>
        {isSuccess && data && data.map(account => <p key={account.id}>{account.id}:{account.amount}
          <button onClick={()=>deleteAccount(account.id)}>Delete Account</button>
          <button onClick={()=>updateAccount({id:account.id,amount:300})}>Update Account</button>

        </p>)}
        <button onClick={()=>addAccount(101,data.length+1)}>Add Account</button>
      </div>
    </div>
  );
}

export default Admin;
