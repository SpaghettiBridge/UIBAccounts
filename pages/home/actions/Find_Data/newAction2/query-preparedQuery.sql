Select *, public.join_application_accounts.id as roleID from public.join_application_accounts
left join public.applications on public.applications.id = public.join_application_accounts.app_id

where public.join_application_accounts.account_id = ?