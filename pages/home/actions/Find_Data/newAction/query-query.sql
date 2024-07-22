Select * FROM public.join_project_accounts
left Join public.projects on public.projects.id = public.join_project_accounts.project_id

WHERE public.join_project_accounts.account_id = {{ui.tbl_AllAccounts.selectedRow.data.id}}