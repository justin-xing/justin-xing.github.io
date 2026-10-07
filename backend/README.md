# Blog backend

A single AWS Lambda behind a Function URL. It reads the published pages of a
private Notion database and returns them as blog posts for the frontend.

## One-time setup

1. **Notion:** create an internal integration at
   https://www.notion.so/my-integrations with read content access, then add it
   to the database under `•••` → Connections. The database needs a `Published`
   checkbox and a `Date` date property. An optional `Slug` text property
   overrides the URL slug, which otherwise comes from the title.
2. **AWS:** install the AWS CLI v2 and SAM CLI, then run `aws configure` with
   an IAM user or SSO profile (not root). Set a budget alert under Billing.

## Deploy

```sh
sam build
sam deploy --guided   # first time: asks for NotionToken and NotionDatabaseId
```

Put the `FunctionUrl` output in `frontend/.env` as `REACT_APP_POSTS_URL`, then
redeploy the frontend.

Later deploys are just `sam build && sam deploy`. Logs are viewed with
`sam logs --stack-name <stack> --tail`.

## Test

```sh
node --test test.mjs
```
