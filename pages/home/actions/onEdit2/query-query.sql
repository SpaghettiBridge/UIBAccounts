SELECT * FROM public.accounts WHERE LOWER(public.accounts.email) LIKE LOWER({{ui.tbl_AllAccounts.editedRow.data.email}}) and public.accounts.id != {{ui.tbl_AllAccounts.editedRow.data.id}}