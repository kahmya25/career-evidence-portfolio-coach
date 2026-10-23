# Access control status

| Resource/action | Initial policy | Status |
|---|---|---|
| Evidence list/read/update/delete | Authenticated owner only | Implemented in API routes |
| Registration role | Always `student` | Implemented |
| Login | Verified email required | Implemented; verification workflow pending |
| Mentor shared evidence | Explicit grant + invitation acceptance | Planned, not implemented |
| Public portfolio | Explicit approved projection only | Planned, not implemented |
| Administrator operations | Approved staff role; no default private-document access | Planned, not implemented |
| CSRF | Token issuance and validation required | Pending; do not deploy publicly yet |
