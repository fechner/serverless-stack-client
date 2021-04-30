const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-upload-fechner-bucket",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://4f8g6t1hhk.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_94eBTT24Z",
      APP_CLIENT_ID: "11ol3f1qe6smblrg5cvbnvk5b",
      IDENTITY_POOL_ID: "us-east-1:eed75929-9dfd-46fb-81f3-51102ab03396",
    },
  };
  
  export default config;