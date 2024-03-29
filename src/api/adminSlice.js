import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const adminApi = createApi({
    reducerPath: 'admin',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
    endpoints: (builder) => ({
      getAccounts: builder.query({  //query for reading data otherwise use mutation
        query: () => `accounts`,
        providesTags:['accounts']
      }),

      addAccounts: builder.mutation({  //query for reading data otherwise use mutation
        query: (amount,id) => ({
            url: 'accounts',
            method : 'POST',
            body:{amount,id}
        }),
        invalidatesTags:['accounts']  //jo jo data purana ho gya h unhe invalidates kr do
      }),

      deleteAccounts: builder.mutation({  //query for reading data otherwise use mutation
        query: (id) => ({
            url: 'accounts/'+id,
            method : 'DELETE',
        }),
        invalidatesTags:['accounts']  //jo jo data purana ho gya h unhe invalidates kr do
      }),

      updateAccounts: builder.mutation({  //query for reading data otherwise use mutation
        query: ({id,amount}) => ({
            url: 'accounts/'+id,
            method : 'PATCH',
            body:{amount}
        }),
        invalidatesTags:['accounts']  //jo jo data purana ho gya h unhe invalidates kr do
      }),
    }),

  })

  //this is hook
  export const { useGetAccountsQuery,useAddAccountsMutation,useDeleteAccountsMutation,useUpdateAccountsMutation } = adminApi 