# Main Street USA

This project is the entry point and front-end for LineLeader. It's a static
react app that talks to the [`utilidoor`](https://github.com/codegoalie/utilidoor)
back-end.

## Deployment

This app is automatically deployed on pushes to `master` through
[Netlify](https://app.netlify.com/sites/main-street-usa/overview) to
[lineleader.io](https://lineleader.io).

### SSL/TLS

We use
[Cloudflare](https://dash.cloudflare.com/02f82bb21b8002333af9149f3cbf34eb/lineleader.io)
for DNS, content distribution, and SSL/TLS termination. Netlify will show HTTPS not
setup, but the pages are still being served over SSL.
