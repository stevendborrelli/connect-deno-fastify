curl \
  --header 'Content-Type: application/json' \
  --data '{"sentence": "I feel happy."}' \
   http://localhost:8080/connectrpc.eliza.v1.ElizaService/Say
